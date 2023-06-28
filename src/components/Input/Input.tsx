import { useState } from "react";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";

import { InputBoxStyle } from "./style";

interface InputProps {
  name: string;
  nome: string;
  type: string;
  placeholder?: string;
  margintop: string;
  mask: string;
  haddleChangeFormCadastro?: any;
  haddleChangeFormLogin?: any;
  haddleChangeFormEsqueceuSenha?: any;
}
export default function Input(props: InputProps) {
  const {
    name,
    nome,
    type,
    placeholder,
    margintop,
    mask,
    haddleChangeFormCadastro,
    haddleChangeFormLogin,
    haddleChangeFormEsqueceuSenha,
  } = props;

  function haddleResume(e: React.ChangeEvent<HTMLInputElement>) {
    if (haddleChangeFormCadastro) {
      haddleChangeFormCadastro(name, e.target.value);
    } else if (haddleChangeFormLogin) {
      haddleChangeFormLogin(name, e.target.value);
    } else if (haddleChangeFormEsqueceuSenha) {
      haddleChangeFormEsqueceuSenha(name, e.target.value);
    }
  }

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <InputBoxStyle margintop={margintop}>
      <div className="inputTexto">
        <label>{nome}:</label>
        {nome.toLowerCase() == "senha" ? (
          <Link to="./Esqueceu_Senha">Esqueceu sua senha?</Link>
        ) : (
          ""
        )}
      </div>
      {mask === "" ? (
        <>
          <input
            name={name}
            type={passwordVisible ? "text" : type}
            placeholder={placeholder}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              haddleResume(e);
            }}
            required
          />
          {nome.toLowerCase().includes("senha") ? (
            <div className="button" onClick={() => handleTogglePassword()}>
              {!passwordVisible ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 62 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="style__eye___jMSSF"
                >
                  <path
                    d="M2 21S12.546 2 31 2c18.455 0 29 19 29 19S49.455 40 31 40C12.546 40 2 21 2 21z"
                    stroke="#000"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M31 32c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11z"
                    stroke="#000"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 62 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="style__eye___jMSSF"
                >
                  <path
                    d="M2 28S12.546 9 31 9c18.455 0 29 19 29 19S49.455 47 31 47C12.546 47 2 28 2 28z"
                    stroke="#000"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M31 39c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11z"
                    stroke="#000"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M5 54L57 2"
                    stroke="#000"
                    strokeWidth="4"
                    strokeLinecap="round"
                  ></path>
                </svg>
              )}
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        <InputMask mask={mask} type={type} placeholder={placeholder} required />
      )}
    </InputBoxStyle>
  );
}
