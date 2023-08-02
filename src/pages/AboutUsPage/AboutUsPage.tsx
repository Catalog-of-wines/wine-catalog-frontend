import { Link } from "react-router-dom";
import { SmallPageTitle } from "../../components";
import { LinkedInIcon } from "../../components/icons";
import { aboutUsData } from "./dataAboutUs";
import styles from './AboutUsPage.module.scss';

export const AboutUsPage: React.FC = () => (
  <div className={styles.aboutUs}>
    <div className={styles.titleGroup}>
      <LinkedInIcon />
      <SmallPageTitle>LinkedIn</SmallPageTitle>
    </div>
    <ul>
      {aboutUsData.map(contact =>
        <li className={styles.listItem}>
          <Link
            to={contact.url}
            className={styles.contact}
            target="_blank"
          >
            {contact.name}
            <span>{contact.ocupation}</span>
          </Link>
        </li>
      )}
    </ul>
  </div>
)
