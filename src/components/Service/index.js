import React from "react";
import "./Service.scss";
import ServiceItem from "./ServiceItem";
import mock from "./mock";

export default class Service extends React.Component {
  render() {
    return (
      // https://www.vectary.com/
      <div className="homepage-blogArticles">
        <section className="homepage-section">
          <div className="homepage-section_text">
            <h2 className="heading-dark">
              <span className="heading-bold">SERVICE</span> - Info
            </h2>
            <p className="heading-sub heading-maxWidth">
              Tune in to the latest Vectary posts on interesting projects,
              trends, and all the other cool things related to the world of 3D
              design.
            </p>
          </div>

          <div className="homepage-section_media suggestions">
            <div>
              <ul class="suggestions_list">
                {mock.map((item, index) => (
                  <ServiceItem {...item} key={index} />
                ))}
              </ul>
            </div>
          </div>
          <a href="/3d-modeling/" className="btn btn-shadow btn-md">
            Read more
          </a>
        </section>
      </div>
    );
  }
}
