import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;


  .space {
    width: 100%;
    height: 150px;

    @media (min-width: 320px) and (max-width: 768px) {
      height: 100px;
    }
  }

  .section {
    height: 500px;
    width: 40%;
    border-radius: 15px;
    box-shadow: 1px 1px 15px #000;
    background: #31373f;

    @media (min-width: 320px) and (max-width: 768px) {
      width: 85%;
      height: 330px;
    }
  }

  .title {
    width: 100%;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      color: #14672f;
      font-size: 40px;
      font-family: monospace;
      font-weight: bold;

      @media (min-width: 320px) and (max-width: 768px) {
      font-size: 30px;
    }
    }
  }

  .description {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;

    img {
      width: 40px;
      height: 33px;

      @media (min-width: 320px) and (max-width: 768px) {
      height: 20px;
      width: 30px;
    }
    }

    p {
      color: #9eacb5;
      font-size: 20px;
      font-family: monospace;
      font-weight: bold;
      margin-left: 10px;

      @media (min-width: 320px) and (max-width: 768px) {
      font-size: 15px;
    }
    }
  }

  .networking {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 320px) and (max-width: 768px) {
      height: 120px;
    }
    
    p {
      color: #9eacb5;
      font-size: 20px;

      @media (min-width: 320px) and (max-width: 768px) {
      font-size: 15px;
    }
    }
  }

  .Social-net {
    width: 15%;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (min-width: 320px) and (max-width: 768px) {
      width: 30%;
    }
  }

  .icon {
    font-size: 45px;
    color: #9eacb5;
    transition: all 0.2s ease-in;

    @media (min-width: 320px) and (max-width: 768px) {
      font-size: 30px;
    }

    &:hover {
      font-size: 55px;
    }
  }

`;
