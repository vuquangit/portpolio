import React from "react";
import "../FetchAPI.scss";
import { MyProvider, MyContext } from "./MyContext";
import ModalImage from "./ModalImage";
import Error from "./Error";
import GalleryImage from "./GalleryImage";
import UserInfo from "./UserPhotoInfo";

class UserPhoto extends React.Component {
  render() {
    const { username } = this.props.match.params;
    return (
      <MyProvider>
        <MyContext.Consumer>
          {context => (
            <div className="exam1">
              <button onClick={() => context.GetDataUserPhoto(username)}>
                Hello user: {username}
              </button>
              <ModalImage />
              <Error />
              <UserInfo />
              <GalleryImage />
            </div>
          )}
        </MyContext.Consumer>
      </MyProvider>
    );
  }
}

export default UserPhoto;
