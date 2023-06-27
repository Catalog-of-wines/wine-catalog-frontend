// import react from "react";
import { NavigationLinkFooter } from "../NavigationLinkFooter"
import styles from "./NavigationInformation.module.scss"

export const NavigationInformation: React.FC = () => {
  return (
    <div className={styles.navList}>
      <div className={styles.navTitle}>
        <p> Інше </p>
      </div>
      <div className={styles.navItem}>
        <NavigationLinkFooter
          to="/"
          text="Про нас"
        />
      </div>
      <div className={styles.navItem}>
        <NavigationLinkFooter
          to="/"
          text="Авторизація"
        />
      </div>
      <div className={styles.navItem}>
        <NavigationLinkFooter
          to="/"
          text="Реєстрація"
        />
      </div>
    </div>
)
}