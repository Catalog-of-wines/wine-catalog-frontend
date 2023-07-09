import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./IconLink.module.scss"
import { BiCart } from "react-icons/bi";
import classNames from "classnames";

interface Props {
  to: string
  items?: number
};

export const IconLink: React.FC<Props> = ({
  to,
  items,
}) => (
  <NavLink
    className={({ isActive }) => classNames(
      { [styles.navLink]: isActive },
    )}
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