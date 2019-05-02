import React from "react";

const AboutItem = ({ id, imgsrc, title, subtitle, info }) => (
  <li className={id % 2 !== 0 ? "timeline-inverted" : null}>
    <div className="timeline-image">
      <img className="rounded-circle img-fluid" src={imgsrc} alt="" />
    </div>
    <div className="timeline-panel">
      <div className="timeline-heading">
        <h4>{title}</h4>
        <h4 className="subheading">{subtitle}</h4>
      </div>
      <div className="timeline-body">
        <p className="text-muted">{info}</p>
      </div>
    </div>
  </li>
);

export default AboutItem;
