import React from "react";
import "./FetchAPI.scss";
import { Link } from "react-router-dom";
import { BASE_URL, ROUTE } from "./route";

class FetchAPIHome extends React.Component {
  render() {
    return (
      <div>
        <ul>
          Fetch
          {ROUTE.filter(
            item => item.projectType === "fetch" && item.show === true
          ).map(item => (
            <li key={item.id}>
              <Link to={`${BASE_URL}${item.path}`}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <ul>
          axios
          {ROUTE.filter(
            item => item.projectType === "axios" && item.show === true
          ).map(item => (
            <li key={item.id}>
              <Link to={`${BASE_URL}${item.path}`}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <ul>
          My Project API
          {ROUTE.filter(
            item => item.projectType === "Project" && item.show === true
          ).map(item => (
            <li key={item.id}>
              <Link to={`${BASE_URL}${item.path}`}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FetchAPIHome;
