import React, { FC } from 'react';

import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import s from './Project.module.scss';

import { useHover } from 'hooks/useHover/useHover';

type PropsType = {
  title: string;
  description: string;
  deployLink?: string;
  gitLink: string;
  backgroundImage: string;
};

const Project: FC<PropsType> = ({
  title,
  description,
  deployLink,
  gitLink,
  backgroundImage,
}) => {
  const { isHovered, onMouseEnter, onMouseLeave } = useHover();
  return (
    <div
      className={s.projectBlock}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <a href={deployLink || gitLink} className={s.link} target="_blank" rel="noreferrer">
        <h5>{title}</h5>
        <p>{description}</p>
        {deployLink && (
          <object>
            <a href={gitLink} target="_blank" rel="noreferrer" className={s.icon}>
              <FontAwesomeIcon
                icon={faGitAlt}
                size="3x"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                shake={isHovered}
              />
            </a>
          </object>
        )}
      </a>
    </div>
  );
};

export default Project;
