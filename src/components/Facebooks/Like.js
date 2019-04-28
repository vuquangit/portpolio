import React from "react";

export default class Like extends React.Component {
  render() {
    return (
      <div
        className="fb-like"
        data-href="https://developers.facebook.com/docs/plugins/"
        data-width=""
        data-layout="standard"
        data-action="like"
        data-size="small"
        data-show-faces="true"
        data-share="true"
      />
    );
  }
}
