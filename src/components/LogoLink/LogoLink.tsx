import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { scrollToTop } from "../../utils/scrollToTop";

// interface Props {
//   className: string,
// }

export const LogoLink: React.FC = () => {
  const handleClick = () => {
    scrollToTop()
  };

  return (
    <Link to="/" onClick={handleClick}>
      <img
        src={logo}
        alt="logo"
        // className={className}
      />
    </Link>)
}
