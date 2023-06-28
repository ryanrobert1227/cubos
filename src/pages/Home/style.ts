import Styled, { css } from "styled-components";

export const HomeStyle = Styled.section(() => {
  return css`
    display: flex;
    position: relative;

    height: 100%;
    width: 100vw;

    a {
      text-decoration: none;
    }

    .inicio {
      margin: 24px 128px;

      font-family: "Heebo", sans-serif;
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 120%;
      letter-spacing: 0rem;

      opacity: 0.9;
    }

    .first_line {
      display: flex;
      justify-content: space-between;
      position: absolute;
      right: 17px;
      top: 96px;

      height: 33.6vh;
      width: 92.7vw;

      z-index: -1;

      .perfillog {
        display: flex;
        flex-direction: column;
        align-items: center;

        border-radius: 10px;
        box-shadow: 0 2px 2px #dddede;

        height: 100%;
        width: 45.2%;
        margin-left: 46px;

        background-color: #eff0f0;

        img {
          border-radius: 50%;

          height: auto;
          width: 60px;
          margin-top: 32px;
        }

        h3 {
          margin-top: 20px;

          font-family: "Heebo", sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          line-height: 140%;
          letter-spacing: 0;

          color: black;

          opacity: 0.65;
        }

        h2 {
          margin-top: 8px;

          font-size: 18px;
          font-family: "Heebo", sans-serif;
          font-weight: 700;
          line-height: 140%;
        }

        .linkperfil {
          margin-top: 6px;

          text-decoration: none;

          cursor: pointer;

          span {
            font-family: "Inter", sans-serif;
            font-size: 0.75rem;
            font-weight: 600;
            line-height: 140%;
            letter-spacing: 0;

            color: #d918a5;

            cursor: pointer;
          }
        }
      }

      .lancamentos {
        position: relative;

        border-radius: 8px;

        height: 100%;
        width: 44.9%;
        margin-right: 46px;
        padding: 24px 24px;

        background-color: #7c5aed;
        color: white;

        &:hover {
          background-color: #572be8;
        }

        .style__close-icon___Zu8LW {
          position: absolute;
          top: 22px;
          right: 24px;

          color: white;
        }

        .svg {
          display: flex;
          align-items: center;
          gap: 0 8px;

          font-family: "Heebo", sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          line-height: 140%;
          letter-spacing: 0rem;
        }

        h2 {
          margin-top: 24px;
          margin-left: 0.5px;

          font-family: "Heebo", sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          line-height: 120%;
          letter-spacing: 0rem;
        }

        p {
          margin-top: 8px;
          margin-left: 0.5px;

          font-family: "Inter", sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 140%;
          letter-spacing: 0rem;
        }
      }
    }

    .second_line {
      display: flex;
      flex-direction: column;
      gap: 24px;
      position: absolute;
      right: 17px;
      top: 339px;

      width: 92.7vw;
      height: 40.3vh;
      padding: 0 51px;
      h2 {
        margin-left: 1px;

        font-family: "Heebo", sans-serif;
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 140%;
        letter-spacing: 0.05px;
      }

      .container_cards {
        display: flex;
        justify-content: start;
        gap: 14px;

        height: 200px;
        width: 100%;
      }
    }

    .third_line {
      display: flex;
      flex-direction: column;
      gap: 24px;
      position: absolute;
      right: 17px;
      top: 629.5px;

      width: 92.7vw;
      height: 40.3vh;
      padding: 0 51px 280px 51px;

      h2 {
        margin-left: 1px;

        font-family: "Heebo", sans-serif;
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 140%;
        letter-spacing: 0.05px;
      }

      .containercursos {
        display: flex;
        justify-content: start;
        gap: 14px;

        min-height: 188px;
        width: 100%;

        .aulas {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 12px 0;

          box-shadow: 0 0.4px 0.8px rgba(17, 18, 19, 0.1),
            0 1.6px 3.2px rgba(17, 18, 19, 0.14);

          border-radius: 8px;

          width: 204px;
          height: 100%;

          color: #eff0f0;
          background-color: #eff0f0;

          cursor: pointer;

          &:hover {
            box-shadow: 0 0.4px 0.8px rgba(17, 18, 19, 0.1),
              0 1.6px 3.2px rgba(17, 18, 19, 0.3);
          }

          h2 {
            margin: 0;

            font-family: "Heebo", sans-serif;
            font-size: 16px;
            font-weight: 700;
            line-height: 140%;
            letter-spacing: 0rem;

            color: black;

            opacity: 0.9;
          }
        }
      }
    }
  `;
});
