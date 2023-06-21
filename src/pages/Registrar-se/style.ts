import styled from "styled-components";

export const RegistroStyle = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;

  background-color: rgba(25, 39, 46, 1);

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 27.35vw;
    height: 100vh;
    padding: 0 40px;

    background-color: white;

    .tittle {
      margin-top: 18px;
    }

    h1 {
      margin-top: 21px;
      margin-left: 4px;

      font-size: 18px;
      letter-spacing: 0.4px;
      font-weight: bold;
      font-family: sans-serif;
      color: #e72494;
    }

    span {
      margin-top: 6px;
      margin-left: 5px;

      letter-spacing: 0.18px;
      line-height: 22px;
      font-size: 15px;
      font-family: sans-serif;
    }

    strong {
      margin-top: 21px;
      margin-left: 2px;

      font-size: 16px;
      letter-spacing: -0.5px;
      font-family: sans-serif;
    }

    .sub {
      margin-left: 0px;

      font-size: 12px;
      letter-spacing: -0.1px;
      font-weight: lighter;
      line-height: 30px;
      font-family: sans-serif;

      color: black;

      opacity: 0.8;
    }

    .submit {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;

      border: solid 1px rgba(0, 0, 0, 1);
      border-radius: 100px;
      outline: unset;

      height: 6.1vh;
      width: 15.2vw;
      margin-top: 12px;

      font-size: 15px;
      font-weight: bold;

      opacity: 0.4;

      svg {
        margin-top: 0;
        width: 12px;
        height: 15px;

        stroke: rgba(0, 0, 0, 1);
      }
    }

    .submit_active {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;

      border: solid 1px #ea3898;
      border-radius: 100px;
      outline: unset;

      height: 6.1vh;
      width: 15.2vw;
      margin-top: 12px;

      font-size: 15px;
      font-weight: bold;

      color: #ea3898;

      opacity: 1;

      svg {
        margin-top: 0;
        width: 12px;
        height: 15px;

        stroke: #ea3898;
      }
    }

    .register {
      margin-top: 13px;
      margin-left: 0;

      font-size: 15px;
      letter-spacing: 0.6px;
      font-weight: 0;
      font-family: sans-serif;

      color: rgba(0, 0, 0, 0.65);
    }

    a {
      font-size: 13px;
      color: #e72494;
    }

    // if active == true

    ul {
      margin-top: 27px;

      list-style: none;

      svg {
        margin: 2px 10px 0 0;
      }
    }

    .botoes {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 23px;

      input {
        margin-top: 0;
      }

      .volta-etapa {
        cursor: pointer;

        border: none;

        height: 6vh;
        width: 10vw;
        padding: 0 30px;
        margin-right: 12px;

        text-decoration: none;
        line-height: 20px;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.7px;
        font-family: sans-serif;

        color: #e72494;
      }
    }
  }

  .right {
  }
`;
