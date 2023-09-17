// import { Link } from "react-router-dom";
import { SmallPageTitle } from "../../components";
// import { LinkedInIcon } from "../../components/icons";
// import { aboutUsData } from "./dataAboutUs";
import styles from './AboutUsPage.module.scss';

export const AboutUsPage: React.FC = () => (
  <div className={styles.aboutUs}>
    <div className={styles.titleGroup}>
      {/* <LinkedInIcon /> */}
      {/* <SmallPageTitle className={styles.title}>LinkedIn</SmallPageTitle> */}
      <SmallPageTitle className={styles.title}>
      Якщо вам потрібно підібрати вино під конкретну закуску 
      (наприклад, під білу рибу, дичину чи десерти), 
      або знайти вино за певним ароматом (наприклад, з нотками меду, тютюну чи горіхів)
      </SmallPageTitle>
      <SmallPageTitle className={styles.title}>
        - You are welcome!
      </SmallPageTitle>
      <SmallPageTitle className={styles.title}>
      WineBox – це каталог вин, де ви зможете здійснити пошук серед двох тисяч видів вин, 
      які продаються в Україні і мають докладний опис.
      </SmallPageTitle>
    </div>
    {/* <ul>
      {aboutUsData.map(contact =>
        <li className={styles.listItem} key={contact.url}>
          <Link
            to={contact.url}
            className={styles.contact}
            target="_blank"
          >
            {contact.name}
            <span className={styles.role}>{` ${contact.role}`}</span>
          </Link>
        </li>
      )}
    </ul> */}
  </div>
)
