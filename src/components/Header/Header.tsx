import React from "react";
import styles from "./Header.module.scss";
import { LogoLink } from "../LogoLink";
import { SearchBar } from "./components/SearchBar";
import { Navigation } from "./components/Navigation";
import { BiCart, BiUserCircle } from "react-icons/bi";
// import { Container } from "../Container";


export const Header: React.FC = () => {
  const iconStyle = {
    color: "white",
    fontSize: "23px"
  };

  return (
  // <Container >
    <div className={styles.headerFlex}>
      <div className={styles.logo} >
      <LogoLink />
      </div>

      <SearchBar className={styles.headerFlexSearchBar} />
        <Navigation />

      <div className={styles.icon}>
        <button type="submit" className={styles.button}>
          <BiCart style={iconStyle}/>
        </button>
        <button type="submit" className={styles.button}>
          <BiUserCircle style={iconStyle}/>
        </button>
      </div>
    </div>
  // </Container>
    );
};
