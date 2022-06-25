import React, { FC } from 'react';

import s from './SectionHeading.module.scss';

type PropsType = {
  title: string;
};

export const SectionHeading: FC<PropsType> = ({ title }) => {
  return (
    <div className={s.container}>
      <h4>{title}</h4>
      <h2>{title}</h2>
    </div>
  );
};
