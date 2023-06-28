import { useState, useEffect } from "react";

import { alunos } from "../../../database";

import AsideLogado from "../../components/AsideLogado/AsideLogado";
import CardAlunoProfile from "../../components/CardAlunoProfile/CardAlunoProfile";

import arrow from "../../assets/DDS/arrow-right.svg";

import { ListaStyle } from "./style";

type dataType = {
  id: number;
  nome: string;
  imagem: string;
};

export default function ListaDeAlunos() {
  const [data] = useState(alunos);
  const [page, setPage] = useState(0);
  const [idk, setIDK] = useState({
    pageMin: 0,
    pageMax: 4,
  });

  const numPages: dataType[][] = [];

  for (let i = 0; i < data.length; i += 9) {
    let array = [];
    for (let j = i; j < i + 9; j++) {
      array.push(data[j]);
    }
    numPages.push(array);
  }

  useEffect(() => {
    if (page < 2) {
      setIDK({ pageMin: 0, pageMax: 4 });
    } else if (page > numPages.length - 3) {
      setIDK({ pageMin: numPages.length - 5, pageMax: numPages.length - 1 });
    } else {
      setIDK({ pageMin: page - 2, pageMax: page + 2 });
    }
  }, [page]);

  return (
    <>
      <AsideLogado />
      <ListaStyle page={page}>
        <section className="box">
          <div className="header">
            <h1>DDS T12</h1>
            <span>124 alunos</span>
          </div>
          <div className="container">
            {numPages[page].map((element: dataType) => {
              return (
                <CardAlunoProfile
                  key={element.id}
                  image={element.imagem}
                  nome={element.nome}
                />
              );
            })}
          </div>
          <div className="paginacao">
            <button
              className="previous"
              onClick={() => {
                page > 0 && setPage(page - 1);
              }}
            >
              <img src={arrow} alt="" />
              Anterior
            </button>
            <span>
              Página {page + 1} de {numPages.length}
            </span>
            <div className="buttons">
              {page > 4 && (
                <>
                  <button onClick={() => setPage(0)}>1</button>{" "}
                  <button>...</button>
                </>
              )}
              {numPages.map((element: dataType[], index: number) => {
                if (index >= idk.pageMin && index <= idk.pageMax) {
                  return (
                    <button
                      key={index}
                      className={page == index ? "active_button" : ""}
                      onClick={() => setPage(index)}
                    >
                      {index + 1}
                    </button>
                  );
                }
              })}
              {page < numPages.length - 5 && (
                <>
                  <button>...</button>
                  <button onClick={() => setPage(numPages.length - 1)}>
                    {numPages.length}
                  </button>
                </>
              )}
            </div>
            <button
              className="next"
              onClick={() => {
                page <= numPages.length - 2 && setPage(page + 1);
              }}
            >
              Próxima
              <img src={arrow} />
            </button>
          </div>
        </section>
      </ListaStyle>
    </>
  );
}
