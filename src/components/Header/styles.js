import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .head {
    width: 100%;
    height: 90px;
    background: #010014;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #31373f;

    @media (min-width: 320px) and (max-width: 768px) {
      flex-direction: column;
      height: 150px;
    }
  }

  .box-logo {
    width: 50%;
    padding: 0 50px;
    margin-left: 10px;
    @media (min-width: 320px) and (max-width: 768px) {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      width: 25%;
      height: 60px;
      margin-top: 5px;

      @media (min-width: 320px) and (max-width: 768px) {
      width: 43%;
      height: 50px;  
    }
    }
  }

  .tags-head {
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (min-width: 320px) and (max-width: 768px) {
    
    }

    button {
      font-size: 28px;
      font-family: monospace;
      font-weight: bold;
      padding-left: 25px;
      outline: none;
      border: 0;
      background: transparent;
      color: #fff;
      cursor: pointer;
      transition: all 0.2s ease-in;

      &:hover {
        color: #14672f;
      }

      @media (min-width: 320px) and (max-width: 768px) {
      padding-left: 15px;
      margin-top: 15px;
      font-size: 20px;
  }
    }
  }
`;
