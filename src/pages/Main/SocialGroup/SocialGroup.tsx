import React, { FC, useId, useState } from 'react';

import { faTelegram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import s from './SocialGroup.module.scss';

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

export const SocialGroup: FC = () => {
  const [active, setActive] = useState<string>(Links[FIRST].title);

  const setActiveHandle = (title: string): void => {
    setActive(title);
  };
  return (
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
  );
};
