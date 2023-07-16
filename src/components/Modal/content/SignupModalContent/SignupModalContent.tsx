import { FC } from 'react';
import { Button, Input } from '../../../index';
import stylesModal from '../../Modal.module.scss';
import stylesContent from './SignupModalContent.module.scss';

interface Props {
  handleSignIn: () => void;
}
export const SignupModalContent: FC<Props> = ({ handleSignIn }) => (
  <form className={stylesContent.form}>
    <h2 className={stylesModal.heading}>Створення акаунту</h2>
    <Input
      label="Ім‘я*"
      placeholder="Введіть ім‘я"
      className={stylesContent.input}
    />
    <Input
      label="Email*"
      placeholder="Введіть email"
      className={stylesContent.input}
      type="email"
    />
    <Input
      label="Телефон (опціонально)"
      placeholder="Введіть телефон"
      className={stylesContent.input}
      type="tel"
    />
    <Input
      label="Пароль*"
      placeholder="Вигадайте надійний пароль"
      className={stylesContent.input}
      type="password"
    />
    <Button onClick={() => console.log('Увійти')}>
      Створити акаунт
    </Button>
    <div className={stylesContent.loginBox}>
      <p className={stylesContent.text}>Я вже маю акаунт.</p>
      <button
        className={stylesContent.loginBtn}
        onClick={handleSignIn}
      >
        Увійти
      </button>
    </div>
  </form>
);
