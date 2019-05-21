import React from "react";
import "../FetchAPI.scss";
import { MyProvider, MyContext } from "./MyContext";
// import ModalImage from "./ModalImage";
// import EnterSearchPhoto from "./EnterSearchPhoto";
import Error from "./Error";
// import GalleryImage from "./GalleryImage";

class UserPhoto extends React.Component {
  render() {
    const { username } = this.props.match.params;
    return (
      <MyProvider>
        <MyContext.Consumer>
          {context => (
            <div>
              <button onClick={() => context.GetDataUserPhoto(username)}>
                Hello user: {username}
              </button>

              <Error />
            </div>
          )}
        </MyContext.Consumer>
      </MyProvider>
    );
  }
}

export default UserPhoto;
