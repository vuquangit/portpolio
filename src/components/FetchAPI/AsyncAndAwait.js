import React from "react";
import axios from "axios";

class AsyncAndAwait extends React.Component {
  state = {
    posts: [],
    isLoading: true,
    error: null
  };

  async getPost() {
    const api = axios.create({
      baseURL: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/posts.json"
    });

    const response = await api.get();
    try {
      this.setState({
        posts: response.data.posts,
        isLoading: false
      });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }
  componentDidMount() {
    this.getPost();
  }

  render() {
    const { isLoading, posts } = this.state;
    return (
      <React.Fragment>
        <h1>Project: async and await</h1>
        <h2>Random Post</h2>
        <div>
          {!isLoading ? (
            posts.map(post => {
              const { _id, title, content } = post;
              return (
                <div key={_id}>
                  <h2>{title}</h2>
                  <p>{content}</p>
                  <hr />
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default AsyncAndAwait;
