import { FC, useId } from 'react';

import cs from '../../common/styles/Container.module.scss';

import s from './Portfolio.module.scss';
import Project from './Project/Project';

import { PROJECTS_DATA } from 'App/state';
import { SectionHeading } from 'common/components/SectionHeading/SectionHeading';

const Projects: FC = () => {
  return (
    <section id="PROJECTS" className={s.portfolioBlock}>
      <div className={`${cs.container} ${s.portfolioContainer}`}>
        <div style={{ height: '50px' }} />
        <SectionHeading title="Projects" />
        <div style={{ height: '25px' }} />
        <div className={s.projects}>
          {PROJECTS_DATA.map(proj => (
            <Project
              key={useId()}
              backgroundImage={proj.backgroundImage}
              description={proj.description}
              gitLink={proj.gitLink}
              deployLink={proj.deployLink}
              title={proj.title}
            />
          ))}
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </section>
  );
};

export default Projects;
