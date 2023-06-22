import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./IconLink.module.scss"
import { BiCart } from "react-icons/bi";

interface Props {
  to: string
  items?: number
};

export const IconLink: React.FC<Props> = ({
  to,
  items,
}) => (
  <NavLink
    className={styles.navLink}
    to={to}
  >

    {
      !!items && <div className={styles.counter}>
        {items > 99
          ? 99
          : items}
      </div>
    }
    <button className={styles.icon}>
      <BiCart />
    </button>

  </NavLink>
);