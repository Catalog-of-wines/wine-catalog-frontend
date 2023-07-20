import { FC } from 'react';
import stylesModal from '../../Modal.module.scss';
import stylesContent from './SignupModalContent.module.scss';
import { signUp } from '../../../../api/registartion';
import { NewUser } from '../../../../types/User';
import { SignUpForm } from './SignUpForm/index';

interface Props {
  handleSignIn: () => void;
  onClose: () => void;
}

export const SignupModalContent: FC<Props> = ({ handleSignIn, onClose }) => {
  const createAccount = async (user: NewUser) => {
    try {
      const response = await signUp(user);

      const { access_token } = response;

      localStorage.setItem('token', JSON.stringify(access_token));

      //  here need to add token and user.name to the store

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className={stylesModal.heading}>Створення акаунту</h2>

      <SignUpForm createAccount={createAccount} />

      <div className={stylesContent.loginBox}>
        <p className={stylesContent.text}>
          Я вже маю акаунт.
        </p>
        <button
          className={stylesContent.loginBtn}
          onClick={handleSignIn}
        >
          Увійти
        </button>
      </div>
    </>
  );
};
