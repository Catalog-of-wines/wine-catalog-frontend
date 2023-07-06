import React from "react";
import styles from "./NavigationFooter.module.scss";
import { NavigationLinkFooter } from "../NavigationLinkFooter";

export const NavigationFooter: React.FC = () => {
  return (
    <div className={styles.navList}>
      {/* <div className={styles.navTitle}>
        <p> Каталог </p>
      </div> */}
      {/* <div className={styles.navItem}> */}

      <NavigationLinkFooter
        to="/catalog"
        text="Каталог"
      />
      <NavigationLinkFooter
        to="/wine"
        text="Вино"
      />
      <NavigationLinkFooter
        to="/champagne"
        text="Шампанське"
      />
    </div>
  )
}
