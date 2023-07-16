import { useCallback, useState } from "react";

export const useModal = () => {
  const [isOpenSignInModal, setIsOpenSignInModal] = useState(false);
  const [isOpenSignUpModal, setIsOpenSignUpModal] = useState(false);

  const handleSignUp = useCallback(() => {
    if (isOpenSignInModal) {
      setIsOpenSignInModal(false);
    }

    setIsOpenSignUpModal(true);
  }, [isOpenSignInModal]);

  const handleSignIn = useCallback(() => {
    if (isOpenSignUpModal) {
      setIsOpenSignUpModal(false);
    }

    setIsOpenSignInModal(true);
  }, [isOpenSignUpModal]);

  return {
    isOpenSignInModal,
    isOpenSignUpModal,
    setIsOpenSignInModal,
    setIsOpenSignUpModal,
    handleSignUp,
    handleSignIn,
  }
}