import React from "react";
import "./App.css";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { Catalog } from "./components/Catalog";

function App() {
  return (
    <>
      <nav className="navbar px-3 is-dark">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer"
          >
            <p>Wine Project</p>
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
                <p className="control">
                  <Link
                    to="/"
                    className="is-align-items-stretch button is-ghost"
                  >
                    Home
                  </Link>
                </p>
            </div>

            <div className="navbar-item">
                <p className="control">
                  <Link
                    to="wines"
                    className="is-align-items-stretch button is-ghost"
                  >
                    Catalog
                  </Link>
                </p>
            </div>
          </div>

          {/* <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </nav>

      <main className="section main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wines" element={<Catalog />} />
          <Route path="*" element={<p>Page not found</p>} />
          <Route path="/home" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
