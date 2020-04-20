import React, { Component } from "react";
import { Icon } from "antd";

import { Container } from "./styles";
import avatar from "../../assets/avatar-dc.jpg";

export default class Home extends Component {
  state = {
    info: [
      {
        name: "Davi cardoso",
        infos: "20 years, Brazilian;",
        icon: "environment",
        location: "Lisbon, Portugal.",
      },
    ],
    about: [
      {
        name:
          "Passionate about technology, curious and always striving to always adapt to new programming languages.",
        text:
          "I had contact with programming a little over 8 months ago. In the meantime, I was able to develop solid knowledge in front-end development, and I feel the need to enter the job market using the main technologies of the moment such as ReactJS, Vue Js and angularJS.",
        techs: "Javascript, Html, CSS.",
        frames: "ReactJS, Bootstrap.",
        comp: "SASS, Styled-components, Tailwind, AntDesign, GIT, UX, Redux.",
      },
    ],
  };

  render() {
    return (
      <Container>
        {this.state.info.map((element, key) => (
          <div key={key} className="logo-name">
            <img src={avatar} alt="avatar" />
            <p className="p1">{element.name}</p>
            <p className="p2">{element.infos}</p>
            <div className="location">
              <Icon className="icon" type={element.icon} />
              <p>{element.location}</p>
            </div>
          </div>
        ))}

        {this.state.about.map((element) => (
          <div className="container-two">
            <div className="title-front">
              <h1>Front-end Developer</h1>
            </div>
            <div className="box-text">
              <p>{element.name}</p>
              <p>{element.text}</p>
            </div>
            <div className="text">
              <div className="title-techs">
                <h1>Techs:</h1>
                <p>{element.techs}</p>
              </div>
              <div className="title-frame">
                <h1>Frameworks:</h1>
                <p>{element.frames}</p>
              </div>
              <div className="title-skills">
                <h1>Skills:</h1>
                <p>{element.comp}</p>
              </div>
            </div>
          </div>
        ))}
      </Container>
    );
  }
}
