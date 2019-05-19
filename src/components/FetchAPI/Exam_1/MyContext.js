import React from "react";

const MyContext = React.createContext();
class MyProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
    this.update = this.update.bind(this);
    this.clearItemData = this.clearItemData.bind(this);
  }

  // async update(data) {
  //   //try {
  //   console.log(data);
  //   await new Promise(resolve => {
  //     this.setState({ data: [...data] }, () => resolve());
  //   });
  //   console.log(this.state.data);
  //   // } catch (e) {
  //   //   console.log(`Error get data image: ${e}`);
  //   // }
  // }

  update(data) {
    this.setState(() => {
      return { data };
    });
    console.log(data);
  }

  clearItemData() {
    this.setState({ data: [] });
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          update: this.update,
          clearItemData: this.clearItemData
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyProvider, MyContext };
