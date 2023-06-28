import styled, { css } from "styled-components";

export const DDS12Styled = styled.section(() => {
  return css`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 267.6vh;

    background-color: #f2f4f7;

    .h1_da_page {
      margin-left: calc(2vw - 11px);
      margin-top: 24px;

      font-family: "Montserrat", "Verdana", sans-serif;
      font-size: 48px;
      font-weight: 800;
      line-height: 115%;
    }

    .initial {
      position: relative;
      border-radius: 12px;
      box-shadow: 0px 4px 10px rgba(32, 32, 32, 0.06);

      height: 36.2vh;
      width: 85.6vw;
      margin-top: 40px;
      margin-left: 6vw;
      padding: 40px 40px;

      background-color: #fff;

      h2 {
        font-family: "Montserrat", "Verdana", sans-serif;
        font-size: 24px;
        font-weight: 800;
        line-height: 120%;
      }

      .time {
        display: flex;
        gap: 13.2px;

        margin-top: 16px;
        margin-bottom: 12px;

        span {
          display: flex;
          align-items: center;
          gap: 4px;

          font-size: 12px;
          font-weight: 400;
          line-height: 120%;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
            Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";

          color: #e5007b;
        }
      }

      .mini-tittle {
        display: flex;

        border-radius: 9999px;
        width: fit-content;
        padding: 4px 8px;

        background-color: #d8dbe0;
        span {
          font-size: 12px;
          font-weight: 400;
          line-height: 100%;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
            Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
        }
      }

      h3 {
        margin-top: 8px;
        width: fit-content;

        font-size: 20px;
        font-family: "Montserrat", Verdana, sans-serif;
        font-weight: 700;
        line-height: 150%;

        color: #2b2d30;

        &:hover {
          color: #e5007b;
        }
      }

      .right {
        position: absolute;
        top: 69px;
        right: 330px;

        max-width: 213px;

        .time {
          gap: 13px;
          margin-bottom: 11px;
        }

        h3 {
          font-size: inherit;
        }
      }
    }

    .container-dds {
      display: flex;
      justify-content: space-between;

      width: 85.6vw;
      margin-left: 6vw;
      margin-top: 24px;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0 12px;

        border-radius: 12px;
        box-shadow: 0px 4px 10px rgba(32, 32, 32, 0.06);

        height: 96px;
        width: 367.5px;

        font-family: "Montserrat", "Verdana", sans-serif;
        font-size: 20px;
        font-weight: 600;
        line-height: 133%;

        color: #3a3b40;
        background-color: white;

        &:hover {
          background-color: #d8dbe0;
        }

        &:active {
          background-color: #6f7377;
        }

        svg {
          color: #3a3b40;
        }
      }
    }

    .last-line {
      display: flex;
      justify-content: space-between;

      width: 85.6vw;
      margin-left: 6vw;
      margin-top: 24px;

      section {
        display: flex;
        flex-direction: column;

        border-radius: 12px;
        box-shadow: 0px 4px 10px rgba(32, 32, 32, 0.06);

        height: 85.8vh;
        width: 48.6%;
        padding: 40px 24px;

        background-color: white;

        h2 {
          font-family: "Montserrat", "Verdana", sans-serif;
          font-size: 24px;
          font-weight: 800;
          line-height: 120%;
          margin-left: 16px;
          margin-bottom: 28px;

          .ver-todos {
            font-size: 13px;
            font-weight: 400;
            line-height: 100%;

            color: #e500a5;
          }
        }
      }

      .comunicados {
        display: flex;
        flex-direction: column;

        .comunicado {
          display: flex;
          flex-direction: column;
          align-items: start;

          height: 122px;
          padding: 14px 14px;
          margin-bottom: 12px;

          &:hover {
            border: solid 2px #e5007b;
            border-radius: 12px;

            padding: 12px 12px;
          }

          span {
            font-family: "Montserrat", Verdana, sans-serif;
            font-size: 12px;
            font-weight: 400;
            line-height: 120%;

            color: #3a3b40;
          }

          h3 {
            width: 460px;
            margin-top: 4px;

            font-family: "Montserrat", Verdana, sans-serif;
            font-size: 16px;
            font-weight: 600;
            line-height: 150%;

            color: #2b2d30;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          p {
            display: -webkit-box;
            -webkit-line-clamp: 2; /** número de linhas que você quer exibir */
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;

            margin-top: 3px;

            font-family: "Montserrat", Verdana, sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 150%;
          }
        }
      }

      .ultima-aula {
        display: flex;
        flex-direction: column;

        h2 {
          margin-bottom: 6px;
        }

        .data-hora {
          display: flex;
          gap: 13.2px;

          margin: 10px 0 0 16px;

          span {
            display: flex;
            align-items: center;
            gap: 4px;

            font-family: "Montserrat", "Verdana", sans-serif;
            font-size: 12px;
            font-weight: 400;
            line-height: 120%;

            color: #e5007b;
          }
        }

        .front-end {
          display: flex;

          border-radius: 9999px;
          width: fit-content;
          padding: 4px 8px;
          margin-top: 13px;
          margin-left: 16px;

          background-color: #d8dbe0;
          span {
            font-size: 12px;
            font-weight: 400;
            line-height: 100%;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
              Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol";
          }
        }

        h3 {
          font-size: 16px;
          font-weight: 600;
          line-height: 150%;
          margin: 8px 0 16px 16px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
            Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
        }

        .video {
          border-radius: 12px;

          height: 319px;
          width: 471px;
          margin-left: 16px;

          background-image: url(https://image.mux.com/ocNeLCVnwEeEBKjyly6NnFqWB01bSoKErcUXhy7AZQeE/thumbnail.jpg);
          background-repeat: no-repeat;
          background-size: cover;

          &:hover {
            background-image: url(https://image.mux.com/ocNeLCVnwEeEBKjyly6NnFqWB01bSoKErcUXhy7AZQeE/animated.gif);
          }

          .hover {
            border-radius: 12px;

            height: 100%;
            width: 100%;

            &:hover {
              background-color: rgba(32, 32, 32, 0.6);
            }
          }
        }
      }
    }

    .professores-container {
      display: flex;
      flex-direction: column;

      border-radius: 12px;
      box-shadow: 0px 4px 10px rgba(32, 32, 32, 0.06);

      height: 261px;
      width: 85.6vw;
      margin: 24px 0 0 6vw;
      padding: 40px 40px;

      background-color: #fff;

      h2 {
        margin-bottom: 32px;

        font-family: "Montserrat", "Verdana", sans-serif;
        font-size: 24px;
        font-weight: 800;
        line-height: 120%;
      }

      .card-profile {
        display: flex;
        gap: 32px;

        width: 100%;
      }
    }

    .alunos-container {
      display: flex;
      flex-direction: column;
      position: relative;

      border-radius: 12px;
      box-shadow: 0px 4px 10px rgba(32, 32, 32, 0.06);

      height: 261px;
      width: 85.6vw;
      margin: 24px 0 0 6vw;
      padding: 40px 40px;

      background-color: #fff;

      h2 {
        margin-bottom: 32px;

        font-family: "Montserrat", "Verdana", sans-serif;
        font-size: 24px;
        font-weight: 800;
        line-height: 120%;
      }

      .lista {
        position: absolute;
        right: 40px;
        top: 45px;

        font-size: 14px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
          Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";

        color: #e5007b;
      }

      .card-profile {
        display: flex;
        gap: 32px;

        width: 100%;
      }
    }
  `;
});
