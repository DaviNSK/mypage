import React, { Component } from "react";

import { Container } from "./styles";
import { Carousel } from "antd";

import layout from "../../assets/layout-very.png";
import create from "../../assets/create-very.png";
import login from "../../assets/login-very.png";
import what from "../../assets/quem-very.png";

import loginn from "../../assets/login-zap.png";
import shop from "../../assets/shop-zap.png";
import val from "../../assets/val-zap.png";
import createe from "../../assets/create-zap.png";
import control from "../../assets/control-zap.png";

export default class Portfolio extends Component {
  state = {
    project: [
      {
        title: "VeryBetting",
        name:
          "I developed an online betting site, in order to improve the betting system, and give more confidence to bettors.",
      },
    ],
    project2: [
      {
        title: "ZapController",
        name:
          "Administration system, for a sales company, I created an area to control daily charges, an area to record the money that salespeople took in advance, and I created a store, which works as an ordering area.",
      },
    ],
  }; 

  render() {
    return (
      <Container>
          <div className="title-project">
            <h1>Recent projects</h1>
            <p>The projects below were created with ReactJS.</p>
          </div>

        <div className="projects">
          <div className="pictures">
            <Carousel autoplay>
              <div>
                <h3 style={{ }}>Login page</h3>
                <img src={loginn} alt="lay" />
              </div>
              <div>
                <h3>Create user page</h3>
                <img src={createe} alt="lay" />
              </div>
              <div> 
                <h3>Control Daily page</h3>
                <img src={control} alt="lay" />
              </div>
              <div>
                <h3>Vouchers page</h3>
                <img src={val} alt="lay" />
              </div>
              <div>
                <h3>Shop, and ordering area</h3>
                <img src={shop} alt="lay" />
              </div>
            </Carousel>
          </div>

          {this.state.project2.map((element) => (
            <div className="description">
              <h1>{element.title}</h1>
              <p>{element.name}</p>
            </div>
          ))}
        </div>

        <div className="divider">
          <h1>Project 2</h1>
        </div>

        <div className="projects"> 
          <div className="pictures">
            <Carousel autoplay>
              <div>
                <h3>Login page</h3>
                <img src={login} alt="lay" />
              </div>
              <div>
                <h3>Create user page</h3>
                <img src={create} alt="lay" />
              </div>
              <div>
                <h3>Control Daily page</h3>
                <img src={layout} alt="lay" />
              </div>
              <div>
                <h3>Vouchers page</h3>
                <img src={what} alt="lay" />
              </div>
            </Carousel>
          </div>

          {this.state.project.map((element) => (
            <div className="description">
              <h1>{element.title}</h1>
              <p>{element.name}</p>
            </div>
          ))}
        </div>
      </Container>
    );
  }
}
