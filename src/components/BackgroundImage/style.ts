import styled, { css } from "styled-components";

export const BackgroundImageStyle = styled.div<{
  width: string;
  image: string;
  position?: string;
}>((props) => {
  const { width, image, position } = props;
  return css`
    width: ${width};
    height: 100vh;

    background-image: ${image};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: ${position};

    opacity: 0.2;
  `;
});
