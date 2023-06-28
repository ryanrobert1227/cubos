import { Link } from "react-router-dom";

import linkedin from "../../assets/DDS/linkedin.svg";
import github from "../../assets/DDS/github.svg";

import { CardProfileStyle } from "./style";

interface CardProfileProps {
  image: string;
  nome: string;
  profisao: string;
  link1: string;
  link2: string;
}
export default function CardProfile(props: CardProfileProps) {
  const { image, nome, profisao, link1, link2 } = props;

  return (
    <CardProfileStyle>
      <div className="img">
        <div className="mask"></div>
        <img src={image} />
      </div>
      <div className="infos">
        <h1>{nome}</h1>
        <span>{profisao}</span>
        <div className="links">
          <Link to={link1}>
            <img src={linkedin} />
            <p className="linkedin">Linkedin</p>
          </Link>
          <Link to={link2}>
            <img className="git" src={github} />
            <p>GitHub</p>
          </Link>
        </div>
      </div>
    </CardProfileStyle>
  );
}
