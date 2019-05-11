import React from "react";

class FetchWithSelfOwnedAPI extends React.Component {
  state = {
    isLoading: true,
    posts: [],
    error: null
  };

  fetchPosts() {
    // The API where we're fetching data from
    fetch(`https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/posts.json`)
      // We get a response and receive the data in JSON format...
      .then(response => response.json())
      // ...then we update the state of our application
      .then(data =>
        this.setState({
          posts: data,
          isLoading: false
        })
      )
      // If we catch errors instead of a response, let's update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }
  componentDidMount() {
    this.fetchPosts();
  }
  render() {
    const { isLoading, posts, error } = this.state;
    return (
      <React.Fragment>
        <h1>React Fetch - Blog</h1>
        <hr />
        {error ? <p>Error: {error}</p>: null}
        {!isLoading ? (
          Object.keys(posts).map(key => <Post key={key} body={posts[key]} />)
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}

const Post = ({ body }) => {
  return (
    <div>
      {body.map(post => {
        const { _id, title, content } = post;
        return (
          <div key={_id}>
            <h2>{title}</h2>
            <p>{content}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default FetchWithSelfOwnedAPI;
