import React from "react";
//import { GetDataSearching } from "./GetDataSearching";
import axios from "axios";
const accessToken =
  "edaeefaa77fd6a9dfb012f8236bdec0e1d82eb3d38f78aad538e4a5a81ff6c91";
// const refreshToken =  "359e21060c1cc86c37eb43310a118f90f6466f369ca0e010a3f886f2fd0280a4";

const MyContext = React.createContext();
class MyProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSearchPhoto: [],
      isLoading: true,
      error: null,
      search: null,
      page: 1,

      modalIsOpen: false, //Modal
      dataModal: [],

      userPhoto: null,
      pageUserPhoto: 1
    };

    this.openModalImage = this.openModalImage.bind(this);
    this.handleChangeSearchPhoto = this.handleChangeSearchPhoto.bind(this);
    this.onSubmitSearchPhoto = this.onSubmitSearchPhoto.bind(this);
    this.closeModalImage = this.closeModalImage.bind(this);
    this.handleModalCloseRequest = this.handleModalCloseRequest.bind(this);
  }

  GetDataSearchPhoto = async () => {
    try {
      const { page, search } = this.state;
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=${page}&query=${search}&per_page=1000`,
        // `https://api.unsplash.com/users/${search}/photos?page=${page}&per_page=100`,
        {
          headers: {
            "Access-Control-Allow-Origin": " * ",
            Authorization: `Bearer ${accessToken}`
          }
        }
      );

      this.setState({
        dataSearchPhoto: [
          ...this.state.dataSearchPhoto,
          ...response.data.results
        ],
        page: this.state.page + 1
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  GetDataUserPhoto = async () => {
    try {
      const { userPhoto, pageUserPhoto } = this.state;
      const response = await axios.get(
        `https://api.unsplash.com/users/${userPhoto}/photos?page=${pageUserPhoto}&per_page=100`,
        {
          headers: {
            "Access-Control-Allow-Origin": " * ",
            Authorization: `Bearer ${accessToken}`
          }
        }
      );

      this.setState({
        dataSearchPhoto: [
          ...this.state.dataSearchPhoto,
          ...response.data.results
        ],
        page: this.state.page + 1
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleChangeSearchPhoto = e => {
    this.setState({
      search: e.target.value
    });
  };

  onSubmitSearchPhoto = value => {
    this.setState({
      search: value
    });
    this.GetDataSearchPhoto();
    this.setState({
      dataSearchPhoto: [],
      isLoading: true,
      error: null,
      page: 1
    });
  };

  openModalImage(dataModal) {
    this.setState(() => {
      return { dataModal, modalIsOpen: true };
    });
  }
  closeModalImage = () => {
    this.setState({ modalIsOpen: false, dataModal: [] });
  };
  handleModalCloseRequest = () => {
    // opportunity to validate something and keep the modal open even if it
    // requested to be closed
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          openModalImage: this.openModalImage,
          handleChangeSearchPhoto: this.handleChangeSearchPhoto,
          onSubmitSearchPhoto: this.onSubmitSearchPhoto,
          closeModalImage: this.closeModalImage,
          handleModalCloseRequest: this.handleModalCloseRequest
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyProvider, MyContext };
