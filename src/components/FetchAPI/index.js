import React from "react";
import "./FetchAPI.scss";
import NoFetchAPI from "./NoFetch";
import { Switch, Route, Link } from "react-router-dom";
import { Page404 } from "../../pages/404";
import FetchThirdPartyAPI from "./FetchThird-partyAPI";
import FetchWithSelfOwnedAPI from "./FetchWithSelf-OwnedAPI";

export default class FetchAPI extends React.Component {
  render() {
    return (
      <div className="fetch-api">
        <Link to="/fetch-api" component={FetchAPIHome}>
          Back
        </Link>
        <Switch>
          <Route exact path="/fetch-api" component={FetchAPIHome} />
          <Route path="/fetch-api/no-fetch-api" component={NoFetchAPI} />
          <Route
            path="/fetch-api/using-fetch-with-a-third-party-api"
            component={FetchThirdPartyAPI}
          />
          <Route
            path="/fetch-api/using-fetch-with-self-owned-api"
            component={FetchWithSelfOwnedAPI}
          />
          <Route component={Page404} />
        </Switch>
      </div>
    );
  }
}
//#Using Fetch with a third-party API
function FetchAPIHome() {
  return (
    <ul>
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
  );
}
