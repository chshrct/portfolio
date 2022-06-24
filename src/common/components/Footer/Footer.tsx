import React, { FC } from 'react';

import cs from '../../styles/Container.module.scss';

import s from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <div className={s.footerBlock}>
      <div className={`${cs.container} ${s.footerContainer}`}>
        <h3>Mickey Mouse</h3>
        <div className={s.socialBlock}>
          <div className={s.socialItem} />
          <div className={s.socialItem} />
          <div className={s.socialItem} />
          <div className={s.socialItem} />
        </div>
        <h5>© all rights reserved </h5>
      </div>
    </div>
  );
};

export default Footer;
