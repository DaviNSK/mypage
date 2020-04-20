import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 220vh;

  @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 235vh;
  }

  h3 {
      color: #ff6a5c;
      font-size: 24px !important;
      font-family: monospace;
      margin-top: 10px;
      font-weight: bold;

      @media (min-width: 320px) and (max-width: 768px) {
       font-size: 15px !important;
    }

    }

  .title-project {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;


    h1 {
      color: #fff;
      font-size: 50px;
      font-family: monospace;
      padding-left: 10px;

      @media (min-width: 320px) and (max-width: 768px) {
       font-size: 31px;
    }
    }

    p {
      color: #000;
      font-size: 23px;
      font-family: monospace;

      @media (min-width: 320px) and (max-width: 768px) {
       font-size: 13px;
    }
    }
  }

  .projects {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: row;

    @media (min-width: 320px) and (max-width: 768px) {
       flex-direction: column;
    }
  }

  .description {
    width: 30%;
    height: 350px;
    display: flex;
    flex-direction: column;
    padding: 20px 50px;
    margin-top: 10px;
    border-left: 7px solid #ff6a5c;

    @media (min-width: 320px) and (max-width: 768px) {
      width: 100%;
      margin-top: 30px;
    }

    h1 {
      color: #ff6a5c;
      font-size: 35px;
      font-family: monospace;
      font-weight: bold;

      @media (min-width: 320px) and (max-width: 768px) {
      font-size: 30px;
    }
    }

    p {
      color: #000;
      font-size: 23px;
      font-family: monospace;
      margin-top: 10px;
      
      @media (min-width: 320px) and (max-width: 768px) {
      font-size: 19px;
    }
    }
  }

  .pictures {
    width: 70%;
    padding: 0 50px;
    display: flex;
    flex-direction: column;

    @media (min-width: 320px) and (max-width: 768px) {
      width: 100%;

    }

    img {
      width: 100%;
      height: 650px;
      cursor: pointer;
      padding-top: 30px;
      transition: 0.2s ease-in;
      border-radius: 3px;

      @media (min-width: 320px) and (max-width: 768px) {
       height: 200px;
    }
    }

  }

  .divider {
    width: 100%;
    height: 270px;
    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;

    h1 {
      color: #fff;
      font-size: 33px;
      font-family: monospace;

      @media (min-width: 320px) and (max-width: 768px) {
      font-size: 25px;
    }

    }
  }
`;
