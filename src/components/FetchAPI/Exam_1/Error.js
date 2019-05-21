import React from "react";
import { MyContext } from "./MyContext";

class Error extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <>
            {context.state.error ? (
              <p>Error: {context.state.error.message}</p>
            ) : null}
          </>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Error;
