import React, { FC, useState } from 'react';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';

import signature from '../../../assets/images/signature.png';
import cs from '../../styles/Container.module.scss';

import s from './Header.module.scss';
import Nav from './Nav/Nav';

import { useHover } from 'hooks/useHover/useHover';

const Header: FC = () => {
  const { isHovered, onMouseEnter, onMouseLeave } = useHover();
  const [isBurgerActive, setIsBurgerActive] = useState<boolean>(false);
  return (
    <div className={s.header}>
      <div className={`${cs.container} ${s.headerContainer}`}>
        <Link
          activeClass={s.active}
          to="HOME"
          spy
          smooth
          offset={-80}
          duration={500}
          className={s.logo}
        >
          <img src={signature} alt="signature" />
        </Link>

        <div className={s.navContainer}>
          <Nav isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
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
        <div
          role="button"
          tabIndex={0}
          aria-hidden="true"
          className={s.burger}
          onClick={() => {
            setIsBurgerActive(isActive => !isActive);
          }}
        >
          <div className={isBurgerActive ? `${s.line} ${s.active}` : s.line} />
        </div>
      </div>
    </div>
  );
};

export default Header;
