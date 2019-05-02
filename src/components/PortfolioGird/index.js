import React from "react";
import mock from './mock'
import PortfolioItem from './PortfolioItem'
import './Portfolio.scss'

export default class PortfolioGrid extends React.Component {
  render() {
    return (
      <section class="bg-light" id="portfolio">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading text-uppercase">Portfolio</h2>
              <h3 class="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div class="row">
           {mock.map( (item, index) => (
               <PortfolioItem {...item} key={index} />
           ) )}
          </div>
        </div>
      </section>
    );
  }
}
