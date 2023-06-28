import styled, { css } from "styled-components";

export const CardConteudosStyle = styled.div<{ width: string; image: string }>(
  (props) => {
    const { width, image } = props;

    return css`
      border-radius: 12px;

      background-color: #eff0f0;
      background-image: linear-gradient(
          0deg,
          rgba(25, 39, 46, 0.9),
          rgba(25, 39, 46, 0.8)
        ),
        url(${image});
      background-position: center;
      background-size: cover;

      &:hover {
        transform: scale(1.06);
        box-shadow: 0 4px 6px rgba(32, 32, 32, 0.24);
        z-index: 1;
      }

      .teste {
        display: flex;
        flex-direction: column;
        gap: 4px;
        position: relative;

        border-radius: 12px;
        box-shadow: 0 0.4px 0.8px rgba(17, 18, 19, 0.1),
          0 1.6px 3.2px rgba(17, 18, 19, 0.14);

        height: 188px;
        width: 312px;
        padding: 46px 24px 10px;

        cursor: pointer;

        &:hover {
          background: linear-gradient(
            180deg,
            rgba(229, 0, 123, 0) 0%,
            rgba(229, 0, 123, 0.6) 100%
          );
        }

        span {
          font-family: "Montserrat", "Verdana", sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 120%;

          color: white;
        }

        h2 {
          font-family: "Montserrat", "Verdana", sans-serif;
          font-size: 20px;
          font-weight: 600;
          line-height: 129%;

          color: white;
        }

        h3 {
          margin-top: 2px;

          font-family: "Montserrat", "Verdana", sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 120%;

          color: white;
        }

        .range {
          position: absolute;
          border-radius: 500px;
          bottom: 24px;

          height: 6px;
          width: 264px;

          background-color: #d8dbe0;

          .progress {
            position: absolute;
            border-radius: 500px;

            height: 6px;
            width: ${width};

            background-color: #e5007b;
          }
        }
      }
    `;
  }
);
