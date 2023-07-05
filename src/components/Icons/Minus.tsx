import { FC } from "react";

interface Props {
  className?: string;
}

export const Minus: FC<Props> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 10C18 10.1658 17.9342 10.3247 17.8169 10.4419C17.6997 10.5592 17.5408 10.625 17.375 10.625H3.625C3.45924 10.625 3.30027 10.5592 3.18306 10.4419C3.06585 10.3247 3 10.1658 3 10C3 9.83424 3.06585 9.67527 3.18306 9.55806C3.30027 9.44085 3.45924 9.375 3.625 9.375H17.375C17.5408 9.375 17.6997 9.44085 17.8169 9.55806C17.9342 9.67527 18 9.83424 18 10Z"
      fill="#B5B2B4"
    />
  </svg>
);