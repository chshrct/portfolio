import { FC } from 'react';

import learningBg from '../../assets/images/learning.jpg';
// import socialBg from '../../assets/images/social.png';
import cs from '../../common/styles/Container.module.scss';

import s from './Portfolio.module.scss';
import Project from './Project/Project';

import { SectionHeading } from 'common/components/SectionHeading/SectionHeading';

const Projects: FC = () => {
  return (
    <section id="PROJECTS" className={s.portfolioBlock}>
      <div className={`${cs.container} ${s.portfolioContainer}`}>
        <div style={{ height: '100px' }} />
        <SectionHeading title="Projects" />
        <div style={{ height: '25px' }} />
        <div className={s.projects}>
          <Project
            backgroundImage={learningBg}
            gitLink="https://github.com/chshrct/cards"
            deployLink="https://chshrct.github.io/cards/"
            title="Learning Cards"
            description="a person or thing that counts something… I would just tell them I am a very fast counter. — Judy Blume
especially : a device or process for indicating a number or amount a counter that records how many times a "
          />
        </div>
        <div style={{ height: '100px' }} />
      </div>
    </section>
  );
};

export default Projects;
