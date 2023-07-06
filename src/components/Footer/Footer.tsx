import React from "react";
import { LogoLink } from "../LogoLink";
import { NavigationFooter } from "./components/NavigationFooter";
import { NavigationInformation } from "./components/NavigationInformation";
import styles from "./Footer.module.scss";


export const Footer: React.FC = () => (
  <div className={styles.footer}>
    <div>
      <LogoLink className={styles.logo} />
    </div>
    <div className={styles.navigationFooter}>
      <NavigationFooter />
    </div>
    <div className={styles.navigationInformation}>
      <NavigationInformation />
    </div>
  </div>
);
