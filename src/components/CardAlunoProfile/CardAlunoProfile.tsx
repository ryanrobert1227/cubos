import { Link } from "react-router-dom";

import arrow from "../../assets/DDS/arrow-right.svg";
import notimagefound from "../../assets/DDS/error.svg";

import { CardAlunoProfileStyle } from "./style";

interface CardProfileProps {
  image: string;
  nome: string;
}
export default function CardAlunoProfile(props: CardProfileProps) {
  const { image, nome } = props;

  return (
    <CardAlunoProfileStyle>
      <div className="img">
        {image ? <div className="mask"></div> : ""}
        {image ? (
          <img src={image} />
        ) : (
          <div className="imagem">
            <img src={notimagefound} />
          </div>
        )}
      </div>
      <div className="infos">
        <h1>{nome}</h1>
        <Link to="">
          Acessar perfil <img src={arrow} />
        </Link>
      </div>
    </CardAlunoProfileStyle>
  );
}
