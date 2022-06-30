import { FC, TouchEventHandler } from 'react';

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
  active: boolean;
  setActiveHandle(title: string): void;
};

const Project: FC<PropsType> = ({
  title,
  description,
  deployLink,
  gitLink,
  backgroundImage,
  active,
  setActiveHandle,
}) => {
  const { isHovered, onMouseEnter, onMouseLeave } = useHover();
  const onMouseEnterProj = (): void => {
    setActiveHandle(title);
  };
  const onMouseLeaveProj = (): void => {
    setActiveHandle('');
  };
  const onTouchEnd: TouchEventHandler<HTMLDivElement | HTMLAnchorElement> = e => {
    e.preventDefault();
    if (!active) setActiveHandle(title);
    if (active) e.currentTarget.click();
  };
  return (
    <div
      className={active ? `${s.projectBlock} ${s.activeBlock}` : s.projectBlock}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onMouseEnter={onMouseEnterProj}
      onMouseLeave={onMouseLeaveProj}
      onTouchEnd={onTouchEnd}
    >
      <a
        href={deployLink || gitLink}
        className={active ? `${s.link} ${s.activeLink}` : s.link}
        target="_blank"
        rel="noreferrer"
        onTouchEnd={onTouchEnd}
      >
        <h5>{title}</h5>
        <p>{description}</p>
        {deployLink && (
          <object>
            <a
              href={gitLink}
              target="_blank"
              rel="noreferrer"
              className={s.icon}
              onTouchEnd={onTouchEnd}
            >
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
