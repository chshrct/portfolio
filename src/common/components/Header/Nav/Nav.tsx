import { FC } from 'react';

import { Link } from 'react-scroll';

import s from './Nav.module.scss';

const NAV_LINKS = ['HOME', 'SKILLS', 'PROJECTS', 'CONTACTS'];

type PropsType = {
  isBurgerActive: boolean;
};

const Nav: FC<PropsType> = ({ isBurgerActive }) => {
  return (
    <div className={isBurgerActive ? `${s.nav} ${s.act}` : s.nav}>
      <ul>
        {NAV_LINKS.map(link => (
          <li key={Math.random()}>
            <Link activeClass={s.active} to={link} spy smooth offset={-75} duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
