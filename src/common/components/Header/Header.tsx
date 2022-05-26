import React from "react";
import Nav from "./Nav/Nav";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <div className={s.header}>
      <Nav />
    </div>
  );
};

export default Header;
