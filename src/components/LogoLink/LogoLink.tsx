import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { scrollToTop } from "../../utils/scrollToTop";

interface Props {
  className?: string,
}

export const LogoLink: React.FC<Props> = ({ className }) => {
  const handleClick = () => {
    scrollToTop();
  };

  return (
    <Link to="/" onClick={handleClick} >
      <div className={className} >
        <img
          src={logo}
          alt="logo"
        />
      </div>
    </Link>
  )
}
