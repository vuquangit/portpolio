import React from "react";
import "./FetchAPI.scss";
import { Link } from "react-router-dom";
import { BASE_URL, ROUTE } from "./route";

class FetchAPIHome extends React.Component {
  render() {
    return (
      <div>
        <ul className="list-group ">
          <strong>1. Fetch</strong>
          {ROUTE.filter(
            item => item.projectType === "fetch" && item.show === true
          ).map(item => (
            <Link to={`${BASE_URL}${item.path}`} key={item.id}>
              <li className="list-group-item">{item.label}</li>
            </Link>
          ))}
        </ul>

        <ul className="list-group">
          <strong>2. axios</strong>
          {ROUTE.filter(
            item => item.projectType === "axios" && item.show === true
          ).map(item => (
            <Link to={`${BASE_URL}${item.path}`} key={item.id}>
              <li className="list-group-item">{item.label}</li>
            </Link>
          ))}
        </ul>

        <ul className="list-group">
          <strong>3. My Project API</strong>
          {ROUTE.filter(
            item => item.projectType === "Project" && item.show === true
          ).map(item => (
            <Link to={`${BASE_URL}${item.path}`} key={item.id}>
              <li className="list-group-item">{item.label}</li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default FetchAPIHome;
