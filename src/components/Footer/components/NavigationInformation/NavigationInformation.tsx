import { NavigationLinkFooter } from "../NavigationLinkFooter"
import styles from "./NavigationInformation.module.scss"

export const NavigationInformation: React.FC = () => (
  <div className={styles.navList}>
    <div className={styles.navTitle}>
      <p> Інше </p>
    </div>

    <NavigationLinkFooter
      to="/aboutus/"
      text="Про нас"
    />

    <NavigationLinkFooter
      to="/authorization/"
      text="Авторизація"
    />

    <NavigationLinkFooter
      to="/registration/"
      text="Реєстрація"
    />
  </div>
)
