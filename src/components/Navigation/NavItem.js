import React from "react";

const NavItem = ({ name, href }) => (
  <li className="nav-item">
    <a className="nav-link js-scroll-trigger" href={href}>
      {name}
    </a>
  </li>
);

export default NavItem;
