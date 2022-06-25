import React, { FC, useState } from 'react';

import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import s from './Skill.module.scss';

type PropsType = {
  icon: IconDefinition;
  title: string;
  description: string;
};

const Skill: FC<PropsType> = ({ title, description, icon }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const onSkillMouseEnter = (): void => {
    setIsHovered(true);
  };
  const onSkillMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div
      className={s.skill}
      onMouseEnter={onSkillMouseEnter}
      onMouseLeave={onSkillMouseLeave}
    >
      <FontAwesomeIcon
        icon={icon}
        size="4x"
        className={isHovered ? s.hover : undefined}
        beat={isHovered}
      />
      <h2 className={isHovered ? `${s.title} ${s.hover}` : s.title}>{title}</h2>
      <p className={s.description}>{description}</p>
    </div>
  );
};

export default Skill;
