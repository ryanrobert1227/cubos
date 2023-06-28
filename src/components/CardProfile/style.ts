import styled, { css } from "styled-components";

export const CardProfileStyle = styled.div(() => {
  return css`
    display: flex;

    border-radius: 12px;

    height: 120px;
    width: 326px;

    background-color: #f2f4f7;

    img {
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;

      height: 120px;
      width: 120px;
    }

    .mask {
      position: absolute;

      border-bottom-left-radius: 12px;
      border-top-left-radius: 12px;

      height: 120px;
      width: 120px;

      background-color: #202020;

      opacity: 0.1;
    }

    .infos {
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
      span {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        --chakra-line-clamp: 1;

        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
          Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        font-size: 10px;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: 5%;

        color: #3a3b40;

        overflow: hidden;
        text-overflow: ellipsis;
      }

      .links {
        display: flex;
        gap: 16px;

        height: fit-content;
        margin-top: 24px;

        a {
          display: flex;
          align-items: start;
          gap: 6.2px;

          text-decoration: none;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
            Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
          font-size: 10px;
          font-weight: 400;
          line-height: 100%;
          letter-spacing: 5%;

          color: #e5007b;

          &:hover {
            text-decoration: underline;
          }

          img {
            border-radius: 0;

            height: 12px;
            width: 12px;
          }

          .git {
            height: 14px;
            width: 14px;
          }

          .linkedin {
            margin-bottom: 2px;
          }

          p {
            align-self: end;
            margin-bottom: 1px;
          }
        }
      }
    }
  `;
});
