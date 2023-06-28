import Styled, { css } from "styled-components";

export const AsideLogadoStyle = Styled.aside(() => {
  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;

    border-right: 1px solid rgb(223, 224, 225);

    width: 6vw;
    height: 100vh;
    padding: 34px 0;

    background-color: #eff0f0;

    svg {
      cursor: pointer;
    }

    img {
      border-radius: 50%;

      width: 40px;
      height: 40px;
      margin-top: 48.3px;
      margin-bottom: 18px;

      cursor: pointer;
    }

    .ativou {
      display: flex;
      flex-direction: column;

      height: 17.8vh;
      width: 100%;

      background-color: #dfe0e1;

      .icone {
        height: 50%;
        width: 100%;
        padding: 16px 26.8px;

        color: black;

        opacity: 0.6;

        &:hover {
          opacity: 1;
        }
      }
    }

    nav {
      display: flex;
      flex-direction: column;
      gap: 28px 0;

      margin-top: 24px;

      color: black;

      .navlink {
        opacity: 0.6;

        color: black;

        &:hover {
          opacity: 1;
        }
      }
    }
  `;
});
