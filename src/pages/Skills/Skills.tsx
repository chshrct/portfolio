import { FC } from 'react';

import cs from '../../common/styles/Container.module.scss';

import Skill from './Skill/Skill';
import s from './Skills.module.scss';

const Skills: FC = () => {
  return (
    <section className={s.skillsBlock}>
      <div className={`${cs.container} ${s.skillsContainer}`}>
        <h2 className={s.title}>Skills</h2>
        <div className={s.skills}>
          <Skill
            title="HTML"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, libero asperiores "
          />
          <Skill
            title="CSS"
            description="nam quis consequatur, quia tenetur amet vero incidunt "
          />
          <Skill title="JS" description="harum eveniet, quasi ea! Eaque " />
          <Skill title="React" description="fugiat magni ea " />
          <Skill title="Redux" description="voluptates dolorem mollitia." />
        </div>
      </div>
    </section>
  );
};

export default Skills;