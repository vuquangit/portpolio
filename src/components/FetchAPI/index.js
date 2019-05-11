import React from "react";
import "./FetchAPI.scss";
import NoFetchAPI from "./NoFetch";
import { Switch, Route, Link } from "react-router-dom";
import { Page404 } from "../../pages/404";
import FetchThirdPartyAPI from "./FetchThird-partyAPI";
import FetchWithSelfOwnedAPI from "./FetchWithSelf-OwnedAPI";
import AxiosThirdPartyAPI from "./AxiosThird-partyAPI";
import AxiosWithYourOwnAPI from "./AxiosWithYour-OwnAPI";
import AsyncAndAwait from "./AsyncAndAwait";

export default class FetchAPI extends React.Component {
  render() {
    return (
      <div className="fetch-api">
        <Link to="/fetch-api" component={FetchAPIHome}>
          Back to Fetch-API
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
          <Route
            path="/fetch-api/using-axios-with-a-third-party-api"
            component={AxiosThirdPartyAPI}
          />
          <Route
            path="/fetch-api/using-axios-with-your-own-api"
            component={AxiosWithYourOwnAPI}
          />
          <Route path="/fetch-api/async-and-await" component={AsyncAndAwait} />
          <Route component={Page404} />
        </Switch>
      </div>
    );
  }
}

function FetchAPIHome() {
  return (
    <div>
      <ul>
        Fetch
        <li>
          <Link to="/fetch-api/no-fetch-api">
            No Fetch         
          </Link>
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
    </div>
  );
}
