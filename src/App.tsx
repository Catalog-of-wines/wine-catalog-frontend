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
        <Footer />
      </div>
    </div>
  );
};

export default App;

// function App() {
//   return (
//     <>
//       <nav className="navbar px-3 is-dark">
//         <div className="navbar-brand">
//           <a
//             className="navbar-item"
//             href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <p>Wine Project</p>
//           </a>

//           <a
//             role="button"
//             className="navbar-burger"
//             aria-label="menu"
//             aria-expanded="false"
//             data-target="navbarBasicExample"
//           >
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//           </a>
//         </div>

//         <div id="navbarBasicExample" className="navbar-menu">
//           <div className="navbar-start">
//             <div className="navbar-item">
//                 <p className="control">
//                   <Link
//                     to="/"
//                     className="is-align-items-stretch button is-ghost"
//                   >
//                     Home
//                   </Link>
//                 </p>
//             </div>

//             <div className="navbar-item">
//                 <p className="control">
//                   <Link
//                     to="wines"
//                     className="is-align-items-stretch button is-ghost"
//                   >
//                     Catalog
//                   </Link>
//                 </p>
//             </div>
//           </div>

//           {/* <div className="navbar-end">
//             <div className="navbar-item">
//               <div className="buttons">
//                 <a className="button is-primary">
//                   <strong>Sign up</strong>
//                 </a>
//                 <a className="button is-light">
//                   Log in
//                 </a>
//               </div>
//             </div>
//           </div> */}
//         </div>
//       </nav>

//       <main className="section main">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/wines" element={<Catalog />} />
//           <Route path="*" element={<p>Page not found</p>} />
//           <Route path="/home" element={<Navigate to="/" replace />} />
//         </Routes>
//       </main>
//     </>
//   );
// }

// export default App;
