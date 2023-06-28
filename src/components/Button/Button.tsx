// import React, { ClassAttributes} from "react";
// import styles from "./Button.module.scss";

import { DetailedHTMLProps } from "react";

interface Props extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  onClick: () => void;
  children: React.ReactNode | string;
}

export const Button: React.FC<Props> = ({ children, onClick, ...props }) => (
  <button type='button' onClick={onClick} {...props}>
    {children}
  </button>
);