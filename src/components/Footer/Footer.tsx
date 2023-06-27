import React from "react";
import styles from "./Footer.module.scss";
import { LogoLink } from "../LogoLink";
import { NavigationFooter } from "./components/NavigationFooter";
import { NavigationInformation } from "./components/NavigationInformation";


export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <LogoLink />
      </div>

      <div className={styles.navigation}>
        <NavigationFooter />
        <NavigationInformation />
      </div>

    </div>

  );
};
