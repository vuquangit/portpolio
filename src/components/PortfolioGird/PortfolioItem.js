import React from "react";

const PortfolioGrid = ({ url, logo, title, info }) => (
  <div className="col-md-4 col-sm-6 portfolio-item suggestions_item">
    <a className="portfolio-link" data-toggle="modal" href={url}>
      <div className="portfolio-hover">
        <div className="portfolio-hover-content">
          <i className="fas fa-plus fa-3x" />
        </div>
      </div>
      <img className="img-fluid" src={logo} alt="" />

      <div className="portfolio-caption">
        <h4>{title}</h4>
        <p className="text-muted">{info}</p>
      </div>
    </a>
  </div>
);

export default PortfolioGrid;
