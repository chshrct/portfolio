import { FC } from 'react';

import { faBuildingColumns, faSuitcase } from '@fortawesome/free-solid-svg-icons';

import cs from '../../common/styles/Container.module.scss';

import s from './Resume.module.scss';
import { ResumeItem } from './ResumeSection/ResumeItem/ResumeItem';
import { ResumeSection } from './ResumeSection/ResumeSection';

import { RESUME_DATA } from 'App/state';
import { AccentButton } from 'common/components/AccentButton/AccentButton';
import { SectionHeading } from 'common/components/SectionHeading/SectionHeading';

const Fade = require('react-reveal/Fade');

export const Resume: FC = () => {
  return (
    <Fade fraction={0.05}>
      <section id="RESUME" className={s.resumeBlock}>
        <div className={`${cs.container} ${s.resumeContainer}`}>
          <div style={{ height: '50px' }} />
          <SectionHeading title="RESUME" />
          <div style={{ height: '25px' }} />
          <div className={s.resume}>
            <p>
              I am a former professional esports player with extensive teamwork experience
              in achieving high results. Since the beginning of 2022, I have been actively
              studying frontend development, both independently and in specialized
              courses. During this time I learned how to create SPA applications using
              React / Redux / TypeScript and I keep improving my skills every day.
            </p>
            <div className={s.sectionsContainer}>
              <ResumeSection title="Experience" icon={faSuitcase}>
                {RESUME_DATA.expirience.map(item => (
                  <ResumeItem
                    key={item.id}
                    date={item.date}
                    description={item.description}
                    place={item.place}
                    position={item.position}
                  />
                ))}
              </ResumeSection>
              <ResumeSection title="Education" icon={faBuildingColumns}>
                {RESUME_DATA.education.map(item => (
                  <ResumeItem
                    key={item.id}
                    date={item.date}
                    description={item.description}
                    place={item.place}
                    position={item.position}
                  />
                ))}
              </ResumeSection>
            </div>
            <div style={{ height: '25px' }} />
            <a
              href="https://drive.google.com/file/d/1s4DM9F-QDb9fd9M-WbztMa2ZwyLrxHXl/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <AccentButton>CV</AccentButton>
            </a>
          </div>
          <div style={{ height: '80px' }} />
        </div>
      </section>
    </Fade>
  );
};
