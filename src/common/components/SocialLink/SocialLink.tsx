import React, { FC } from 'react';

import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import s from './SocialLink.module.scss';

type PropsType = {
  active: boolean;
  icon: IconDefinition;
  setActiveHandle: (title: string) => void;
  title: string;
  url: string;
};

export const SocialLink: FC<PropsType> = ({
  title,
  active,
  icon,
  url,
  setActiveHandle,
}) => {
  const onMouseEnter = (): void => {
    setActiveHandle(title);
  };
  return (
    <a
      href={url}
      className={active ? `${s.link} ${s.active}` : s.link}
      onMouseEnter={onMouseEnter}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={icon} size="2x" />
      {title}
    </a>
  );
};
