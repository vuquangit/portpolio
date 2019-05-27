import React from "react";
import { MyContext } from "./MyContext";
import { Input } from "antd";

export default class EnterSearchPhoto extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <div className="enter-search">
            <Input.Search
              placeholder="input search text"
              enterButton="Search"
              size="large"
              onChange={value => context.handleChangeSearchPhoto(value)}
              onSearch={context.onSubmitSearchPhoto}
            />
            {/* <input
              type="text"
              placeholder="Search..."
              required="required"
              value={context.state.search}
              onChange={e => context.handleChangeSearchPhoto(e)}
            />

            <Button
              type="primary"
              icon="search"
              onClick={e => context.onSubmitSearchPhoto(e)}
            >
              Search
            </Button> */}
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
