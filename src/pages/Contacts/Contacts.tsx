import React from "react";
import s from "./Contacts.module.scss";
import cs from "../../common/styles/Container.module.scss";

const Contacts = () => {
  return (
    <div className={s.contactsBlock}>
      <div className={`${cs.container} ${s.contactsContainer}`}>
        <h2>Contacts</h2>
        <form action="" className={s.form}>
          <input type="text" className={s.input} />
          <input type="text" className={s.input} />
          <textarea
            className={s.textarea}
            name=""
            id=""
            cols={30}
            rows={10}
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
