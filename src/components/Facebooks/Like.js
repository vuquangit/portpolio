import React from "react";

export default class Like extends React.Component {
  render() {
    return (
      <div
        className="fb-like"
        data-href="https://vuquangit.netlify.com/"
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
