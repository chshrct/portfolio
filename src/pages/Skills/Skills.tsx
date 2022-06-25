import { FC, useId } from 'react';

import { faReact, faHtml5, faJs, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faNetworkWired, faFlaskVial } from '@fortawesome/free-solid-svg-icons';

import cs from '../../common/styles/Container.module.scss';

import Skill from './Skill/Skill';
import s from './Skills.module.scss';

import { SectionHeading } from 'common/components/SectionHeading/SectionHeading';

const SKILLS_DATA = [
  {
    icon: faHtml5,
    title: 'HTML+CSS',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, molestias?',
  },
  {
    icon: faJs,
    title: 'JS/Typescript',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, molestias?',
  },
  {
    icon: faReact,
    title: 'REACT+REDUX',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, molestias?',
  },
  {
    icon: faNetworkWired,
    title: 'HTTP/REST API',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, molestias?',
  },
  {
    icon: faFlaskVial,
    title: 'JEST/TDD',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, molestias?',
  },
  {
    icon: faGithub,
    title: 'Git/Github',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, molestias?',
  },
];

const Skills: FC = () => {
  return (
    <section id="SKILLS" className={s.skillsBlock}>
      <div className={`${cs.container} ${s.skillsContainer}`}>
        <div style={{ height: '100px' }} />
        <SectionHeading title="SKILLS" />
        <div style={{ height: '25px' }} />
        <div className={s.skills}>
          {SKILLS_DATA.map(skill => (
            <Skill
              key={useId()}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </section>
  );
};

export default Skills;
