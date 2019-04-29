import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store  from '../store';
import '../styles/app.scss';

class App extends Component{
  render() {
    return(
      <Provider store={store}>
        <div>
          <h2>Welcome to author's haven </h2>
        </div>
      </Provider>
    );
  }
}
export default App;
