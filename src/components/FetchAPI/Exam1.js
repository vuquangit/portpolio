import React from "react";

class Exam1 extends React.Component {
  state = {
    dataObject: [],
    isLoading: true,
    error: null
  };

  getData() {
    fetch(
      `https://app.dailynow.co/v1/posts/latest?latest=2019-05-11T11:06:33.637Z&page=0&pageSize=30`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          dataObject: data,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }
  componentDidMount() {
    this.getData();
  }

  render() {
    const { isLoading, error, dataObject } = this.state;
    console.log(dataObject);
    return (
      <React.Fragment>
        {error ? <p>Error: {error.message}</p> : null}
        {!isLoading ? (
          dataObject.map(item => {
            const { id, title } = item;
            return <div key={id}>{title}</div>;
          })
        ) : (
          <p>Loading...</p>
        )}
      </React.Fragment>
    );
  }
}

export default Exam1;
