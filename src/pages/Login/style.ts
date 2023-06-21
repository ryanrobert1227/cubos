import styled from "styled-components";

export const LoginStyle = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;

  background-color: rgba(25, 39, 46, 1);

  aside {
    width: 3vw;
    background: linear-gradient(to top, #1c272f 0%, #c6056e 100%);
  }

  .left {
    display: flex;
    flex-direction: column;

    width: 29.3vw;
    height: 100vh;
    padding: 0 40px;

    background-color: white;

    .tittle {
      margin-top: 91px;
    }

    p {
      margin-top: 37px;

      font-size: 18px;
      letter-spacing: 0.6px;
      font-weight: bold;
      font-family: sans-serif;
      color: #e72494;
    }

    span {
      margin-top: 6px;

      letter-spacing: 0.18px;
      line-height: 22px;
      font-size: 15px;
      font-family: sans-serif;
    }

    .register {
      margin-top: 30px;

      font-size: 14px;
      letter-spacing: 0.6px;
      font-weight: 0;
      font-family: sans-serif;

      color: rgba(0, 0, 0, 0.65);
    }

    a {
      font-size: 13px;
      color: #e72494;
    }
  }
`;
