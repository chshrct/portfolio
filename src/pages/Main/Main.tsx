/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { FC, useState } from 'react';

import { faTelegram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import cs from '../../common/styles/Container.module.scss';

import s from './Main.module.scss';

import { Particle } from 'common/components/Particle/Particle';

enum Links {
  LINKEDIN,
  GITHUB,
  TELEGRAM,
}

const Main: FC = () => {
  const [active, setActive] = useState<number>(Links.LINKEDIN);

  const setActiveClassName = (link: number): string => {
    return active === link ? s.active : '';
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
              <a
                href="#sk"
                className={setActiveClassName(Links.LINKEDIN)}
                onMouseEnter={() => {
                  setActive(Links.LINKEDIN);
                }}
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                LinkedIn
              </a>
              <a
                href="#sk"
                className={setActiveClassName(Links.GITHUB)}
                onMouseEnter={() => {
                  setActive(Links.GITHUB);
                }}
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
                Github
              </a>
              <a
                href="#sk"
                className={setActiveClassName(Links.TELEGRAM)}
                onMouseEnter={() => {
                  setActive(Links.TELEGRAM);
                }}
              >
                <FontAwesomeIcon icon={faTelegram} size="2x" />
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
