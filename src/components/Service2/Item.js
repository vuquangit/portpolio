import React from "react";

export const Item = ({ logo, title, info }) => (
  <div className="col-md-4">
    <div className="service-img">
      <img src={logo} alt="Service of CG" className="serviceimg" />
    </div>
    <h4 className="service-heading">{title}</h4>
    <p className="text-muted">{info}</p>
  </div>
);

export default Item;
