import React from "react";
import { MyContext } from "./MyContext";
//import UserPhoto from "./UserPhoto";
import { Link } from "react-router-dom";

class ItemImage extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <MyContext.Consumer>
        {context => (
          <React.Fragment>
            <div className="item">
              <img
                src={item.urls.small}
                alt={item.alt_description}
                onClick={() => {
                  context.openModalImage(item);
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

                <a
                  title="Add to collection"
                  className="add_collection"
                  href=" "
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
                  <span>Collect</span>
                </a>
              </div>
              <div className="bottom">
                <Link to={`/fetch-api/exam1/${item.user.username}`}>
                  <div className="user">
                    <img
                      className="userimg"
                      src={item.user.profile_image.small}
                      //srcset=" "
                      role="presentation"
                      alt={`Go to ${item.user.username} profile`}
                    />

                    <div className="username">{item.user.name}</div>
                  </div>
                </Link>

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
  }
}

export default ItemImage;
