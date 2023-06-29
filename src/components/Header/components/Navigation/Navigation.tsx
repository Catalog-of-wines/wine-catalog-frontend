import React from "react";
import styles from "./Navigation.module.scss";
import { NavigationLink } from "../NavigationLink/NavigationLink";

export const Navigation: React.FC = () => {
  return (
    // <nav className={styles.nav}>
      <div className={styles.navList}>
        <div className={styles.navItem}>
          <NavigationLink
            to="/catalog"
            text="Каталог"
          />
        </div>
        <div className={styles.navItem}>
          <NavigationLink
            to="/wine"
            text="Вино"
          />
        </div>
        <div className={styles.navItem}>
          <NavigationLink
            to="/champagne"
            text="Шампанське"
          />
        </div>
      </div>
    // </nav>
  )
}
