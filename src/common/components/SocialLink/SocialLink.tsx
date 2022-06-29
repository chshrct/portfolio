import React, { FC } from 'react';

import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import s from './SocialLink.module.scss';

type PropsType = {
  active: boolean;
  icon: IconDefinition;
  setActiveHandle?: (title: string) => void;
  title?: string;
  url?: string;
  style?: any;
};

export const SocialLink: FC<PropsType> = ({
  title,
  active,
  icon,
  url,
  setActiveHandle,
  style,
}) => {
  const onMouseEnter = (): void => {
    if (setActiveHandle && title) setActiveHandle(title);
  };
  return (
    <a
      href={url}
      className={active ? `${s.link} ${s.active}` : s.link}
      onMouseEnter={onMouseEnter}
      target="_blank"
      rel="noreferrer"
      style={style}
    >
      <FontAwesomeIcon icon={icon} size="2x" />
      {title}
    </a>
  );
};
