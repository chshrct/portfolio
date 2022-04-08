import React from "react";
import s from "./Nav.module.css";

const Nav = () => {
  return <div className={s.nav}>
      <a href="#s">Home</a>
      <a href="#s">Skills</a>
      <a href="#s">Projects</a>
      <a href="#s">Contacts</a>
  </div>;
};

export default Nav;
