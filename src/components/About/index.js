import React from "react";
import "./About.scss";
import AboutItem from "./AboutItem";
import mock from "./mock";

export default class AboutPortfolio extends React.Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">About</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                {mock.map((item, index) => (
                  <AboutItem {...item} key={index} />
                ))}
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>Be Part Of Our Story!</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
