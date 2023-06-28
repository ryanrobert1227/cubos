import Styled, { css } from "styled-components";

export const ConteudosStyle = Styled.section(() => {
  return css`
    display: flex;
    flex-direction: column;
    position: relative;

    height: 142.6vh;
    width: 100vw;

    background-color: #f2f4f7;

    a {
      text-decoration: none;
    }

    .my-course {
      display: flex;
      flex-direction: column;
      gap: 29px;
      margin-left: 6vw;

      h1 {
        margin: 40px 0 0 60.5px;

        font-family: "Montserrat", "Verdana", sans-serif;
        font-size: 1.5rem;
        font-weight: 800;
        line-height: 120%;

        color: #1a202c;
      }

      .controls {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 99%;

        &:hover .back {
          border: none;
          border-bottom-right-radius: 0;
          border-top-right-radius: 0;
          border-top-left-radius: 12px;
          border-bottom-left-radius: 12px;

          height: 64px;
          width: 40px;

          background-color: rgba(58, 59, 64, 0.9);

          opacity: 1;
          transition: all 300ms;
        }

        &:hover .next {
          border: none;
          border-bottom-left-radius: 12px;
          border-top-left-radius: 12px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;

          height: 64px;
          width: 40px;

          background-color: rgba(58, 59, 64, 0.9);
          opacity: 1;

          transition: all 300ms;
        }

        .back,
        .next {
          opacity: 0;

          cursor: pointer;
        }

        .back {
          transform: scaleX(-1);
        }

        .meus-cursos-container {
          display: flex;
          justify-content: start;
          gap: 12px;

          height: 188px;
          width: 90.2%;
        }
      }
    }
  `;
});
