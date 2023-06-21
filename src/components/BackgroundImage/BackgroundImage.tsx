import { BackgroundImageStyle } from "./style";

interface BackgroundImageProps {
  width: string;
  image: string;
  position?: string;
}
export default function BackgroundImage(props: BackgroundImageProps) {
  const { width, image, position } = props;
  return (
    <BackgroundImageStyle width={width} image={image} position={position} />
  );
}
