import React from "react";
import "./FetchAPI.scss";
import { Link } from "react-router-dom";

const Data = {
  fetch: {
    items: [
      {
        to: "",
        label: "abc"
      },
      {
        to: "/jagshdkj",
        label: "sadas"
      }
    ]
  },
  axios: {
    items: [
      {
        to: ""
      }
    ]
  }
};

class FetchAPIHome extends React.Component {
  render() {
    return (
      <div>
        <ul>
          Fetch
          <li>
            <Link to="/fetch-api/no-fetch-api">No Fetch</Link>
          </li>
          <li>
            <Link to="/fetch-api/using-fetch-with-a-third-party-api">
              Using Fetch with a third-party API
            </Link>
          </li>
          <li>
            <Link to="/fetch-api/using-fetch-with-self-owned-api">
              Using Fetch With Self-Owned API
            </Link>
          </li>
        </ul>

        <ul>
          axios
          <li>
            <Link to="/fetch-api/using-axios-with-a-third-party-api">
              Using axios with a third-party API
            </Link>
          </li>
          <li>
            <Link to="/fetch-api/using-axios-with-your-own-api">
              Using axios with your own API
            </Link>
          </li>
          <li>
            <Link to="/fetch-api/async-and-await">async and await</Link>
          </li>
        </ul>

        <ul>
          My Project API
          <li>
            <Link to="/fetch-api/exam1">Exam 1</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default FetchAPIHome;
