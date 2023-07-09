import React from "react";
import styles from "./SearchBar.module.scss";
import { BiSearch } from "react-icons/bi";

interface Props {
  className: string,
}

export const SearchBar: React.FC<Props> = ({ className }) => {
  const iconStyle = {
    color: "white",
    fontSize: "23px"
  };

  return (
    <div className={className}>
      <form className={styles.form}>
        <input
          type="text"
          className={`${styles.search} ${styles.text}`}
          placeholder="Що ви шукаєте?"
        />

        <button type="submit" className={styles.button}>
          <BiSearch style={iconStyle} />
        </button>
      </form>
    </div>
  )
}
