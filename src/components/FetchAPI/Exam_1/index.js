import React from "react";
import axios from "axios";
import "../FetchAPI.scss";
import Masonry from "react-masonry-component";
import InfiniteScroll from "react-infinite-scroller";
import ItemImage from "./ItemImage";
import { MyProvider } from "./MyContext";
import ModalImage from "./ModalImage";

const accessToken =
  "edaeefaa77fd6a9dfb012f8236bdec0e1d82eb3d38f78aad538e4a5a81ff6c91";
// const refreshToken =
//   "359e21060c1cc86c37eb43310a118f90f6466f369ca0e010a3f886f2fd0280a4";
const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

class Exam1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataObject: [],
      isLoading: true,
      error: null,
      search: "cat",
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
        // `https://api.unsplash.com/users/${search}/photos?page=${page}&per_page=100`,
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
      console.log(this.state.dataObject);
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
