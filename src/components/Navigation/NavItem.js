import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ menu, id }) => (
  <li className="nav-item">
    <Link to={"/" + id} className="nav-link js-scroll-trigger">
      {menu}
    </Link>
  </li>
);

export default NavItem;
