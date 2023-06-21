import styled, { css } from "styled-components";

export const InputBoxStyle = styled.div<{ margintop?: string }>((props) => {
  const { margintop } = props;

  return css`
    display: flex;
    flex-direction: column;
    position: relative;

    margin-top: ${margintop};

    .inputTexto {
      display: flex;
      justify-content: space-between;
    }

    label {
      margin-bottom: 6px;

      letter-spacing: -0.8px;
      font-size: 14px;
      font-weight: bold;
      font-family: sans-serif;

      color: rgba(0, 0, 0, 0.6);
    }

    a {
      margin-top: 2px;

      font-size: 11px;
      letter-spacing: 0.1px;
      font-family: sans-serif;

      color: #e72494;
    }

    input {
      border-radius: 13px;
      border: solid 1px rgba(0, 0, 0, 0.5);
      outline: unset;

      height: 7.7vh;
      width: 100%;
      padding: 0 17px;

      &:hover {
        border: solid 1px rgba(0, 0, 0, 0.8);
      }
      &:focus {
        border: solid 1px #eb6eb2;
      }
      &::placeholder {
        letter-spacing: 0.4px;
        font-size: 15px;
        font-family: sans-serif;
        color: black;
        opacity: 0.6;
      }
    }

    .button {
      position: absolute;
      right: 17px;
      bottom: 9px;

      border: none;

      background-color: transparent;

      cursor: pointer;
    }
  `;
});
