import Styled, { css } from "styled-components";

export const CardNovidadesStyle = Styled.div(() => {
  return css`
    display: flex;
    flex-direction: column;
    position: relative;

    border-radius: 8px;
    box-shadow: 0 0.4px 0.8px rgba(17, 18, 19, 0.1),
      0 1.6px 3.2px rgba(17, 18, 19, 0.14);

    height: 100%;
    width: 202px;
    padding: 16px 17px;

    background-color: #eff0f0;

    cursor: pointer;

    &:hover {
      box-shadow: 0 0.4px 0.8px rgba(17, 18, 19, 0.1),
        0 1.6px 3.2px rgba(17, 18, 19, 0.3);
    }

    svg {
      width: 32px;
      height: auto;
    }

    h1 {
      margin: 20px 0 0 0;

      font-family: "Heebo", sans-serif;
      font-size: 18px;
      font-weight: 700;
      line-height: 140%;
      letter-spacing: 0px;

      color: black;

      opacity: 0.85;
    }

    span {
      margin: 8px 0 0 0;
      font-family: "Heebo", sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: 0rem;

      color: #545759;
      opacity: 0.9;
    }

    .close {
      position: absolute;
      top: 16px;
      right: 3px;
    }
  `;
});
