import React from "react";

export const Item = ({logo, title, info}) => (
  <div class="col-md-4">
    <div className="service-img">
      <img src={logo} alt="Service of CG" />
    </div>
    <h4 class="service-heading">{title}</h4>
    <p class="text-muted">{info}</p>
  </div>
);

export default Item;
