// import React, { ClassAttributes} from "react";
// import styles from "./Button.module.scss";

import { DetailedHTMLProps } from "react";

interface Props extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  // props: string,
  children: React.ReactNode | string
}

export const Button: React.FC<Props> = ({ children, ...props }) => (
  <button {...props}>
    {children}
  </button>
);