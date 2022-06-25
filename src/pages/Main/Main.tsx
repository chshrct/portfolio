/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { FC, useId, useState } from 'react';

import { faTelegram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import cs from '../../common/styles/Container.module.scss';

import s from './Main.module.scss';

import { Particle } from 'common/components/Particle/Particle';
import { SocialLink } from 'common/components/SocialLink/SocialLink';

const Links = [
  {
    title: 'LinkedIn',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/eugene-kostroma-1078b7201/',
  },
  {
    title: 'Github',
    icon: faGithub,
    url: 'https://github.com/chshrct',
  },
  {
    title: 'Telegram',
    icon: faTelegram,
    url: 'https://t.me/chshrct',
  },
];

const FIRST = 0;

const Main: FC = () => {
  const [active, setActive] = useState<string>(Links[FIRST].title);

  const setActiveHandle = (title: string): void => {
    setActive(title);
  };

  return (
    <section className={s.mainBlock}>
      <Particle />
      <div className={`${cs.container} ${s.mainContainer}`}>
        <div className={s.greeting}>
          <h3>Hello, I&apos;m</h3>
          <h1>Yauheni Kastrama</h1>
          <h2>Frontend developer</h2>
        </div>
        <div className={s.photo}>
          <div className={s.socialGroup}>
            <div className={s.socialLink}>
              {Links.map(link => (
                <SocialLink
                  key={useId()}
                  title={link.title}
                  icon={link.icon}
                  setActiveHandle={setActiveHandle}
                  active={active === link.title}
                  url={link.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
