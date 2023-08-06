import React from 'react';
import { Button } from '../../../index';
import stylesModal from '../../Modal.module.scss';
import stylesContent from './LoginModalContent.module.scss';
import LoginForm from './LoginForm/LoginForm';

interface Props {
  handleSignUp: () => void;
  onClose: () => void;
}

export const LoginModalContent = React.memo<Props>(({ handleSignUp, onClose }) => (
  <div className={stylesContent.grid}>
    <div className={stylesContent.form}>
      <h2 className={stylesModal.heading}>
        Для виконання дії увійдіть в кабінет
      </h2>
      <LoginForm onClose={onClose} />
    </div>
    <div className={stylesContent.box}>
      <p className="bold">
        Ще не маєте акаунту? <br /> Зареєструйтесь, щоб:{' '}
      </p>
      <ul className={stylesContent.list}>
        <li className={stylesContent.item}>
          зберігати товари <strong>в обраних;</strong>
        </li>
        <li className={stylesContent.item}>
          отримувати персональні <strong>рекомендації</strong> <br /> та
          <strong>знижки</strong>
        </li>
      </ul>
      <Button onClick={handleSignUp} className={stylesContent.button}>
        Створити акаунт
      </Button>
    </div>
  </div>
));
