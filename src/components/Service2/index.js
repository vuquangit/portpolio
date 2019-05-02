import React from "react";
import mock from "./mock";
import Item from "./Item";
import "./Service.scss";

export default class Service2 extends React.Component {
  render() {
    return (
      <section id="services">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section__heading text-uppercase">Services</h2>
              <h3 class="section__subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div class="row text-center">
            {mock.map((item, index) => (
              <Item {...item} key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
