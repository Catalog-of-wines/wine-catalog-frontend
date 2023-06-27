import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavigationLinkFooter.module.scss"

interface Props {
  to: string
  text: string
};

export const NavigationLinkFooter: React.FC<Props> = ({ to, text }) => {
  return (
    <NavLink
      className={styles.navLink}
      to={to}
    >
      {text}
    </NavLink>
  );
};