import React, { FC } from 'react';

import cs from '../../common/styles/Container.module.scss';

import s from './Main.module.scss';

const Main: FC = () => {
  return (
    <section className={s.mainBlock}>
      <div className={`${cs.container} ${s.mainContainer}`}>
        <div className={s.greeting}>
          <h3>Hello, I&apos;m</h3>
          <h1>Edward Davis</h1>
          <h2>Frontend developer</h2>
        </div>
        <div className={s.photo} />
      </div>
    </section>
  );
};

export default Main;
