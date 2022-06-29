import { FC, useState } from 'react';

import s from './SocialGroup.module.scss';

import { SOCIAL_DATA } from 'App/state';
import { SocialLink } from 'common/components/SocialLink/SocialLink';

const FIRST = 0;

export const SocialGroup: FC = () => {
  const [active, setActive] = useState<string>(SOCIAL_DATA[FIRST].title);

  const setActiveHandle = (title: string): void => {
    setActive(title);
  };
  return (
    <div className={s.socialGroup}>
      <div className={s.socialLink}>
        {SOCIAL_DATA.map(link => (
          <SocialLink
            key={link.id}
            title={link.title}
            icon={link.icon}
            setActiveHandle={setActiveHandle}
            active={active === link.title}
            url={link.url}
            style={link.style}
          />
        ))}
      </div>
    </div>
  );
};
