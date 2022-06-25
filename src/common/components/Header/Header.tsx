import React, { FC } from 'react';

import { ReactComponent as Phone } from '../../../assets/images/phone.svg';
import cs from '../../styles/Container.module.scss';

import s from './Header.module.scss';
import Nav from './Nav/Nav';

const Header: FC = () => {
  return (
    <div className={s.header}>
      <div className={`${cs.container} ${s.headerContainer}`}>
        <div className={s.navContainer}>
          <Nav />
          <div className={s.phoneContainer}>
            <a className={s.phoneNumber} href="tel:+995 595126653">
              <Phone width={15} height={15} title="phone" />
              +995 595126653
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
