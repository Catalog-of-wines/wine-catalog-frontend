import React from "react";
import styles from "./Navigation.module.scss";
import { NavigationLink } from "../NavigationLink/NavigationLink";

export const Navigation: React.FC = () => {
  return (
    <div className={styles.navList}>
      <NavigationLink
        to="/catalog"
        className={styles.navItem}
      >
        <p className={styles.text}>Каталог</p>
      </NavigationLink>

      <NavigationLink
        to="/wine"
        className={styles.navItem}
      >
        <p className={styles.text}>Вино</p>
      </NavigationLink>

      <NavigationLink
        to="/champagne"
        className={styles.navItem}
      >
        <p className={styles.text}>Шампанське</p>
      </NavigationLink>
    </div>
  )
}
