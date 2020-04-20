import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";

import { Container } from "./styles";
import logo from "../../assets/dc.png";

class Header extends Component {
  state = {
    link: [
      {
        name: "Home",
        to: "/", 
      },
      {
        name: "Portfolio",
        to: "/portfolio",
      },
      {
        name: "Contact",
        to: "/contact",
      },
    ],
  };

  render() {
    return (
      <Container>
        <div className="head">
          <div className="box-logo">
            <img src={logo} alt="logo" />
          </div> 

          <div className="tags-head">
            {this.state.link.map((element, key) => (
              <NavLink key={key} to={element.to} >
                <button type={element.to}>{element.name}</button>
              </NavLink>
            ))}
          </div>
        </div>
      </Container>
    );
  }
}

export default withRouter(Header);
