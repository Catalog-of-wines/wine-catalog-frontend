// import React from "react";
// import { NavLink } from "react-router-dom";
import styles from "./NavigationLinkFooter.module.scss"

// interface Props {
//   to: string
//   text: string
// };

// export const NavigationLinkFooter: React.FC<Props> = ({ to, text }) => {
//   return (
//     <NavLink
//       className={styles.navLink}
//       to={to}
//     >
//       {text}
//     </NavLink>
//   );
// };
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// import classNames from "classnames";
// import React from "react";
// import { NavLink } from "react-router-dom";
// // import styles from "./NavigationLink.module.scss"

// interface Props {
//   to: string;
//   children: React.ReactNode | string;
//   className?: string;
// };

// export const NavigationLinkFooter: React.FC<Props> = ({ to, children, className }) => {
//   return (
//     <NavLink
//       className={({ isActive }) => classNames(
//           [className],
//           { [styles.active]: isActive },
//         )}
//       to={to}
//     >
//       {children}
//     </NavLink>
//   );
// };
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

import React from 'react';
import classNames from 'classnames';
// import styles from './NavigationLink.module.scss';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string
  text: string
  // closeMenu?: () => void
};

export const NavigationLinkFooter: React.FC<Props> = ({ to, text }) => {
  return (
    <NavLink
      className={({ isActive }) => classNames(
        styles.navLink,
        { [styles.active]: isActive }
      )}
      to={to}
    // onClick={closeMenu}
    >
      {text}
    </NavLink>
  );
};