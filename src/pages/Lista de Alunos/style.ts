import styled, { css } from "styled-components";

export const ListaStyle = styled.section<{
  page: number;
}>((props) => {
  const { page } = props;
  return css`
    display: flex;
    justify-content: center;

    height: fit-content;
    padding: 24px 0 80px 0;
    margin-left: 6vw;

    background-color: #f2f4f7;

    .box {
      border-radius: 12px;
      box-shadow: 0px 4px 10px rgba(32, 32, 32, 0.06);

      height: 100vh;
      width: 85.6vw;
      padding: 40px;

      background-color: #fff;

      .header {
        h1 {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
            Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
          font-size: 24px;
          font-weight: 800;
          line-height: 28.8px;

          color: #2b2d30;
        }

        span {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
            Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
          font-size: 12px;
          font-weight: 400;
          line-height: 30.4px;

          color: #3a3b40;
        }
      }

      .container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        column-gap: 52px;
        row-gap: 15px;

        height: 84.8%;
        max-width: 100%;
        padding: 24px 0;
      }

      .paginacao {
        display: flex;
        justify-content: end;
        align-items: center;

        height: 4.5%;
        margin-top: 1px;

        .previous,
        .next {
          all: unset;

          display: flex;
          align-items: center;

          font-family: "Montserrat", Verdana, sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 120%;

          &:hover {
            color: #e5007b;
          }

          img {
            height: 14px;
            width: 14px;
            margin-left: 10px;
          }
        }

        .previous {
          opacity: ${page > 0 ? 1 : 0.3};

          img {
            margin-left: 0;
            margin-right: 10px;

            transform: scaleX(-1);
          }
        }

        .next {
          opacity: ${page < 12 ? 1 : 0.3};
        }

        span {
          height: fit-content;
          margin-left: 24px;

          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
            Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
          font-size: 12px;
          font-weight: 400;
          line-height: 120%;

          color: #2b2d30;
        }

        .buttons {
          display: flex;
          gap: 0 8px;

          margin: 4px 26px 0 26px;

          button {
            border: none;
            border-radius: 2px;

            width: 16px;
            height: 18px;

            font-family: "Montserrat", Verdana, sans-serif;
            font-size: 12px;
            font-weight: 400;
            line-height: 120%;

            color: black;
            background-color: transparent;

            cursor: pointer;

            &:hover {
              background: #e5007b1a;
              color: #e5007b;
            }
          }

          .active_button {
            color: white;
            background-color: #e5007b;
          }
        }
      }
    }
  `;
});
