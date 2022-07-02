import React, { FC, ReactNode } from 'react';

import s from './ResumeItem.module.scss';

type PropsType = {
  position: string;
  date: string;
  place: string;
  description: ReactNode;
};

export const ResumeItem: FC<PropsType> = ({ date, description, place, position }) => {
  return (
    <div className={s.resumeItemContainer}>
      <h3>{position}</h3>
      <div>{date}</div>
      <h4>{place}</h4>
      {description}
    </div>
  );
};
