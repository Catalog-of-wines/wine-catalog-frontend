import React from "react";
import { Navigation, SearchBar, NavigationLink } from './components';
import { LogoLink } from "../LogoLink";
import { CartIcon, HeartIcon, LoginIcon } from "../icons";
import styles from "./Header.module.scss";
import { Button } from "../Button";

interface Props {
  handleSignIn: () => void;
}

export const Header: React.FC<Props> = ({ handleSignIn }) => (
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

      <Button
        className={styles.button}
        onClick={handleSignIn}
      >
        <div className={styles.loginGroup} >
          <LoginIcon />
          <p className={styles.text}>Увійти</p>
        </div>
      </Button>
    </div>
  </div>
);
