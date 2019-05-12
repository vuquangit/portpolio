import React from "react";
import axios from "axios";
import "./FetchAPI.scss";
//import mockData from "./mock";
import Masonry from "react-masonry-component";
import InfiniteScroll from "react-infinite-scroller";
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
    page: 1
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
    this.getData();
  }
  handleSearch() {
    //this.getData();
  }
  render() {
    const { isLoading, error, dataObject } = this.state;

    return (
      <React.Fragment>
        <div className="search-object">
          <label>Search: </label>
          <input
            type="text"
            placeholder="Enter your text..."
            //ref={this.search}
            required="required"
          />
          <button type="submit" onClick={this.handleSearch.bind(this)}>
            Search
          </button>
        </div>

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
                <Show key={item.id} item={item} />
              ))}
            </Masonry>
          </InfiniteScroll>
        ) : (
          <p>Loading...</p>
        )}
      </React.Fragment>
    );
  }
}

export default Exam1;

const Show = ({ item }) => {
  return (
    <div className="item">
      <div>
        <img src={item.urls.small} alt={item.alt_description} />

        <div class="top">
          <a title="Like photo" class="like_photo" href=" ">
            <svg
              class="heart"
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

          <a title="Add to collection" class="add_collection" href=" ">
            <svg
              class="_2rdbO"
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
      </div>
    </div>
  );
};
