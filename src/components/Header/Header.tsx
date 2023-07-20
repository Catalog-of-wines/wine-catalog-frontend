import { FC, memo } from 'react';
import { Navigation, SearchBar, NavigationLink } from './components';
import { LogoLink } from '../LogoLink';
import { CartIcon, HeartIcon, LoginIcon } from '../icons';
import styles from './Header.module.scss';
import { Button } from '../index';

interface Props {
  handleSignIn: () => void;
}

export const getToken = () => {
  return JSON.parse(localStorage.getItem('token') || 'null');
};

const logOut = () => {
  localStorage.removeItem('token');

  // here should to remove token and user.name from the store
};

export const Header: FC<Props> = memo(({ handleSignIn }) => {
  const token = JSON.parse(localStorage.getItem('token') || 'null');

  return (
    <div className={styles.headerFlex}>
      <LogoLink className={styles.logo} />
      <SearchBar className={styles.headerFlexSearchBar} />
      <Navigation />

      <div className={styles.icon}>
        <NavigationLink className={styles.button} to="/cart">
          <CartIcon className={styles.cart} />
        </NavigationLink>

        <NavigationLink className={styles.button} to="/favorites">
          <HeartIcon className={styles.heart} color="#fff" />
        </NavigationLink>

        <Button className={styles.button} onClick={token ? logOut : handleSignIn} >
          <div className={styles.loginGroup}>
            <LoginIcon />
            <p className={styles.text}>{token ? 'User name' : 'Увійти'}</p>
          </div>
        </Button>
      </div>
    </div>
  );
});
