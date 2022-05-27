import React from "react";
import Nav from "./Nav/Nav";
import s from "./Header.module.scss";
import cs from "../../styles/Container.module.scss";
import { ReactComponent as Phone } from "../../../assets/images/phone.svg";
const Header = () => {
  return (
    <div className={s.header}>
      <div className={`${cs.container} ${s.headerContainer}`}>
        <div className={s.navContainer}>
          <Nav />
          <div className={s.phoneContainer}>
            <Phone width={15} height={15} title={"phone"} />
            <div className={s.phoneNumber}>+595126653</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
