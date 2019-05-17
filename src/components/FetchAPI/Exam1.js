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
function updateState(that, data) {
  return new Promise(resolve => {
    that.setState(data, () => resolve());
  });
}

class MyProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
    this.update = this.update.bind(this);
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

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          update: this.update
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
      search: "girl",
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
      //console.log(this.state.page);
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
      //search: "",
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
    const { isLoading, error, dataObject, modalIsOpen, modalItem } = this.state;

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

          {/* Modal */}
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.openModal.bind(this)}
          >
            Open Modal
          </button>

          <ModalImage
            items={modalItem}
            modalIsOpen={modalIsOpen}
            closeModal={this.closeModal}
            handleModalCloseRequest={this.handleModalCloseRequest}
          />

          {error ? <p>Error: {error.message}</p> : null}
          {!isLoading ? (
            <InfiniteScroll
              pageStart={this.state.page}
              //loadMore={this.getData}
              loadMore={() => true} // Tắt load auto scroll
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
                  <Show key={item.id} item={item} openModal={this.openModal} />
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

const Show = ({ item, openModal }) => {
  //console.log(item);
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
                    srcset=""
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

const ModalImage = ({
  item,
  modalIsOpen,
  closeModal,
  handleModalCloseRequest
}) => {
  return (
    <MyContext.Consumer>
      {context => (
        <Modal
          className="Modal__Bootstrap modal-dialog"
          closeTimeoutMS={150}
          isOpen={modalIsOpen}
          onRequestClose={handleModalCloseRequest}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">
                {context.state.data.description
                  ? context.state.data.description
                  : context.state.data.alt_description}
              </h4>
              <button
                type="button"
                className="close"
                onClick={handleModalCloseRequest}
              >
                <span aria-hidden="true">&times;</span>
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div className="modal-body">
              <h4>Really long content...</h4>
              <img
                src="https://images.unsplash.com/photo-1527706005773-ae5d75e90c0e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjcxMTg2fQ"
                alt={context.state.data.alt_description}
              />
              <p>{context.state.data.description}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </MyContext.Consumer>
  );
};
