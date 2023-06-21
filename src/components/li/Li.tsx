import { LiStyle } from "./style";

interface LiProps {
  boolean: boolean;
  text: string;
}
export default function Li(props: LiProps) {
  const { boolean, text } = props;

  return (
    <LiStyle>
      {boolean ? (
        <svg
          width="12px"
          height="12px"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="style__valid-icon___Q_rMy"
        >
          <path
            d="M9 1L3.24 7 1 4.55"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ) : (
        <svg
          width="12px"
          viewBox="0 0 11 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          height="12px"
          className="style__invalid-icon___Eamft"
        >
          <path
            d="M1.5 1.012L9.5 9m0-8l-8 7.988"
            stroke="#ff0000"
            strokeWidth="1.8"
            strokeLinecap="round"
          ></path>
        </svg>
      )}
      {text}
    </LiStyle>
  );
}
