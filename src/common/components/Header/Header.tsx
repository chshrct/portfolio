import React, { FC } from 'react';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import cs from '../../styles/Container.module.scss';

import s from './Header.module.scss';
import Nav from './Nav/Nav';

import { useHover } from 'hooks/useHover/useHover';

const Header: FC = () => {
  const { isHovered, onMouseEnter, onMouseLeave } = useHover();
  return (
    <div className={s.header}>
      <div className={`${cs.container} ${s.headerContainer}`}>
        <div className={s.navContainer}>
          <Nav />
          <div
            className={s.phoneContainer}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <a className={s.phoneNumber} href="tel:+995 595126653">
              <FontAwesomeIcon icon={faPhone} shake={isHovered} />
              +995 595126653
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
