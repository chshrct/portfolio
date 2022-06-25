import { FC } from 'react';

import cs from '../../common/styles/Container.module.scss';

import s from './Main.module.scss';
import { SocialGroup } from './SocialGroup/SocialGroup';

import { Particle } from 'common/components/Particle/Particle';

const Main: FC = () => {
  return (
    <section id="HOME" className={s.mainBlock}>
      <Particle />
      <div className={`${cs.container} ${s.mainContainer}`}>
        <div className={s.greeting}>
          <h3>Hello, I&apos;m</h3>
          <h1>Yauheni Kastrama</h1>
          <h2>Frontend developer</h2>
        </div>
        <div className={s.photo}>
          <SocialGroup />
        </div>
      </div>
    </section>
  );
};

export default Main;
