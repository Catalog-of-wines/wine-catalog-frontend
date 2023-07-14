import React from "react";
import styles from "./NavigationFooter.module.scss";
import { NavigationLinkFooter } from "../NavigationLinkFooter";

export const NavigationFooter: React.FC = () => (
    <div className={styles.navList}>
      <NavigationLinkFooter
        to="/catalog/"
        text="Каталог"
      />

      <NavigationLinkFooter
        to="/wine/"
        text="Вино"
      />

      <NavigationLinkFooter
        to="/champagne/"
        text="Шампанське"
      />
    </div>
  )
