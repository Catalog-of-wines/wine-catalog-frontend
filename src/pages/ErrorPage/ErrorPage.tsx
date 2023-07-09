import React from "react";
import { SmallPageTitle } from "../../components";
import styles from './ErrorPage.module.scss';

export const ErrorPage = React.memo(() => (
  <SmallPageTitle className={styles.title}>
    Page not found
  </SmallPageTitle>
));
