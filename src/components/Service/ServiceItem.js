import React from "react";

export default class ServiceItem extends React.Component {
  render() {
    return (
      <li className="suggestions_item">
        <a href={this.props.HrefItem}>
          <div className="suggestions_img">
            <img src={this.props.Imgsrc} alt="Service of CG" />
          </div>
          <div className="suggestions_info">
            <h5>{this.props.TitleInfoItem}</h5>
            <p className="blog-text">{this.props.DetailInfoItem}</p>
          </div>
        </a>
      </li>
    );
  }
}
