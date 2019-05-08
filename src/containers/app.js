import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store";
import "../styles/app.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Routes from "../components/routes";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ToastContainer />
        <Routes />
      </Provider>
    );
  }
}
export default App;
