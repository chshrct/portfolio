import { FC } from 'react';

import cs from '../../common/styles/Container.module.scss';

import s from './Portfolio.module.scss';
import Project from './Project/Project';

const Portfolio: FC = () => {
  return (
    <section className={s.portfolioBlock}>
      <div className={`${cs.container} ${s.portfolioContainer}`}>
        <h2>Portfolio</h2>
        <div className={s.projects}>
          <Project
            title="counter"
            description="a person or thing that counts something… I would just tell them I am a very fast counter. — Judy Blume
especially : a device or process for indicating a number or amount a counter that records how many times a website is visited As they entered the main door on Fifth Avenue, the guard clicked off two numbers on his people counter."
          />
          <Project
            title="todolist"
            description="noun a list of things that one wants to get done or that need to get done: No, I haven’t bought the gift yet, but it’s on my to-do list."
          />
          <Project
            title="social network"
            description="a network of social interactions and personal relationships. a dedicated website or other application which enables users to communicate with each other by posting information, comments, messages, images, etc."
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
