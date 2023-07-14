import { FC } from 'react';
import { Button, Input } from '../../../index';
import stylesModal from '../../Modal.module.scss';
import stylesContent from './LoginModalContent.module.scss';

interface Props {
  handleSignUp: () => void;
}

export const LoginModalContent: FC<Props> = ({ handleSignUp }) => (
  <div className={stylesContent.grid}>
    <form className={stylesContent.form}>
      <h2 className={stylesModal.heading}>
        Для виконання дії увійдіть в кабінет
      </h2>
      <Input
        label="Логін"
        placeholder="Телефон або емейл"
        className={stylesContent.input}
      />
      <Input
        label="Пароль"
        placeholder="Введіть пароль"
        className={stylesContent.input}
        type="password"
      />
      <Button onClick={() => console.log('Увійти')} className="className">
        Увійти
      </Button>
    </form>
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
      <Button
        onClick={handleSignUp}
        style="outlined-black"
      >
        Створити акаунт
      </Button>
    </div>
  </div>
);
