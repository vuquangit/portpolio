import React from "react";
import "../FetchAPI.scss";
import Masonry from "react-masonry-component";
import InfiniteScroll from "react-infinite-scroller";
import ItemImage from "./ItemImage";
import { MyProvider, MyContext } from "./MyContext";
import ModalImage from "./ModalImage";
import EnterSearchPhoto from "./EnterSearchPhoto";

const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

class Exam1 extends React.Component {
  render() {
    return (
      <MyProvider>
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              <EnterSearchPhoto />
              <ModalImage />

              {context.state.error ? (
                <p>Error: {context.state.error.message}</p>
              ) : null}
              {!context.state.isLoading ? (
                <InfiniteScroll
                  pageStart={context.state.page}
                  //loadMore={context.GetDataSearching} // Enable Scroll
                  loadMore={() => true} // Tắt load auto scroll
                  hasMore={context.state.page < 3} //Number page of scroll
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
                    {context.state.dataSearchPhoto.map(item => (
                      <ItemImage key={item.id} item={item} />
                    ))}
                  </Masonry>
                </InfiniteScroll>
              ) : (
                <p>
                  {context.state.search && !context.state.isLoading
                    ? "Please wait..."
                    : null}
                </p>
              )}
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </MyProvider>
    );
  }
}

export default Exam1;
