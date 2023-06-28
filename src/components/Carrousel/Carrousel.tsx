import { useState } from "react";
import { Link } from "react-router-dom";

import calendarioIcon from "../../assets/calendario.svg";
import relogioIcon from "../../assets/relogio.svg";
import carrinhoIcon from "../../assets/carrinho.svg";

import { CarrouselStyle } from "./style";

export default function Carrousel() {
  const [current, setCurrent] = useState([true, false, false, false, false]);

  const tittle: string[] = [
    "Product Management",
    "Análise de Dados",
    "Desenvolvimento de Software com foco em Back-end",
    "Desenvolvimento de Software Full-Stack",
    "Design UX/UI",
  ];
  const texto: string[] = [
    "Aprenda na prática a identificar, construir e melhorar produtos digitais para resolver as necessidades dos seus usuários. Mergulhe no universo de Product Management com uma formação completa, alinhando teoria e prática, de verdade.",
    "Configure as ferramentas e aprenda os conceitos fundamentais do Python para análise de dados. Você aprenderá temas como: modelo relacional, consultas de SQL, relacionamento entre tableas, dados faltantes, dedupliação de dados, métodos de strings e transformação de tipos. Descubra como utilizar o Power BI para visualização de dados, gráficos, power query, DAX, filtros e muito mais.",
    "Na nossa formação, preparamos o(a) aluno(a) para se tornar Desenvolvedor(a) Júnior. Abordamos desde os conhecimentos de programação - nessa formação iremos aprofundar nos conhecimentos sobre Back-end - até as habilidades interpessoais solicitadas pelo mercado de trabalho.",
    "No curso intensivo para iniciantes, preparamos o(a) aluno(a) para se tornar Desenvolvedor(a) Júnior. Abordamos desde os conhecimentos de programação – Frontend, Backend, lógica – até as habilidades interpessoais solicitadas pelo mercado de trabalho.",
    "O curso vai capacitar designers para a criação de interfaces pensando na Experiência do Usuário. Para isso, serão trabalhados projetos reais voltados a problemas sociais, tendo como foco o mercado de trabalho.",
  ];
  const data: string[] = [
    "Inicia em 19/05",
    "Em breve",
    "Inicia em 26/06",
    "Inicia em 25/06",
    "Inicia em 23/07",
  ];
  const hora: string[] = [
    "45h de curso",
    "40h de curso",
    "336h de curso",
    "579h de curso",
    "128h de curso",
  ];
  const image: string[] = [
    "url(https://storage.googleapis.com/static.cubos.academy/courses_images/product_management.jpeg)",
    "url(https://static.cubos.academy/courses_images/e2cd17ea4ef615e647d0390766c1676445062ebc4c5e0e68722f0a23770c47fd.jpg)",
    "url(https://storage.googleapis.com/static.cubos.academy/courses_images/backend.jpeg)",
    "url(https://storage.googleapis.com/static.cubos.academy/courses_images/dds.jpeg)",
    "url(https://storage.googleapis.com/static.cubos.academy/courses_images/design_ux.jpeg)",
  ];
  const links: string[] = [
    "https://cubos.academy/cursos/product-management",
    "https://cubos.academy/cursos/analise-de-dados",
    "https://www.cubos.academy/cursos/desenvolvimento-de-software",
    "https://cubos.academy/cursos/desenvolvimento-de-software",
    "https://cubos.academy/cursos/design-uxui",
  ];

  return (
    <CarrouselStyle
      image={image[current.indexOf(true)]}
      top={tittle[current.indexOf(true)].length > 29 ? "119px" : "143px"}
    >
      <h1>{tittle[current.indexOf(true)]}</h1>
      <div className="p">
        <p>{texto[current.indexOf(true)]}</p>
      </div>
      <div className="sobrecurso">
        <span>
          <img src={calendarioIcon} />
          {data[current.indexOf(true)]}
        </span>
        <span>
          <img src={relogioIcon} />
          {hora[current.indexOf(true)]}
        </span>
      </div>
      <Link to={links[current.indexOf(true)]} target="_blank">
        <button className="buy">
          <img src={carrinhoIcon} />
          Comprar curso
        </button>
      </Link>
      <nav>
        {current.indexOf(true) === 0 ? (
          <button className="button button-active"></button>
        ) : (
          <button
            className="button"
            onClick={() => setCurrent([true, false, false, false, false])}
          ></button>
        )}
        {current.indexOf(true) === 1 ? (
          <button className="button button-active"></button>
        ) : (
          <button
            className="button"
            onClick={() => setCurrent([false, true, false, false, false])}
          ></button>
        )}
        {current.indexOf(true) === 2 ? (
          <button className="button button-active"></button>
        ) : (
          <button
            className="button"
            onClick={() => setCurrent([false, false, true, false, false])}
          ></button>
        )}
        {current.indexOf(true) === 3 ? (
          <button className="button button-active"></button>
        ) : (
          <button
            className="button"
            onClick={() => setCurrent([false, false, false, true, false])}
          ></button>
        )}
        {current.indexOf(true) === 4 ? (
          <button className="button button-active"></button>
        ) : (
          <button
            className="button"
            onClick={() => setCurrent([false, false, false, false, true])}
          ></button>
        )}
      </nav>
    </CarrouselStyle>
  );
}
