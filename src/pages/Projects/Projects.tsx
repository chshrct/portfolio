import { FC, useState } from 'react';

import cs from '../../common/styles/Container.module.scss';

import Project from './Project/Project';
import s from './Projects.module.scss';

import { PROJECTS_DATA } from 'App/state';
import { SectionHeading } from 'common/components/SectionHeading/SectionHeading';

const Fade = require('react-reveal/Fade');

const Projects: FC = () => {
  const [activeProject, setActiveProject] = useState<string>('');
  const setActiveHandle = (title: string): void => {
    setActiveProject(title);
  };

  return (
    <Fade fraction={0.05}>
      <section id="PROJECTS" className={s.projectsBlock}>
        <div className={`${cs.container} ${s.projectsContainer}`}>
          <div style={{ height: '50px' }} />
          <SectionHeading title="Projects" />
          <div style={{ height: '25px' }} />
          <div className={s.projects}>
            {PROJECTS_DATA.map(proj => (
              <Project
                key={proj.id}
                backgroundImage={proj.backgroundImage}
                description={proj.description}
                gitLink={proj.gitLink}
                deployLink={proj.deployLink}
                title={proj.title}
                active={proj.title === activeProject}
                setActiveHandle={setActiveHandle}
              />
            ))}
          </div>
          <div style={{ height: '80px' }} />
        </div>
      </section>
    </Fade>
  );
};

export default Projects;
