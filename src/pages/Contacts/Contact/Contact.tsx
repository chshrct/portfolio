import React, { FC, ReactNode } from 'react';

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import s from './Contact.module.scss';

import { SocialLink } from 'common/components/SocialLink/SocialLink';

type PropType = {
  icon: IconDefinition;
  title: string;
  description: ReactNode;
  style: any;
};

export const Contact: FC<PropType> = ({ icon, title, description, style }) => {
  return (
    <div className={s.container}>
      <SocialLink active={false} icon={icon} style={style} />
      <div className={s.description}>
        <h4>{title}</h4>
        <div className={s.descriptionText}>{description}</div>
      </div>
    </div>
  );
};
