import React from "react";
import { Navigation, SearchBar,NavigationLink} from './components';
import { LogoLink } from "../LogoLink";
import { CartIcon, HeartIcon, LoginIcon } from "../icons";
import styles from "./Header.module.scss";

export const Header: React.FC = () => (
  <div className={styles.headerFlex}>
    <LogoLink className={styles.logo} />
    <SearchBar className={styles.headerFlexSearchBar} />
    <Navigation />

    <div className={styles.icon}>
      <NavigationLink className={styles.button} to='/cart'>
        <CartIcon className={styles.cart} />
      </NavigationLink>

      <NavigationLink className={styles.button} to='/favorites'>
        <HeartIcon className={styles.heart} color="#fff" />
      </NavigationLink>

      <button type="submit" className={styles.button}>
        <div className={styles.loginGroup} >
          <LoginIcon />
          <p className={styles.text}>Увійти</p>
        </div>
      </button>
    </div>
  </div>
);
