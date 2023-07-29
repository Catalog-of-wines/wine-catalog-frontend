import { Button } from "../../../Button"
import { NavigationLinkFooter } from "../NavigationLinkFooter"
import styles from "./NavigationInformation.module.scss"

type Props = {
  handleSignUp: () => void,
  handleSignIn: () => void,
}

export const NavigationInformation: React.FC<Props> = ({ handleSignUp, handleSignIn }) => (
  <div className={styles.navList}>
    <NavigationLinkFooter
      to="/aboutus/"
      text="Про нас"
    />

    <Button className={styles.button} onClick={handleSignIn} >
      <p className={styles.text}>Авторизація</p>
    </Button>

    <Button className={styles.button} onClick={handleSignUp} >
      <p className={styles.text}>Реєстрація</p>
    </Button>
  </div>
)
