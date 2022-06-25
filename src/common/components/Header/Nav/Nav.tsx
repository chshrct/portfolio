import React, { FC, useId } from 'react';

import { Link } from 'react-scroll';

import s from './Nav.module.scss';

const NAV_LINKS = ['HOME', 'SKILLS', 'PROJECTS', 'CONTACTS'];

const Nav: FC = () => {
  return (
    <div className={s.nav}>
      <ul>
        {NAV_LINKS.map(link => (
          <li key={useId()}>
            <Link activeClass={s.active} to={link} spy smooth offset={-20} duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
