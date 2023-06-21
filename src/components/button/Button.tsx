import { InitialButtonStyled } from "./style";

interface InitialButtonProps {
  name: string;
  width: string;
  color: string;
  opacity: number;
  showHover?: boolean;
  email?: string;
}
export default function InitialButton(props: InitialButtonProps) {
  const { name, width, color, opacity, showHover, email } = props;

  function haddleValidarEmail(email: string) {
    const re = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|com\.br)$/;

    if (email.match(re)) {
      return true;
    } else {
      return alert("Digite um Email valido");
    }
  }

  return (
    <InitialButtonStyled
      width={width}
      color={color}
      opacity={opacity}
      showHover={showHover}
    >
      {email ? (
        <input
          type="submit"
          value={name}
          onClick={() => haddleValidarEmail(email)}
        />
      ) : (
        <input type="submit" value={name} />
      )}
    </InitialButtonStyled>
  );
}
