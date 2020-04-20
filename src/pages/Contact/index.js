import React, { Component } from "react";
import { Container } from "./styles";

import { Icon } from "antd";

export default class Contact extends Component {
  state = {
    image: [
      {
        link: "https://image.flaticon.com/icons/png/512/281/281769.png",
        name: "Davicardoso.2103@gmail.com",
      },
      {
        link: "https://image.flaticon.com/icons/png/512/25/25377.png",
        name: "+351 936 346 681.",
      },
    ],
    img: [
      {
        icon:
          "instagram",
        href: "https://www.instagram.com/davvicard/",
        name: "Instagram"
      },
      {
        icon: "github",
        href: "https://github.com/DaviNSK",
        name: "GitHub"
      },
      {
        icon: "linkedin",
        href: "https://www.linkedin.com/in/davi-cardoso-5775521a0/",
        name: "LinkedIn"
      },
    ],
  };

  render() {
    return (
      <Container>
        <div className="space"></div>
        <div className="section">
          <div className="title">
            <h1>Contacts</h1>
          </div>
          {this.state.image.map((element) => (
            <div className="description">
              <img src={element.link} alt="gmail" />
              <p>{element.name}</p>
            </div>
          ))}
          <div className="networking">
            {this.state.img.map((element) => (
              <div className="Social-net">
                <a href={element.href}>
                  <Icon className="icon" type={element.icon} />
                </a>
            <p>{element.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    );
  }
}
