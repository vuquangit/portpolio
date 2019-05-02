import React from "react";
import mock from "./mock";
import Item from "./Item";
import "./Service.scss";

export default class Service2 extends React.Component {
  render() {
    return (
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section__heading text-uppercase">Services</h2>
              <h3 className="section__subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row text-center">
            {mock.map((item, index) => (
              <Item {...item} key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
