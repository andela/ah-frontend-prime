import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Login from './loginComponent';
import Home from './home';



class Routes extends Component {

  render(){
    return (
      <BrowserRouter>
			  <Route exact path="/" component={Home} />
			  <Route path="/login" component={Login} />
      </BrowserRouter>
    );
  };
}

export default Routes;
