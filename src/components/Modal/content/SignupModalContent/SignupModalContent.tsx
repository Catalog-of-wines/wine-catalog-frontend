import { FC } from 'react';
import { signUp } from '../../../../api/registartion';
import { useAppDispatch } from '../../../../app/hooks';
import * as authactions from '../../../../features/auth/authSlice';
import { SignUpForm } from './SignUpForm/index';
import { NewUser } from '../../../../types/User';
import stylesModal from '../../Modal.module.scss';
import stylesContent from './SignupModalContent.module.scss';

interface Props {
  handleSignIn: () => void;
  onClose: () => void;
}

export const SignupModalContent: FC<Props> = ({ handleSignIn, onClose }) => {
  const dispatch = useAppDispatch();
  const createAccount = async (user: NewUser) => {
    try {
      const response = await signUp(user);

      if (response.statusText === 'OK') {
        console.log('MYresponse>>', response);
        
        dispatch(authactions.addUser(response.data));
        onClose();
      }

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
