import Styled, { css } from "styled-components";

export const InitialButtonStyled = Styled.div<{
  width: string;
  color: string;
  opacity: number;
  showHover?: boolean;
}>((props) => {
  const { width, color, opacity, showHover } = props;
  return css`
    input {
      border: none;
      border-radius: 100px;

      height: 6.5vh;
      width: ${width};
      margin-top: 28px;

      font-size: 15px;
      letter-spacing: 0.2px;
      font-family: sans-serif;
      font-weight: bold;

      color: white;
      background-color: ${color};

      opacity: ${opacity};

      cursor: pointer;

      ${showHover
        ? `&:hover {
        background-color: #990052;
      }`
        : ``}
    }
  `;
});
