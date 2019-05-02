import React from "react";

const PortfolioGrid = ({ url, logo, title, info }) => (
  <div class="col-md-4 col-sm-6 portfolio-item suggestions_item">
    <a class="portfolio-link" data-toggle="modal" href={url}>
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fas fa-plus fa-3x" />
        </div>
      </div>
      <img class="img-fluid" src={logo} alt="" />

      <div class="portfolio-caption">
        <h4>{title}</h4>
        <p class="text-muted">{info}</p>
      </div>
    </a>
  </div>
);

export default PortfolioGrid;
