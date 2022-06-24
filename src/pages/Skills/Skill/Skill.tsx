import React, { FC } from 'react';

import s from './Skill.module.scss';

type PropsType = {
  title: string;
  description: string;
};

const Skill: FC<PropsType> = ({ title, description }) => {
  return (
    <div className={s.skill}>
      <div className={s.icon} />
      <h3 className={s.title}>{title}</h3>
      <span className={s.description}>{description}</span>
    </div>
  );
};

export default Skill;
