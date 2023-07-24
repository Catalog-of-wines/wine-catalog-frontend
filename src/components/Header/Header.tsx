import { FC, memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as authActions from '../../features/auth/authSlice';
import { Navigation, NavigationLink } from './components';
import { LogoLink } from '../LogoLink';
import { CartIcon, HeartIcon, LoginIcon } from '../icons';
import { Button } from '../index';
import styles from './Header.module.scss';

interface Props {
  handleSignIn: () => void;
}

export const Header: FC<Props> = memo(({ handleSignIn }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth);

  const logOut = () => {
    dispatch(authActions.removeUser());
  };

  return (
    <div className={styles.headerFlex}>
      <LogoLink className={styles.logo} />
      <Navigation />

      <div className={styles.icon}>
        <NavigationLink className={styles.button} to="/cart">
          <CartIcon className={styles.cart} />
        </NavigationLink>

        <NavigationLink className={styles.button} to="/favorites">
          <HeartIcon className={styles.heart} color="#fff" />
        </NavigationLink>

        <Button className={styles.button} onClick={user ? logOut : handleSignIn} >
          <div className={styles.loginGroup}>
            <LoginIcon />
            <p className={styles.text}>{user ? 'Вийти' : 'Увійти'}</p>
          </div>
        </Button>
      </div>
    </div>
  );
});
