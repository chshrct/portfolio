import React, { FC } from 'react';

import cs from '../../common/styles/Container.module.scss';

import s from './Contacts.module.scss';

const Contacts: FC = () => {
  return (
    <section className={s.contactsBlock}>
      <div className={`${cs.container} ${s.contactsContainer}`}>
        <h2>Contacts</h2>
        <form action="" className={s.form}>
          <input type="text" className={s.input} />
          <input type="text" className={s.input} />
          <textarea className={s.textarea} name="" id="" cols={30} rows={10} />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
