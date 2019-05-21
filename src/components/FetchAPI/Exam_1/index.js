import React from "react";
import "../FetchAPI.scss";
import { MyProvider } from "./MyContext";
import ModalImage from "./ModalImage";
import EnterSearchPhoto from "./EnterSearchPhoto";
import Error from "./Error";
import GalleryImage from "./GalleryImage";

class Exam1 extends React.Component {
  render() {
    return (
      <MyProvider>
        <div className="exam1">
          <EnterSearchPhoto />
          <ModalImage />
          <Error />
          <GalleryImage />
        </div>
      </MyProvider>
    );
  }
}

export default Exam1;
