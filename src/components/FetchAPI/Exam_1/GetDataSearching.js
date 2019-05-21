import axios from "axios";
const accessToken =
  "edaeefaa77fd6a9dfb012f8236bdec0e1d82eb3d38f78aad538e4a5a81ff6c91";
// const refreshToken =  "359e21060c1cc86c37eb43310a118f90f6466f369ca0e010a3f886f2fd0280a4";

const GetDataSearching = async () => {
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
      dataObject: [...this.state.dataObject, ...response.data.results],
      page: this.state.page + 1
    });
  } catch (error) {
    this.setState({ error });
  } finally {
    this.setState({ isLoading: false });
  }
};

export {GetDataSearching};
