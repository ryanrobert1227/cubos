import { BoxStyle } from "./style";

interface BoxDadosProps {
  info: string;
  valor: string;
}
export default function BoxDados(props: BoxDadosProps) {
  const { info, valor } = props;

  return (
    <BoxStyle>
      <span>{info}</span>
      {valor == "********" ? <button>Alterar</button> : <h2>{valor}</h2>}
    </BoxStyle>
  );
}
