import Styled, { css } from "styled-components";

export const DadosStyle = Styled.section(() => {
  return css`
    display: flex;
    position: relative;

    height: 155vh;
    width: 100vw;
    padding: 0 0 30px 0;

    background-color: #f2f4f7;

    .paisagem {
      position: absolute;
      top: 24px;
      right: 79px;

      border-radius: 16px;
      box-shadow: 0 3px 8px rgba(32, 32, 32, 0.06);

      height: 56vh;
      width: 83.2vw;

      background-color: #d8dbe0;

      .fotoperfil {
        position: absolute;
        bottom: 33px;
        left: 40px;

        border-radius: 50%;

        width: 144px;
        height: auto;

        z-index: 1;
      }

      .fotoicon {
        position: absolute;

        bottom: 23px;
        left: 132px;

        z-index: 2;
      }

      .fotoicon2 {
        position: absolute;

        bottom: 119px;
        right: 35px;
      }

      .faixaBase {
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 0;

        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;

        height: 16.2vh;
        width: 83.25vw;

        background-color: #ffffff;

        h1 {
          margin-left: 201px;

          font-family: "Montserrat", "Verdana", sans-serif;
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 133%;

          opacity: 0.9;
        }

        h2 {
          margin-left: 201px;

          font-family: "Montserrat", "Verdana", sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          line-height: 150%;

          opacity: 0.9;
        }
      }
    }

    .dadosdaconta {
      position: absolute;
      top: 399px;
      right: 79px;

      border-radius: 16px;
      box-shadow: 0 3px 8px rgba(32, 32, 32, 0.06);

      height: 85.3vh;
      width: 83.2vw;
      padding: 35px 32px;

      background-color: #fff;

      h1 {
        font-family: "Montserrat", "Verdana", sans-serif;
        font-size: 24.1px;
        font-weight: 800;
        line-height: 120%;

        opacity: 0.9;
      }

      .exibido {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 0 8.5px;

        border-top: solid 1px rgba(0, 0, 0, 0.05);

        width: 100%;
        padding: 15px 0;
        margin-top: 20px;

        opacity: 0.8;

        h3 {
          margin-bottom: 3px;

          font-family: "Montserrat", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;

          color: black;
        }

        img {
          opacity: 0.7;
        }
      }
    }
  `;
});
