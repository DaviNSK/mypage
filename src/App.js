import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import GlobalStyle from "./styles/global";

import Routes from "./routes";

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Routes />
        </BrowserRouter>
      </>
    );
  }
}
