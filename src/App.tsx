import { Navigate, Route, Routes } from 'react-router-dom';
import { Container, Header, Footer } from './components';
import {
  CartPage,
  Catalog,
  FavoritesPage,
  HomePage,
  ItemPage,
  ErrorPage,
} from './pages';

import './styles/global.scss';
import styles from './App.module.scss';
import Modal from './components/Modal/Modal';
import { LoginModalContent } from './components/Modal/content/LoginModalContent';
import { SignupModalContent } from './components/Modal/content/SignupModalContent';
import { useModal } from './hooks';

const App: React.FC = () => {
  const {
    isOpenSignInModal,
    isOpenSignUpModal,
    handleSignIn,
    setIsOpenSignInModal,
    handleSignUp,
    setIsOpenSignUpModal,
  } = useModal();

  return (
    <div className={styles.app}>
      <Header handleSignIn={handleSignIn} />

      <main className={styles.main}>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/catalog/" >
              <Route index element={<Catalog />} />
              <Route path=":wineId" element={<ItemPage />} />
            </Route>

            <Route path="/champagne/" element={<Catalog />} />
            <Route path="/wine/" element={<Catalog />} />
            <Route path="/aroma/" element={<Catalog />} />
            <Route path="/food/" element={<Catalog />} />
            <Route path="/festive/" element={<Catalog />} />
            <Route path="/romantic/" element={<Catalog />} />
            <Route path="/food/" element={<Catalog />} />
            <Route path="/by-color/" element={<Catalog />} />
            <Route path="/by-wine-type/" element={<Catalog />} />
            <Route path="/by-capacity/" element={<Catalog />} />
            <Route path="/by-country/" element={<Catalog />} />

            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/cart" element={<CartPage />} />

            <Route path="*" element={<ErrorPage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
          </Routes>
        </Container>
      </main>

      <Footer />
      <Modal
        size="lg"
        open={isOpenSignInModal}
        onClose={() => setIsOpenSignInModal(false)}
      >
        <LoginModalContent
          handleSignUp={handleSignUp}
          onClose={() => setIsOpenSignInModal(false)}
        />
      </Modal>
      <Modal
        open={isOpenSignUpModal}
        onClose={() => setIsOpenSignUpModal(false)}
      >
        <SignupModalContent
          handleSignIn={handleSignIn}
          onClose={() => setIsOpenSignUpModal(false)}
        />
      </Modal>
    </div>
  );
};

export default App;
