import React from "react";
import axios from "axios";
import "./FetchAPI.scss";
//import mockData from "./mock";
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

class Exam1 extends React.Component {
  state = {
    dataObject: [],
    isLoading: true,
    error: null,
    search: "rain",
    page: 1,
    modalIsOpen: false //Modal
  };

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
    //this.getData(); //Auto
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
  openModal = () => {
    this.setState({ modalIsOpen: true });
    //console.log(this.state.modalIsOpen);
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleModalCloseRequest = () => {
    // opportunity to validate something and keep the modal open even if it
    // requested to be closed
    this.setState({ modalIsOpen: false });
  };

  handleSaveClicked = e => {
    alert("Save button was clicked");
  };

  render() {
    const { isLoading, error, dataObject } = this.state;

    return (
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
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          handleModalCloseRequest={this.handleModalCloseRequest}
          handleSaveClicked={this.handleSaveClicked}
          className="main-modal"
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
                Loading ...
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
    );
  }
}

export default Exam1;

const Show = ({ item, openModal }) => {
  return (
    <div className="item">
      <img
        src={item.urls.small}
        alt={item.alt_description}
        onClick={openModal}
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
            rel="nofollow"
            download
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
  );
};

Modal.setAppElement("#root");

const ModalImage = ({
  modalIsOpen,
  closeModal,
  handleModalCloseRequest,
  handleSaveClicked
}) => {
  console.log(modalIsOpen);
  return (
    <Modal
      className="Modal__Bootstrap modal-dialog"
      closeTimeoutMS={150}
      isOpen={modalIsOpen}
      onRequestClose={handleModalCloseRequest}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Modal title</h4>
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
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
            Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit
          </p>

          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          </p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleModalCloseRequest}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSaveClicked}
          >
            Save changes
          </button>
        </div>
      </div>
    </Modal>
  );
};
