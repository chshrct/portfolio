import React from "react";
import s from "./Nav.module.scss";

const Nav = () => {
  return (
    <div className={s.nav}>
      <ul>
        <li>
          <a href="#s">HOME</a>
        </li>
        <li>
          <a href="#s">SKILLS</a>
        </li>
        <li>
          <a href="#s">PROJECTS</a>
        </li>
        <li>
          <a href="#s">CONTACTS</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
