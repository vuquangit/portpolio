import React from "react";
import { MyContext } from "./MyContext";

export default class EnterSearchPhoto extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <div className="search-object">
            <input
              type="text"
              placeholder="Search..."
              required="required"
              value={context.state.search}
              onChange={e => context.handleChangeSearchPhoto(e)}
            />
            <button type="submit" onClick={e => context.onSubmitSearchPhoto(e)}>
              Search
            </button>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
