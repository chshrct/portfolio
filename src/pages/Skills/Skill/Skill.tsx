import { FC } from 'react';

import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import s from './Skill.module.scss';

import { useHover } from 'hooks/useHover/useHover';

type PropsType = {
  icon: IconDefinition;
  title: string;
  description: string;
};

const Skill: FC<PropsType> = ({ title, description, icon }) => {
  const { isHovered, onMouseEnter, onMouseLeave } = useHover();

  return (
    <div className={s.skill} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
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
