import styled from "styled-components";

export const PasswordRecoverStyle = styled.div`
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

    width: 38.9vw;
    height: 100vh;
    padding: 0 40px;

    background-color: white;

    svg {
      margin-top: 154px;
    }

    p {
      margin-top: 37px;

      font-size: 18px;
      letter-spacing: 0px;
      font-weight: bold;
      font-family: sans-serif;
      color: #e72494;
    }

    span {
      margin-top: 6px;

      letter-spacing: 0.45px;
      line-height: 25px;
      font-size: 15px;
      font-family: sans-serif;
    }

    .botoes {
      display: flex;
      justify-content: space-between;
      .volta-login {
        margin-top: 30px;
        padding: 13px 56px 13px 25px;

        text-decoration: none;
        font-size: 14px;
        letter-spacing: 0.7px;
        font-family: sans-serif;
        color: #e72494;

        cursor: pointer;
      }
    }
  }
`;
