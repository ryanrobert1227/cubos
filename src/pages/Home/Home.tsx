import { useState } from "react";
import { Link } from "react-router-dom";

import perfilImage from "../../assets/fotoperfil.jpeg";

import AsideLogado from "../../components/AsideLogado/AsideLogado";
import CardNovidades from "../../components/CardNovidades/CardNovidade";
import CardCursos from "../../components/CardCursos/CardCursos";

import { HomeStyle } from "./style";

export default function HomePage() {
  const [fecharLancamento, setFecharLancamento] = useState(true);

  return (
    <HomeStyle>
      <AsideLogado />
      <h1 className="inicio">Início</h1>
      <section className="first_line">
        <div className="perfillog">
          <img src={perfilImage} />
          <h3>Nível do perfil: Intermediário</h3>
          <h2>Ryan Robert Barbosa da Silva</h2>
          <Link to="/perfil" className="linkperfil">
            <span>Completar meu perfil &gt;</span>
          </Link>
        </div>
        {fecharLancamento ? (
          <Link
            className="lancamentos"
            to="https://cubos.academy/cubosondemand"
            target="_blank"
          >
            <svg
              onClick={() => setFecharLancamento(false)}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="style__close-icon___Zu8LW"
            >
              <path
                d="M19.8 5.17a.686.686 0 00-.97-.97L12 11.03 5.17 4.2a.686.686 0 10-.97.97L11.03 12 4.2 18.83a.686.686 0 00.97.97L12 12.97l6.83 6.83a.686.686 0 00.97-.97L12.97 12l6.83-6.83z"
                fill="currentColor"
              ></path>
            </svg>
            <div className="svg">
              <svg
                width="21"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#rocket-icon-new_svg__clip0_1733_103102)">
                  <path fill="#CCBFF8" d="M.5 0h20v20H.5z"></path>
                  <path
                    d="M9 7.29C6.88 5.74 4.89 6.67 3.174 8.353a.614.614 0 00.102.94L6.698 11.5M13.21 11.5c1.549 2.12.62 4.11-1.063 5.826a.614.614 0 01-.94-.102L9 13.802"
                    fill="#7C5AED"
                  ></path>
                  <path
                    d="M6 11.214L9.286 14.5c2.629-1.575 5.617-3.1 6.98-4.513 2.952-2.951 1.24-6.994 1.24-6.994s-4.042-1.71-6.993 1.24C9.1 5.597 7.563 8.598 6 11.214z"
                    fill="#A087F2"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 4.5a2 2 0 100 4 2 2 0 000-4zM6.651 12.657a2.155 2.155 0 00-2.382.527c-.229.24-.408.612-.546.958-.147.37-.279.79-.387 1.183-.108.394-.196.77-.254 1.055a6.882 6.882 0 00-.064.36 1.815 1.815 0 00-.016.14.772.772 0 00.012.189c.006.027.03.135.119.238a.548.548 0 00.37.19.75.75 0 00.103.002c.047-.002.098-.008.144-.014.096-.013.22-.035.362-.063.286-.057.663-.144 1.059-.252.394-.108.816-.24 1.186-.386.347-.138.72-.318.96-.547a2.16 2.16 0 00.051-3.104 2.156 2.156 0 00-.717-.476z"
                    fill="#7C5AED"
                  ></path>
                </g>
                <defs>
                  <clipPath id="rocket-icon-new_svg__clip0_1733_103102">
                    <rect
                      x="0.5"
                      width="20"
                      height="20"
                      rx="3"
                      fill="#fff"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <span>LANÇAMENTOS</span>
            </div>
            <h2>On.Demand</h2>
            <p>
              A assinatura com especializações para aprofundar seus
              conhecimentos em tecnologia.
            </p>
          </Link>
        ) : (
          ""
        )}
      </section>
      <section className="second_line">
        <h2>Novidades</h2>
        <div className="container_cards">
          <Link
            to="https://discord.com/channels/702516391584202802/728717650980765726/1118920007435436072"
            target="_blank"
          >
            <CardNovidades
              svg={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 8.387c-2.827-2.065-5.481-.828-7.767 1.417-.364.357-.288.981.135 1.253L6.93 14M15.614 14c2.064 2.827.827 5.481-1.418 7.767-.357.364-.98.288-1.253-.134L10 17.069"
                    fill="#E93ABA"
                  ></path>
                  <path
                    d="M6 13.619L10.38 18c3.506-2.1 7.49-4.133 9.309-6.018 3.934-3.935 1.653-9.324 1.653-9.324S15.952.376 12.018 4.31C10.133 6.13 8.083 10.131 6 13.62z"
                    fill="#F5A3DF"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.667 4.667a2.667 2.667 0 100 5.333 2.667 2.667 0 000-5.333zM6.868 15.543a2.873 2.873 0 00-3.176.703c-.305.318-.544.816-.728 1.277a15.434 15.434 0 00-.516 1.577 21.906 21.906 0 00-.338 1.407 9.18 9.18 0 00-.087.48 2.415 2.415 0 00-.02.186.79.79 0 00.016.252c.008.035.04.18.158.318a.73.73 0 00.494.253c.058.006.11.004.138.003.062-.003.13-.01.191-.02.128-.017.294-.046.483-.083.38-.076.884-.192 1.411-.336a15.33 15.33 0 001.581-.515c.463-.184.962-.423 1.28-.73a2.879 2.879 0 00.702-3.18 2.88 2.88 0 00-1.589-1.592z"
                    fill="#E93ABA"
                  ></path>
                </svg>
              }
              titulo="Plantão de Vagas"
              texto="Vagas fresquinhas todas as terças e quintas!"
            />
          </Link>
          <Link to="https://meet.google.com/cwf-oqtn-pvk" target="_blank">
            <CardNovidades
              svg={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.7 15.629l-5.935 1.696a.578.578 0 01-.729-.651l.823-4.94V3.948A1.947 1.947 0 014.806 2h12.655a1.947 1.947 0 011.947 1.947v9.735a1.947 1.947 0 01-1.947 1.947h-8.76z"
                    fill="#E93ABA"
                  ></path>
                  <path
                    d="M17.057 20.784l4.178 1.193a.578.578 0 00.729-.65l-.572-3.433v-5.78a1.445 1.445 0 00-1.445-1.445h-9.392a1.445 1.445 0 00-1.445 1.445v7.225a1.445 1.445 0 001.445 1.445h6.502z"
                    fill="#F5A3DF"
                  ></path>
                </svg>
              }
              titulo="Plantão de Empregabilidade"
              texto="Tire dúvidas sobre empregabilidade às terças 17h30!"
            />
          </Link>
          <Link to="https://aulas.cubos.academy/conteudos" target="_blank">
            <CardNovidades
              svg={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8.58V19.5A2.5 2.5 0 004.5 22h15a2.5 2.5 0 002.5-2.5V8.58H2z"
                    fill="#F5A3DF"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 2c.789 0 1.429.64 1.429 1.429v.714h7.143v-.714a1.429 1.429 0 112.857 0v.714H19.5c1.267 0 2.5.946 2.5 2.352v2.092H2V6.495c0-1.406 1.233-2.352 2.5-2.352h1.071v-.714C5.571 2.639 6.211 2 7 2z"
                    fill="#E93ABA"
                  ></path>
                  <path
                    d="M11.214 10.717a.843.843 0 011.572 0l.914 2.329h2.443a.858.858 0 01.571 1.428l-2.157 1.943.914 1.829a.829.829 0 01-.171.985.872.872 0 01-1 .143L12 18.117l-2.3 1.257a.872.872 0 01-1-.143.828.828 0 01-.171-.985l.914-1.829-2.157-1.943a.858.858 0 01.571-1.428H10.3l.914-2.329z"
                    fill="#E93ABA"
                  ></path>
                </svg>
              }
              titulo="Novos cursos On Demand!"
              texto="Confira já os lançamentos dos cursos NestJS e Redux"
            />
          </Link>
          <Link
            to="https://www.youtube.com/watch?v=nJ9COFca1dA"
            target="_blank"
          >
            <CardNovidades
              svg={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.071 2C2.48 2 2 2.48 2 3.071v3.957a5.357 5.357 0 005.357 5.357h.55c.591 0 1.071-.48 1.071-1.071V3.07C8.978 2.48 8.498 2 7.907 2H3.07zm1.072 5.028V4.143h2.692V10.2a3.215 3.215 0 01-2.692-3.172zM20.929 2C21.52 2 22 2.48 22 3.071v3.957a5.357 5.357 0 01-5.357 5.357h-.55c-.591 0-1.071-.48-1.071-1.071V3.07A1.072 1.072 0 0116.093 2h4.836zm-1.072 5.028V4.143h-2.692V10.2a3.215 3.215 0 002.692-3.172zM12 14.363c.592 0 1.071.48 1.071 1.072v4.422h3.737a1.072 1.072 0 010 2.143h-4.77a1.173 1.173 0 01-.075 0h-4.77a1.071 1.071 0 110-2.143h3.736v-4.422c0-.592.48-1.072 1.071-1.072z"
                    fill="#E93ABA"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 2.003a.714.714 0 00-.714.714v7.854a5.714 5.714 0 1011.428 0V2.717A.714.714 0 0017 2.003H7z"
                    fill="#F5A3DF"
                  ></path>
                </svg>
              }
              titulo="Turbine seu linkedin!"
              texto="Confira essas 5 dicas que separamos para você!"
            />
          </Link>
          <Link
            to="https://www.youtube.com/watch?v=PbtKT2nXFPM"
            target="_blank"
          >
            <CardNovidades
              svg={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.623 14.61V9.39a1.387 1.387 0 012.008-1.242l5.221 2.611c1.023.511 1.023 1.97 0 2.482l-5.222 2.61a1.387 1.387 0 01-2.007-1.24z"
                    fill="#E93ABA"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.557 2.067a1.071 1.071 0 00-.331 2.117 7.857 7.857 0 11-8.534 10.655 1.071 1.071 0 10-1.992.789 10.003 10.003 0 009.3 6.318c5.523 0 10-4.477 10-10 0-4.994-3.66-9.13-8.443-9.88zm-3.522 2.129A1.071 1.071 0 109.5 2.12c-.46.118-.908.268-1.34.448a1.071 1.071 0 00.823 1.979c.34-.141.69-.26 1.05-.352zM6.528 6.167A1.071 1.071 0 005.035 4.63 10.035 10.035 0 003.31 6.854a1.071 1.071 0 001.861 1.062 7.893 7.893 0 011.357-1.749zm-2.308 4.53a1.071 1.071 0 10-2.122-.298c-.065.46-.098.93-.098 1.407a1.071 1.071 0 102.143 0c0-.377.026-.747.077-1.108z"
                    fill="#F5A3DF"
                  ></path>
                </svg>
              }
              titulo="Você já conhece o nosso podcast?"
              texto="O nosso último episódio está imperdível!"
            />
          </Link>
        </div>
      </section>
      <section className="third_line">
        <h2>Meus cursos</h2>
        <div className="containercursos">
          <CardCursos
            tittle="Minicurso de JavaScript - PSEL"
            turma={true}
            range="100%"
          />
          <Link to="/Turma/DDS12">
            <CardCursos
              tittle="Desenvolvimento de Software - Full Stack"
              turma={true}
              range="36%"
            />
          </Link>
          <CardCursos
            tittle="Minicurso Introdutório de Typescript"
            turma={false}
            range="50%"
          />
          <Link to="/conteudos" className="aulas">
            <svg
              width="32"
              height="32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#go-to-icon-new_svg__clip0_1096_5467)">
                <path
                  d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16z"
                  fill="#D818A5"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.438 11.561a1.429 1.429 0 00-2.439 1.01v1.715H9.142a1.714 1.714 0 100 3.428h8.857v1.714a1.429 1.429 0 002.439 1.01l3.428-3.428a1.429 1.429 0 000-2.02l-3.428-3.429z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="go-to-icon-new_svg__clip0_1096_5467">
                  <path fill="#fff" d="M0 0h32v32H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <h2>Ir para conteúdos</h2>
          </Link>
        </div>
      </section>
    </HomeStyle>
  );
}
