import React, { FC, ReactNode } from 'react';

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import s from './ResumeSection.module.scss';

type PropsType = {
  title: string;
  icon: IconDefinition;
  children: ReactNode;
};

export const ResumeSection: FC<PropsType> = ({ title, icon, children }) => {
  return (
    <div className={s.resumeSectionContainer}>
      <div className={s.headingContainer}>
        <FontAwesomeIcon icon={icon} size="2x" />
        <h2>{title}</h2>
        <div style={{ height: '50px' }} />
      </div>
      <div style={{ height: '50px' }} />
      <div className={s.items}>{children}</div>
    </div>
  );
};
