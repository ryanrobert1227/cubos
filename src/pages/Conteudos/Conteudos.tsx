import { Link } from "react-router-dom";

import AsideLogado from "../../components/AsideLogado/AsideLogado";
import CardCursosConteudo from "../../components/CardCursosConteudos/CardCursosConteudos";
import Carrousel from "../../components/Carrousel/Carrousel";

import backIcon from "../../assets/back.svg";

import { ConteudosStyle } from "./style";

export default function ConteudosPage() {
  return (
    <ConteudosStyle>
      <AsideLogado />
      <Carrousel />
      <section className="my-course">
        <h1>Meus cursos</h1>
        <div className="controls">
          <button className="back">
            <img src={backIcon} alt="voltar" />
          </button>
          <div className="meus-cursos-container">
            <CardCursosConteudo
              tittle="Minicurso de JavaScript - PSEL"
              sala="PSEL DDS T12"
              range="100%"
              turma={true}
              image="https://static.cubos.academy/courses_images/0d37273afb25bc6bd3709f996408ec109e8a612be5e270fb0ec0e6c7052f77ef.jpg"
            />
            <Link to="/Turma/DDS12">
              <CardCursosConteudo
                tittle="Desenvolvimento de Software - Full Stack"
                sala="DDS T12"
                range="37%"
                turma={true}
                image="	https://static.cubos.academy/courses_images/61087784b844d2958b56a755705858f2b554c5e732146ccac06147a69550ed19.jpg"
              />
            </Link>
            <CardCursosConteudo
              tittle="Minicurso Introdutório de Typescript"
              sala=""
              range="50%"
              turma={true}
              image="https://static.cubos.academy/courses_images/126ccc9ad362129de386b3cae9e6b2e327f533be095ab9a0e050b875f88243a1.jpg"
            />
          </div>
          <button className="next">
            <img src={backIcon} alt="avançar" />
          </button>
        </div>
      </section>
    </ConteudosStyle>
  );
}
