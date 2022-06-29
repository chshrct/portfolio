import { FC } from 'react';

import cs from '../../common/styles/Container.module.scss';

import Skill from './Skill/Skill';
import s from './Skills.module.scss';

import { SKILLS_DATA } from 'App/state';
import { SectionHeading } from 'common/components/SectionHeading/SectionHeading';

const Skills: FC = () => {
  return (
    <section id="SKILLS" className={s.skillsBlock}>
      <div className={`${cs.container} ${s.skillsContainer}`}>
        <div style={{ height: '50px' }} />
        <SectionHeading title="SKILLS" />
        <div style={{ height: '25px' }} />
        <div className={s.skills}>
          {SKILLS_DATA.map(skill => (
            <Skill
              key={skill.id}
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
