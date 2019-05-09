import React from "react";

class NoFetchAPI extends React.Component {
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
          <h1>No Fetch API</h1>
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

export default NoFetchAPI;

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
