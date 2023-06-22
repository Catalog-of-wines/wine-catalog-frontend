import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavigationLink.module.scss"

interface Props {
  to: string
  text: string
};

export const NavigationLink: React.FC<Props> = ({ to, text }) => {
  return (
    <NavLink
      className={styles.navLink}
      to={to}
    >
      {text}
    </NavLink>
  );
};