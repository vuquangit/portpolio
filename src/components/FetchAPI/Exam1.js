import React from "react";
import axios from "axios";
import "./FetchAPI.scss";
import Masonry from "react-masonry-component";
import InfiniteScroll from "react-infinite-scroller";
import Modal from "react-modal";

const accessToken =
  "edaeefaa77fd6a9dfb012f8236bdec0e1d82eb3d38f78aad538e4a5a81ff6c91";
// const refreshToken =
//   "359e21060c1cc86c37eb43310a118f90f6466f369ca0e010a3f886f2fd0280a4";
const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

const MyContext = React.createContext();
class MyProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
    this.update = this.update.bind(this);
    this.clearItemData = this.clearItemData.bind(this);
  }

  // async update(data) {
  //   //try {
  //   console.log(data);
  //   await new Promise(resolve => {
  //     this.setState({ data: [...data] }, () => resolve());
  //   });
  //   console.log(this.state.data);
  //   // } catch (e) {
  //   //   console.log(`Error get data image: ${e}`);
  //   // }
  // }

  update(data) {
    this.setState(() => {
      return { data };
    });
    console.log(data);
  }

  clearItemData() {
    this.setState({ data: [] });
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          update: this.update,
          clearItemData: this.clearItemData
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

class Exam1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataObject: [],
      isLoading: true,
      error: null,
      search: "viet nam",
      page: 1,
      modalIsOpen: false //Modal
    };

    this.openModal = this.openModal.bind(this);
  }

  getData = async () => {
    try {
      const { page, search } = this.state;
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=${page}&query=${search}&per_page=1000`,
        {
          headers: {
            "Access-Control-Allow-Origin": " * ",
            Authorization: `Bearer ${accessToken}`
          }
        }
      );

      this.setState({
        dataObject: [...this.state.dataObject, ...response.data.results],
        page: this.state.page + 1
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  componentDidMount() {
    this.getData(); //Auto
  }

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.getData();
    this.setState({
      dataObject: [],
      isLoading: true,
      error: null,
      page: 1
    });
  };

  //Modal
  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleModalCloseRequest = () => {
    // opportunity to validate something and keep the modal open even if it
    // requested to be closed
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { isLoading, error, dataObject, modalIsOpen } = this.state;

    return (
      <MyProvider>
        <React.Fragment>
          <div className="search-object">
            <input
              type="text"
              placeholder="Search..."
              required="required"
              value={this.state.search}
              onChange={e => this.handleChange(e)}
            />
            <button type="submit" onClick={e => this.onSubmit(e)}>
              Search
            </button>
          </div>

          <ModalImage
            modalIsOpen={modalIsOpen}
            closeModal={this.closeModal}
            handleModalCloseRequest={this.handleModalCloseRequest}
          />

          {error ? <p>Error: {error.message}</p> : null}
          {!isLoading ? (
            <InfiniteScroll
              pageStart={this.state.page}
              loadMore={this.getData} // Enable Scroll
              // loadMore={() => true} // Tắt load auto scroll
              hasMore={this.state.page < 3} //Number page of scroll
              loader={
                <div className="loader" key={0}>
                  Loading scroll...
                </div>
              }
            >
              <Masonry
                className={"my-gallery-class"} // default ''
                elementType={"ul"} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
              >
                {dataObject.map(item => (
                  <ItemImage
                    key={item.id}
                    item={item}
                    openModal={this.openModal}
                  />
                ))}
              </Masonry>
            </InfiniteScroll>
          ) : (
            <p>{this.state.search && !isLoading ? "Please wait..." : null}</p>
          )}
        </React.Fragment>
      </MyProvider>
    );
  }
}

export default Exam1;

const ItemImage = ({ item, openModal }) => {
  return (
    <MyContext.Consumer>
      {context => (
        <React.Fragment>
          <div className="item">
            <img
              src={item.urls.small}
              alt={item.alt_description}
              onClick={() => {
                openModal();
                context.update(item);
              }}
            />

            <div className="top">
              <a title="Like photo" className="like_photo" href=" ">
                <svg
                  className="heart"
                  version="1.1"
                  viewBox="0 0 32 32"
                  width="32"
                  height="32"
                  aria-hidden="false"
                >
                  <path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z" />
                </svg>
                <span>{item.user.total_likes}</span>
              </a>

              <a title="Add to collection" className="add_collection" href=" ">
                <svg
                  className="_2rdbO"
                  version="1.1"
                  viewBox="0 0 32 32"
                  width="32"
                  height="32"
                  aria-hidden="false"
                >
                  <path d="M14 3h4v26h-4zM29 14v4h-26v-4z" />
                </svg>
                <span>Collect</span>
              </a>
            </div>
            <div className="bottom">
              <div className="user">
                <a href={item.user.links.html}>
                  <img
                    className="userimg"
                    src={item.user.profile_image.small}
                    //srcset=" "
                    role="presentation"
                    alt={`Go to ${item.user.username} profile`}
                  />
                </a>
                <div className="username">
                  <a href={item.user.links.html}>{item.user.name}</a>
                </div>
              </div>

              <div className="download">
                <a
                  title="Download photo"
                  href={`${item.links.download}?force=true`}
                  download
                  rel=" nofollow noopener noreferrer"
                  target="_blank" //Open new tab
                  className="down-icon"
                >
                  <svg
                    version="1.1"
                    viewBox="0 0 32 32"
                    width="32"
                    height="32"
                    aria-hidden="false"
                  >
                    <path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </MyContext.Consumer>
  );
};

Modal.setAppElement("#root");

const ModalImage = ({ modalIsOpen, closeModal, handleModalCloseRequest }) => {
  return (
    <div className="modal-image">
      <MyContext.Consumer>
        {context => (
          <Modal
            className="Su_hz"
            closeTimeoutMS={150}
            isOpen={modalIsOpen}
            onRequestClose={handleModalCloseRequest}
            overlayClassName="Overlay"
          >
            <div className="_3aAtM">
              <button
                className="_1NHYN DWLeW Ddtb4"
                onClick={() => {
                  closeModal();
                  context.clearItemData();
                }}
              >
                <svg
                  className="_3p8U1"
                  version="1.1"
                  viewBox="0 0 32 32"
                  width="32"
                  height="32"
                  aria-hidden="false"
                >
                  <path d="M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z" />
                </svg>
              </button>
            </div>

            <div className="_11429 _1PdBr">
              <div data-test="photos-route">
                <div className="WMwuA">
                  <div>
                    <div className="_33qjA">
                      <header className="_307c3">
                        <div className="HAAez _2iWc-">
                          <span className="_2aPXR">
                            <div className="_2BNtU">
                              <div className="_2tX2R">
                                <div
                                  className="ODWzM" /*style="width: 32px; height: 32px;"*/
                                >
                                  {context.state.data.user ? (
                                    <a
                                      href={context.state.data.user.links.html}
                                    >
                                      <img
                                        className="_1FdcY"
                                        src={
                                          context.state.data.user.profile_image
                                            .small
                                        }
                                        //srcset=""
                                        role="presentation"
                                        alt={`Go to ${
                                          context.state.data.user.name
                                        }'s profile`}
                                      />
                                    </a>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                            <div className="_80uCh">
                              <div className="_2tX2R">
                                {context.state.data.user ? (
                                  <div>
                                    <a
                                      className="_3XzpS _1ByhS _4kjHg _1O9Y0 _3l__V _1CBrG xLon9"
                                      href={context.state.data.user.links.html}
                                    >
                                      {context.state.data.user.name}
                                    </a>
                                    <a
                                      className="_3l__V _1CBrG vTCGl _1ByhS _4kjHg"
                                      href={context.state.data.user.links.html}
                                    >
                                      @{context.state.data.user.username}
                                    </a>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </span>
                        </div>
                        <div className="_3-6v7">
                          <div className="_27vvN _2iWc-">
                            <a
                              title="Like photo"
                              className="_37zTg _1l4Hh _1CBrG _1zIyn xLon9 _1EJJ- NDx0k _2Xklx"
                              href=" "
                              onClick={() => {
                                alert("Liked this photo");
                              }}
                            >
                              <svg
                                className="BWSrD"
                                version="1.1"
                                viewBox="0 0 32 32"
                                width="32"
                                height="32"
                                aria-hidden="false"
                              >
                                <path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z" />
                              </svg>
                              <span className="_2ER2Y">
                                {context.state.data.user
                                  ? context.state.data.user.total_likes
                                  : null}
                              </span>
                            </a>
                          </div>
                          <div className="_27vvN _2iWc-">
                            <a
                              title="Add to collection"
                              className="_37zTg _1l4Hh _1CBrG _1zIyn xLon9 _3dBbn NDx0k _2Xklx"
                              href=" "
                              onClick={() => {
                                alert("Added your collection");
                              }}
                            >
                              <svg
                                className="_2rdbO"
                                version="1.1"
                                viewBox="0 0 32 32"
                                width="32"
                                height="32"
                                aria-hidden="false"
                              >
                                <path d="M14 3h4v26h-4zM29 14v4h-26v-4z" />
                              </svg>
                              <span className="_1eyJo">Collect</span>
                            </a>
                          </div>
                          <div className="_13Q- _27vvN _2iWc-">
                            <a
                              title="Download photo"
                              href={`${
                                context.state.data.links
                                  ? context.state.data.links.download
                                  : null
                              }?force=true`}
                              rel="nofollow"
                              download=""
                              /*target="_blank"*/

                              className="_1yvXd _1l4Hh _1CBrG _1zIyn xLon9 _1Tfeo _1AA_u TPbmh _2Xklx"
                            >
                              <svg
                                className="Apljk _11dQc _1Jd5C"
                                version="1.1"
                                viewBox="0 0 32 32"
                                width="32"
                                height="32"
                                aria-hidden="false"
                              >
                                <path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z" />
                              </svg>
                              <span className="_2Aga-">Download free</span>
                            </a>
                          </div>
                        </div>
                      </header>
                    </div>
                    <div className="pADQw">
                      <div
                        className="_2yFK- IEpfq" /* style="padding-bottom: 150%;"*/
                      >
                        {/* <img
                          sizes="(max-width: 767px) 100vw, (max-width: 366px) 334px, (max-height: 676px) 334px, (min-aspect-ratio: 3456/5184) calc((calc(100vh - 175px)) * 0.666667), calc(100vw - 32px)"
                          srcset="https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80 334w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80 634w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=668&amp;q=80 668w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80 934w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1234&amp;q=80 1234w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1268&amp;q=80 1268w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1534&amp;q=80 1534w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1834&amp;q=80 1834w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1868&amp;q=80 1868w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2134&amp;q=80 2134w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2434&amp;q=80 2434w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2468&amp;q=80 2468w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2734&amp;q=80 2734w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3034&amp;q=80 3034w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3068&amp;q=80 3068w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3334&amp;q=80 3334w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3456&amp;q=80 3456w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3456&amp;q=80 3456w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3456&amp;q=80 3456w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3456&amp;q=80 3456w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3456&amp;q=80 3456w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3456&amp;q=80 3456w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3456&amp;q=80 3456w, https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3456&amp;q=80 3456w"
                          src="https://images.unsplash.com/photo-1496840220025-4cbde0b9df65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                          alt="woman carrying backpack while sitting cross legs on hallway in front of people walking"
                          className="_2zEKz"
                        /> */}

                        {context.state.data.urls ? (
                          <img
                            sizes="(max-width: 767px) 100vw, (max-width: 366px) 334px, (max-height: 676px) 334px, (min-aspect-ratio: 3456/5184) calc((calc(100vh - 175px)) * 0.666667), calc(100vw - 32px)"
                            //srcset=""
                            src={context.state.data.urls.full}
                            alt={context.state.data.alt_description}
                            className="_2zEKz"
                          />
                        ) : null}
                      </div>
                    </div>
                    <div className="_2QvSN">
                      <div>
                        <div className="_1ac-D _3mCZ_">
                          <button className="_1szcv DWLeW _1YS_6">
                            <div className="_2MKkb">
                              <div className="_1w7cG">
                                <svg
                                  className="_1NYtf"
                                  version="1.1"
                                  viewBox="0 0 32 32"
                                  width="32"
                                  height="32"
                                  aria-hidden="false"
                                >
                                  <path d="M19 3v3h4.8l-4.4 4.5 2 2L26 8.2v5h3V3M6 24v-4.6H3V29h9.6v-3H8l5-5-2-2" />
                                </svg>
                              </div>
                            </div>
                            <div
                              className="_2yFK- IEpfq" /*style="padding-bottom: 150%;"*/
                            >
                              {context.state.data.urls ? (
                                <img
                                  sizes="(max-width: 767px) 100vw, (max-width: 366px) 334px, (max-height: 676px) 334px, (min-aspect-ratio: 3456/5184) calc((calc(100vh - 175px)) * 0.666667), calc(100vw - 32px)"
                                  //srcset=""
                                  src={context.state.data.urls.small}
                                  alt={context.state.data.alt_description}
                                  className="_2zEKz"
                                />
                              ) : null}
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="_1ltEq">
                      <div className="_2DxLe _3kEvh">
                        <div className="_28uSB _3kEvh">
                          <a
                            className="_2RL3a xLon9"
                            href="/search/photos/taipei-101%2C-taiwan"
                          >
                            <svg
                              className="_15of1"
                              version="1.1"
                              viewBox="0 0 32 32"
                              width="32"
                              height="32"
                              aria-hidden="false"
                            >
                              <path d="M16 0c-6.7 0-12 5.3-12 12 0 8.6 8.6 17.3 11.2 19.7.4.4 1.1.4 1.5 0 2.7-2.4 11.3-11.1 11.3-19.7 0-6.7-5.3-12-12-12zm0 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
                            </svg>
                            <span className="_20NLS _1ByhS">
                              Taipei 101, Taiwan
                            </span>
                          </a>
                        </div>
                        <div className="_28uSB _3kEvh">
                          <div className="_3PLD4 _3kvp0">
                            <p className="KNDj7 b5rtm _1ByhS">
                              We were on our way back to our place in Taiwan, it
                              was 5:00 pm in the afternoon where a lot of people
                              just went back from work. And we came across to
                              one cool spot where it connected from one building
                              to another and thought we might get a good shot. I
                              definitely am missing this city, a city that never
                              sleeps.
                            </p>{" "}
                            <button className="_19oEl DWLeW">Read more</button>
                          </div>
                        </div>
                      </div>
                      <div className="_3dxKb">
                        <a
                          className="_37zTg _1l4Hh _1CBrG _1zIyn xLon9 _10F2J ldOpn NDx0k _2Xklx"
                          href="/photos/GBgp6Iy16lc/share"
                        >
                          <div className="_10F2J">
                            <svg
                              className="_1xhtJ"
                              version="1.1"
                              viewBox="0 0 32 32"
                              width="32"
                              height="32"
                              aria-hidden="false"
                            >
                              <path d="M0 26c0 1.7.2 3.3.6 4.9.2.9.7.9 1 0 2.1-5.3 5.5-10.3 11.1-11.3h3.3v4.4c0 2 1.2 2.6 2.6 1.4l12.8-11c.7-.6.7-1.6 0-2.3l-12.8-11c-1.4-1.3-2.6-.6-2.6 1.3v4.7c-9.6 1.6-16 9.4-16 18.9z" />
                            </svg>
                            <span className="_3UPwX">Share</span>
                          </div>
                        </a>
                      </div>
                      <div className="_3dxKb">
                        <a
                          className="_37zTg _1l4Hh _1CBrG _1zIyn xLon9 _3JXJ6 NDx0k _2Xklx"
                          href="/photos/GBgp6Iy16lc/info"
                        >
                          <svg
                            className="_1rYbs"
                            version="1.1"
                            viewBox="0 0 32 32"
                            width="32"
                            height="32"
                            aria-hidden="false"
                          >
                            <path d="M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm2 25c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-12c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v12zm0-16c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2z" />
                          </svg>
                          <span className="_1efgd">Info</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </MyContext.Consumer>
    </div>
  );
};
