import styled, { css } from "styled-components";

export const BoxStyle = styled.div(() => {
  return css`
    display: flex;
    justify-content: space-between;

    padding: 15px 0;

    span {
      display: flex;
      align-items: center;

      text-align: center;
      font-family: "Montserrat", "Verdana", sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;

      opacity: 0.8;
    }

    h2 {
      font-family: "Montserrat", "Verdana", sans-serif;
      font-size: 16px;
      font-weight: 600;
      line-height: 150%;

      opacity: 0.9;
    }

    button {
      border: 1px solid #e5007b;
      border-radius: 500px;

      height: 2.5rem;
      min-width: 7.5rem;
      padding: 0 18px;

      font-family: "Montserrat", Verdana, sans-serif;
      font-size: 0.875rem;
      font-weight: 600;

      color: #e5007b;
      background-color: rgba(0, 0, 0, 0);
    }
  `;
});
