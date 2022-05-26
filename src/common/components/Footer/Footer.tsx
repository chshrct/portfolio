import React from "react";
import s from "./Footer.module.scss";
import cs from "../../styles/Container.module.scss";

const Footer = () => {
  return (
    <div className={s.footerBlock}>
      <div className={`${cs.container} ${s.footerContainer}`}>
        <h3>Mickey Mouse</h3>
        <div className={s.socialBlock}>
          <div className={s.socialItem}></div>
          <div className={s.socialItem}></div>
          <div className={s.socialItem}></div>
          <div className={s.socialItem}></div>
        </div>
        <h5>© all rights reserved </h5>
      </div>
    </div>
  );
};

export default Footer;
