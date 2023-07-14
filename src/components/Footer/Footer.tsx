import React from "react";
import { LogoLink } from "../LogoLink";
import { NavigationFooter } from "./components/NavigationFooter";
import { NavigationInformation } from "./components/NavigationInformation";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => (
  <div>
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
    <p className={styles.copyright}>Copyright © 2023. All rights reserved.</p>
  </div>
);
