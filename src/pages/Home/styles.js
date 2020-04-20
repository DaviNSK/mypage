import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (min-width: 320px) and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }

  .logo-name {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 100%;
    justify-content: center;
    padding-top: 30px;

    @media (min-width: 320px) and (max-width: 768px) {
      width: 100%;
    }

    img {
      height: 330px;
      border-radius: 100%;

      @media (min-width: 320px) and (max-width: 768px) {
      height: 150px;
      width: auto;
    }
    }

    .p1 {
      color: #000;
      font-size: 30px;
      font-family: monospace;
      margin-top: 10px;

      @media (min-width: 320px) and (max-width: 768px) {
      font-size: 24px;
    }
    }
  }

  .p2 {
    color: #000;
    font-family: monospace;
    font-size: 25px;

    @media (min-width: 320px) and (max-width: 768px) {
      font-size: 21px;
    }
  }

  .location {
    display: flex;
    width: 75%;
    padding: 10px 0px;
    margin-left: auto;
    flex-direction: row;

    @media (min-width: 320px) and (max-width: 768px) {
      width: 81%;
      padding: 0px;
    }

    p {
      color: #000;
      font-family: monospace;
      font-size: 25px;
      margin-left: 14px;

      @media (min-width: 320px) and (max-width: 768px) {
      font-size: 21px;
    }
    }
  }

  .icon {
    color: #f00;
    font-size: 25px;

    @media (min-width: 320px) and (max-width: 768px) {
      font-size: 21px;
      margin-top: 3px;
    }
  }

  .container-two {
    width: 70%;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 320px) and (max-width: 768px) {
      width: 100%;
    }
  }

  .title-front {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;

    h1 {
      color: #000;
      font-family: monospace;
      font-weight: bold;
      font-size: 50px;

      @media (min-width: 320px) and (max-width: 768px) {
      font-size: 33px;
    }
    }
  }

  .box-text {
    width: 70%;
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 320px) and (max-width: 768px) {
      width: 91%;
    }

    p {
      color: #9eacb5;
      font-size: 25px;
      font-family: monospace;
      margin-top: 20px;

      @media (min-width: 320px) and (max-width: 768px) {
      font-size: 18px;
    }
    }
  }

  .text {
    width: 70%;
    display: flex;
    flex-direction: column;

    @media (min-width: 320px) and (max-width: 768px) {
      width: 91%;
      justify-content: center;
    }

    h1 {
      color: #000;
      font-size: 30px;
      font-family: monospace;

      @media (min-width: 320px) and (max-width: 768px) {
      font-size: 23px;
    }
    }

    p {
      font-size: 20px;
      font-family: monospace;
      color: #9eacb5;

      @media (min-width: 320px) and (max-width: 768px) {
      font-size: 18px;
    }
    }
  }

  .title-techs {
    width: 40%;
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 320px) and (max-width: 768px) {
      margin-top: 5px;
      width: 100%;
    }
  }

  .title-frame {
    width: 40%;
    height: 85px;
    display: flex;
    flex-direction: column;
    margin-top: 4px;
  }

  .title-skills {
    width: 40%;
    height: 5px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    @media (min-width: 320px) and (max-width: 768px) {
      margin-top: 25px;
    }
  }
`;
