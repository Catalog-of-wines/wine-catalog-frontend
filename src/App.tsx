import { Navigate, Route, Routes } from "react-router-dom";
import { Container, Header, Footer } from './components';
import {
  CartPage,
  Catalog,
  FavoritesPage,
  HomePage,
  ItemPage,
  ErrorPage
} from './pages';

import './styles/global.scss'
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <div>
        <Header />
      </div>

      <main className={styles.main}>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/catalog" >
              <Route index element={<Catalog />} />
              <Route path=":wineId" element={<ItemPage />} />
            </Route>

            <Route path="/champagne" element={<Catalog />} />
            <Route path="/wine" element={<Catalog />} />
            <Route path="/aroma" element={<Catalog />} />
            <Route path="/food" element={<Catalog />} />
            <Route path="/festive" element={<Catalog />} />
            <Route path="/romantic" element={<Catalog />} />

            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/cart" element={<CartPage />} />

            <Route path="*" element={<ErrorPage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
          </Routes>

        </Container>
      </main>

      <div>
      <Container>
        <Footer />
        </Container>
      </div>
    </div>
  );
};

export default App;
