import { useState } from "react";

import { CardNovidadesStyle } from "./style";

interface CardNovidadesProps {
  svg: any;
  titulo: string;
  texto: string;
}
export default function CardNovidades(props: CardNovidadesProps) {
  const { svg, titulo, texto } = props;

  const [fechar, setFechar] = useState(false);

  return (
    <>
      {!fechar ? (
        <CardNovidadesStyle>
          {svg}
          <h1>{titulo}</h1>
          <span>{texto}</span>
          <div className="close" onClick={() => setFechar(true)}>
            <svg
              width="12"
              height="12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.85.878a.514.514 0 00-.728-.727L6 5.273.878.15A.514.514 0 10.15.878L5.273 6 .15 11.122a.514.514 0 10.727.727L6 6.727l5.122 5.122a.514.514 0 00.727-.727L6.727 6 11.85.878z"
                fill="#202122"
              ></path>
            </svg>
          </div>
        </CardNovidadesStyle>
      ) : (
        ""
      )}
    </>
  );
}
