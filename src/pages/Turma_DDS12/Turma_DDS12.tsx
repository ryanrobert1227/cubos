import { useState } from "react";
import { Link } from "react-router-dom";

import { professores, alunos } from "../../../database";

import AsideLogado from "../../components/AsideLogado/AsideLogado";
import CardProfile from "../../components/CardProfile/CardProfile";
import CardAlunoProfile from "../../components/CardAlunoProfile/CardAlunoProfile";

import calendario from "../../assets/DDS/calendario.svg";
import relogio from "../../assets/DDS/relogio.svg";
import play from "../../assets/DDS/play.svg";
import lapis from "../../assets/DDS/lapis.svg";
import clipe from "../../assets/DDS/clipe.svg";

import { DDS12Styled } from "./style";

type dataProfessorType = {
  id: number;
  image: string;
  nome: string;
  profissao: string;
  link_linkedin: string;
  link_github: string;
};

type dataAlunoType = {
  id: number;
  imagem: string;
  nome: string;
};

export default function DDS12() {
  const [dataProfessores] = useState(professores);
  const [dataAlunos] = useState(alunos);

  return (
    <>
      <AsideLogado />
      <DDS12Styled>
        <h1 className="h1_da_page">Desenvolvimento de Software - Full Stack</h1>
        <section className="initial">
          <h2>Próximas aulas</h2>
          <div className="time">
            <span>
              <img src={calendario} />
              26/06
            </span>
            <span>
              <img src={relogio} />
              14:00
            </span>
          </div>
          <span className="mini-tittle">
            <span>Front-end</span>
          </span>
          <h3>Introdução ao React</h3>
          {/* ============================================== */}
          <div className="right">
            <div className="time">
              <span>
                <img src={calendario} />
                10/07
              </span>
              <span>
                <img src={relogio} />
                14:00
              </span>
            </div>
            <span className="mini-tittle">
              <span>Front-end</span>
            </span>
            <h3>Resolução do Desafio do módulo 2</h3>
          </div>
        </section>
        <section className="container-dds">
          <div className="aulas">
            <img src={play} alt="" />
            Aulas
          </div>
          <div className="atividade">
            <img src={lapis} alt="" />
            Atividades
          </div>
          <div className="materiais">
            <img src={clipe} alt="" />
            Materiais
          </div>
        </section>
        <section className="last-line">
          <section className="comunicados">
            <h2>
              Comunicados{" "}
              <Link
                className="ver-todos"
                to="https://aulas.cubos.academy/turma/e638dd0c-a109-4704-b2a0-3db2ff04b000/comunicados"
              >
                Ver todos
              </Link>
            </h2>
            <div className="comunicado">
              <span>há 3 dias</span>
              <h3>Conversação em Inglês - Tema: Hobbies (29/06/23)</h3>
              <p>
                Já estamos no climinha de São João por aqui… Mas enquanto as
                festas não começam oficialmente, vamos relembrar nossa
                programação quinzenal: nossa próxima conversação em inglês
                acontece na próxima quinta, 29/06, às 17h. Vamos conversar sobre
                aquele momento que a gente gasta fazendo o que ama: hobbies!
                Esperamos ver vocês lá! O link de inscrição é:
                ingles2906.paperform.co
              </p>
            </div>
            <div className="comunicado">
              <span>há 2 dias</span>
              <h3>Como lidar com a auto sabotagem? A ComuniCubos te ajuda! </h3>
              <p>
                Nosso sextou em Comunidade vem aí com uma temática para
                reflertimos sobre nós mesmo. Contaremos com a psicológa
                educacional da Cubos Academy, Enezita, para conversarmos sobre a
                famosa Síndrome do Importor e aprendermos a lidar melhor com a
                auto sabotagem. Já reserva o dia na agenda e não deixe de
                participar! Data: 30/06(sexta) às 18:30h Link Meet:
                https://bit.ly/eventosindromeimpostor
              </p>
            </div>
            <div className="comunicado">
              <span>há 3 dias</span>
              <h3>O ARRAIÁ JÁ VAI COMEÇAR!</h3>
              <p>
                Daqui a pouco, nesta quinta pré São João, vai acontecer o Happy
                Hour temático da ComuniCubos que irá contar com Kahooit e
                competição de fantasia, e para ficar ainda melhor vai valer
                brindes. Então já coloca a roupa de ir e vem festejar com a
                gente! Data: 22/06 (quinta) às 17:15 Link Meet:
                https://bit.ly/saojoaocomunicubos
              </p>
            </div>
          </section>
          <section className="ultima-aula">
            <h2>Última aula </h2>
            <div className="data-hora">
              <span>
                <img src={calendario} />
                22/06
              </span>
              <span>
                <img src={relogio} />
                14h00
              </span>
            </div>
            <span className="front-end">
              <span>Front-end</span>
            </span>
            <h3>O que é DOM? E Javascript aplicado para a web</h3>
            <div className="video">
              <div className="hover"></div>
            </div>
          </section>
        </section>
        <section className="professores-container">
          <h2>Equipe Cubos Academy</h2>
          <div className="card-profile">
            {dataProfessores.map((element: dataProfessorType) => (
              <CardProfile
                key={element.id}
                image={element.image}
                nome={element.nome}
                profisao={element.profissao}
                link1={element.link_linkedin}
                link2={element.link_github}
              />
            ))}
          </div>
        </section>
        <section className="alunos-container">
          <h2>Conheça sua turma</h2>
          <Link className="lista" to="lista-de-alunos">
            Acessar lista
          </Link>
          <div className="card-profile">
            {dataAlunos.map((element: dataAlunoType) => {
              if (element.id <= 3) {
                return (
                  <CardAlunoProfile
                    key={element.id}
                    image={element.imagem}
                    nome={element.nome}
                  />
                );
              }
            })}
          </div>
        </section>
      </DDS12Styled>
    </>
  );
}
