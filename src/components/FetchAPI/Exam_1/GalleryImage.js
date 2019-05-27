import React from "react";
import { MyContext } from "./MyContext";
import Masonry from "react-masonry-component";
import InfiniteScroll from "react-infinite-scroller";
import ItemImage from "./ItemImage";
const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

class GalleryImage extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <>
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
          </>
        )}
      </MyContext.Consumer>
    );
  }
}

export default GalleryImage;
