import React from "react";
import mock from './mock'
import PortfolioItem from './PortfolioItem'
import './Portfolio.scss'

export default class PortfolioGrid extends React.Component {
  render() {
    return (
        <section className="bg-light" id="portfolio">
            <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Portfolio</h2>
                        <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
                <div className="row">
           {mock.map( (item, index) => (
               <PortfolioItem {...item} key={index} />
           ) )}
          </div>
        </div>
      </section>
    );
  }
}
