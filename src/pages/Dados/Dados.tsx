import { DadosStyle } from "./style";

import imagemPerfil from "../../assets/fotoperfil.jpeg";
import cameraicon from "../../assets/camera.svg";
import olhoDados from "../../assets/olhodados.svg";
import notOlhoDados from "../../assets/!olhodados.svg";

import AsideLogado from "../../components/AsideLogado/AsideLogado";
import BoxDados from "../../components/BoxDados/BoxDados";

export default function DadosPage() {
  return (
    <DadosStyle>
      <AsideLogado />
      <section className="paisagem">
        <img
          className="fotoperfil"
          src={imagemPerfil}
          alt="Sua Foto de Perfil"
        />
        <img
          className="fotoicon"
          src={cameraicon}
          alt="mude sua foto de perfil"
        />
        <img
          className="fotoicon2"
          src={cameraicon}
          alt="mude sua foto de perfil"
        />
        <div className="faixaBase">
          <div className="usuario">
            <h1>Teste</h1>
            <h2>@testeuoy</h2>
          </div>
        </div>
      </section>
      <section className="dadosdaconta">
        <h1>Dados da conta</h1>
        <div className="exibido">
          <img src={olhoDados} />
          <h3>Exibido para todos</h3>
        </div>
        <BoxDados info="Nome Completo" valor="teste testado teste do teste" />
        <BoxDados info="Username" valor="testeuoy" />
        <div className="exibido">
          <img src={notOlhoDados} />
          <h3>Exibido apenas para você</h3>
        </div>
        <BoxDados info="Celular" valor="12345678909" />
        <BoxDados info="E-mail" valor="teste@teste.com" />
        <BoxDados info="Senha de acesso" valor="********" />
      </section>
    </DadosStyle>
  );
}
