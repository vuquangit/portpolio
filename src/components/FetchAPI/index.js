import React from "react";
import "./FetchAPI.scss";

export default class FetchAPI extends React.Component {
  state = {
    isLoading: true,
    users: [],
    error: null
  };

  fetchUsers() {
    // Where we're fetching data from
    fetch(`https://jsonplaceholder.typicode.com/users`)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          users: data,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    const { isLoading, users, error } = this.state;
    return (
      <React.Fragment>
        <h1 className="fetch-api">Random User</h1>
        {/* Display a message if we encounter an error */}
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          users.map(user => {
            const { username, name, email } = user;
            return (
              <div key={username}>
                <p>Name: {name}</p>
                <p>Email Address: {email}</p>
                <hr />
              </div>
            );
          })
        ) : (
          // If there is a delay in data, let's let the user know it's loading
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}

//ReactDOM.render(<App />, document.getElementById("root"));

/*  class FetchAPI extends React.Component {
  state = {
    locations: [
      {
        name: "Ojo",
        zone: "Lagos State",
        region: "South West"
      },
      {
        name: "Ahiazu Mbaise",
        zone: "Imo State",
        region: "South East"
      },
      {
        name: "Akoko-Edo",
        zone: "Edo State",
        region: "South South"
      },
      {
        name: "Anka",
        zone: "Zamfara State",
        region: "North West"
      },
      {
        name: "Akwanga",
        zone: "Nasarawa State",
        region: "North Central"
      }
    ]
  }; 

  render() {
    return (
      <div>
        <div>
          <div>
            <h2>Locations</h2>
          </div>
        </div>
        <div>
          {this.state.locations.map(location => (
            <LocationCard key={location.id} {...location} />
          ))}
        </div>
      </div>
    );
  }
}

export default FetchAPI;

const LocationCard = props => {
  return (
    <div>
      <hr />
      <p>
        <b>Name:</b> {props.name.toUpperCase()}
      </p>
      <p>
        <b>Zone:</b> {props.zone}
      </p>
      <p>
        <b>Region:</b> {props.region}
      </p>
      <hr />
    </div>
  );
};
*/
