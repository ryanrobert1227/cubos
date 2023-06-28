import styled, { css } from "styled-components";

export const CarrouselStyle = styled.section<{ image: string; top: string }>(
  (props) => {
    const { image, top } = props;

    return css`
      display: flex;
      align-items: end;
      justify-content: center;
      position: relative;

      height: 91.8vh;
      width: 92.85vw;
      margin-left: 6vw;

      background-color: green;
      color: white;

      background-image: linear-gradient(
          0deg,
          rgba(25, 39, 46, 0.9),
          rgba(25, 39, 46, 0.8)
        ),
        ${image};
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;

      h1 {
        position: absolute;
        top: ${top};
        left: 60.5px;

        max-width: 50vw;

        font-family: "Montserrat", "Verdana", sans-serif;
        font-size: 40px;
        font-weight: 800;
        line-height: 120%;
      }

      p {
        display: -webkit-box;
        -webkit-line-clamp: 2; /** número de linhas exibidas */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;

        position: absolute;
        top: 262px;
        left: 60.5px;

        max-width: 60.4vw;

        font-family: "Montserrat", "Verdana", sans-serif;
        font-size: 16px;
        font-weight: 600;
        line-height: 150%;
      }

      .sobrecurso {
        display: flex;
        align-items: center;
        gap: 15px;
        position: absolute;
        top: 333px;
        left: 60.5px;

        span {
          display: flex;
          align-items: start;
          gap: 4px;

          margin-top: 2px;

          font-family: "Montserrat", "Verdana", sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          line-height: 24px;

          img {
            width: 20px;
            height: auto;

            color: white;
          }
        }
      }

      .buy {
        position: absolute;
        top: 380px;
        left: 60.5px;

        border: none;
        border-radius: 500px;

        height: 40px;
        min-width: 120px;
        padding: 0 2.25rem;

        font-family: "Montserrat", Verdana, sans-serif;
        font-size: 14px;
        font-weight: 600;

        color: white;
        background-color: #e5007b;

        cursor: pointer;

        &:hover {
          background-color: #990052;
        }

        img {
          width: 14px;
          height: auto;
          margin-right: 8px;
        }
      }

      nav {
        display: flex;
        justify-content: space-between;

        width: 9.6vw;
        margin-bottom: 14px;

        .button {
          border: none;
          border-radius: 50%;

          background-color: #d8dbe0;
          width: 8px;
          height: 8px;

          opacity: 0.6;

          cursor: pointer;
        }

        .button-active {
          border: none;
          border-radius: 32px;

          background-color: #d8dbe0;
          width: 64px;
          height: 8px;

          opacity: 1;

          cursor: pointer;
        }
      }
    `;
  }
);
