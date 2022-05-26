import React from "react";
import s from "./Main.module.scss";
import cs from "../../common/styles/Container.module.scss";
const Main = () => {
  return (
    <div className={s.mainBlock}>
      <div className={`${cs.container} ${s.mainContainer}`}>
        <div className={s.greeting}>
          <span>Hi there</span>
          <h1>I am Mickey Mouse</h1>
          <p>Frontend developer</p>
        </div>
        <div className={s.photo}></div>
      </div>
    </div>
  );
};

export default Main;
