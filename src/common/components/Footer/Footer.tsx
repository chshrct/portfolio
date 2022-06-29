import { FC } from 'react';

import cs from '../../styles/Container.module.scss';

import s from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <div className={s.footerBlock}>
      <div className={`${cs.container} ${s.footerContainer}`}>
        <p>© 2022. Made by Chshrct. All right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
