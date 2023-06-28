import { CardCursosStyle } from "./style";

interface CardCursosProps {
  tittle: string;
  range: string;
  turma: boolean;
}
export default function CardCursos(props: CardCursosProps) {
  const { tittle, range, turma } = props;

  return (
    <CardCursosStyle width={range}>
      <svg
        width="40"
        height="40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="4" fill="#7C5AED"></rect>
        <path
          d="M10.25 29.75a1.5 1.5 0 01-1.5-1.5V11.865a1.62 1.62 0 011.615-1.615h19.278a1.612 1.612 0 011.607 1.607v16.278a1.62 1.62 0 01-1.615 1.615H10.25zM31.25 14.75H8.75"
          stroke="#FAFAFA"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M24.5 19.25l3 3-3 3M15.5 19.25l-3 3 3 3M21.5 19.25l-3 6"
          stroke="#FAFAFA"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      <h3>{turma ? "COM TURMA" : "NO SEU RITMO"}</h3>
      <h1>{tittle}</h1>
      <div className="porcetagem">{range}</div>
      <div className="range">
        <div className="progress"></div>
      </div>
    </CardCursosStyle>
  );
}
