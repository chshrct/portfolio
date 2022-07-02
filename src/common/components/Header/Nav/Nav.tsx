import { FC, MouseEventHandler } from 'react';

import { Link } from 'react-scroll';

import s from './Nav.module.scss';

const NAV_LINKS = ['HOME', 'RESUME', 'SKILLS', 'PROJECTS', 'CONTACTS'];

type PropsType = {
  isBurgerActive: boolean;
  setIsBurgerActive(isActive: boolean): void;
};

const Nav: FC<PropsType> = ({ isBurgerActive, setIsBurgerActive }) => {
  const onOutSideNavClick: MouseEventHandler<HTMLDivElement> = () =>
    setIsBurgerActive(false);
  return (
    <div
      role="button"
      tabIndex={0}
      aria-hidden="true"
      className={isBurgerActive ? `${s.nav} ${s.activeNav}` : s.nav}
      onClick={onOutSideNavClick}
    >
      <ul
        aria-hidden="true"
        className={isBurgerActive ? `${s.ul} ${s.activeUl}` : s.ul}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {NAV_LINKS.map(link => (
          <li key={Math.random()}>
            <Link activeClass={s.active} to={link} spy smooth offset={-80} duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
