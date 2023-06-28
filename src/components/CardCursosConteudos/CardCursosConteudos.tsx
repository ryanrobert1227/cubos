import { CardConteudosStyle } from "./style";

interface CardCursosConteudoProps {
  tittle: string;
  sala: string;
  turma: boolean;
  range: string;
  image: string;
}
export default function CardCursosConteudo(props: CardCursosConteudoProps) {
  const { tittle, sala, turma, range, image } = props;
  return (
    <CardConteudosStyle width={range} image={image}>
      <div className="teste">
        <span>{turma ? "COM TURMA" : "NO SEU RITMO"}</span>
        <h2>{tittle}</h2>
        <h3>{sala}</h3>
        <section className="range">
          <div className="progress" />
        </section>
      </div>
    </CardConteudosStyle>
  );
}
