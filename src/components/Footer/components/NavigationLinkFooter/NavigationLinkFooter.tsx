import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from "./NavigationLinkFooter.module.scss"

interface Props {
  to: string
  text: string
};

export const NavigationLinkFooter: React.FC<Props> = ({ to, text }) => (
    <NavLink
      className={({ isActive }) => classNames(
        styles.navLink,
        { [styles.active]: isActive }
      )}
      to={to}
    >
      {text}
    </NavLink>
  );
