import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store";
import "../styles/app.scss";
import "react-toastify/dist/ReactToastify.css";
import Routes from "../components/routes";
import { ToastContainer } from "react-toastify";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ToastContainer />
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
