import styled, { css } from "styled-components";

export const LiStyle = styled.li(() => {
  return css`
    margin-bottom: 2px;

    line-height: 18px;
    text-decoration: none;
    font-size: 12px;
    letter-spacing: 0px;
    font-family: sans-serif;

    .style__valid-icon___Q_rMy {
      color: green;
    }

    svg {
      margin: 0 10px 0 0;
    }
  `;
});
