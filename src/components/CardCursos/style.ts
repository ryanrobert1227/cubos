import Styled, { css } from "styled-components";

export const CardCursosStyle = Styled.div<{ width: string }>((props) => {
  const { width } = props;
  return css`
    display: flex;
    flex-direction: column;
    position: relative;

    border-radius: 8px;
    box-shadow: 0 0.4px 0.8px rgba(17, 18, 19, 0.1),
      0 1.6px 3.2px rgba(17, 18, 19, 0.14);

    height: 100%;
    width: 266px;
    padding: 16px 17px;

    background-color: #eff0f0;

    cursor: pointer;

    &:hover {
      box-shadow: 0 0.4px 0.8px rgba(17, 18, 19, 0.1),
        0 1.6px 3.2px rgba(17, 18, 19, 0.3);
    }

    h3 {
      margin-top: 16px;

      font-family: "Heebo", sans-serif;
      font-size: 12px;
      font-weight: 500;
      line-height: 140%;
      letter-spacing: 0rem;

      color: black;

      opacity: 0.6;
    }

    h1 {
      margin-top: 9px;

      font-family: "Heebo", sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 140%;
      letter-spacing: 0;

      color: black;
    }

    .porcetagem {
      position: absolute;
      bottom: 12.1px;
      right: 16px;

      font-family: "Heebo", sans-serif;
      font-size: 0.625rem;
      font-weight: 500;
      line-height: 140%;
      letter-spacing: 0;

      color: black;

      opacity: 0.7;
    }

    .range {
      position: absolute;
      bottom: 16.8px;

      border-radius: 500px;

      height: 6px;
      width: 77.5%;

      background-color: rgb(245, 163, 223);

      .progress {
        position: absolute;
        border-radius: 500px;

        height: 6px;
        width: ${width};

        background-color: rgb(216, 24, 165);
      }
    }
  `;
});
