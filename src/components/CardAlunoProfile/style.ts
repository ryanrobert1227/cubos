import styled, { css } from "styled-components";

export const CardAlunoProfileStyle = styled.div(() => {
  return css`
    display: flex;

    border-radius: 12px;

    height: 120px;
    //max-width: 329px;
    width: 326px;

    background-color: #f2f4f7;

    .img {
      .mask {
        position: absolute;

        border-bottom-left-radius: 12px;
        border-top-left-radius: 12px;

        height: 120px;
        width: 120px;

        background-color: #202020;

        opacity: 0.1;
      }

      img {
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;

        height: 120px;
        width: 120px;
      }

      .imagem {
        display: flex;
        justify-content: center;
        align-items: center;

        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;

        height: 120px;
        width: 120px;

        background-color: #d8dbe0;

        img {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;

          width: 47px;
          height: auto;
        }
      }
    }
    .infos {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      padding: 24px;

      h1 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        --chakra-line-clamp: 1;

        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
          Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        font-size: 16px;
        font-weight: 600;
        line-height: 150%;

        color: #1a202c;

        overflow: hidden;
        text-overflow: ellipsis;
      }

      a {
        display: flex;
        align-items: start;
        gap: 6.2px;

        text-decoration: none;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
          Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        font-size: 14px;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: 5%;

        color: #e5007b;

        &:hover {
          text-decoration: underline;
        }

        img {
          height: 14px;
          width: 14px;

          &:hover {
            fill: #990052;
          }
        }
      }
    }
  `;
});
