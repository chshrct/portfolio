import {
  faDiscord,
  faGithub,
  faHtml5,
  faJs,
  faLinkedin,
  faReact,
  faSkype,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import {
  faFlaskVial,
  faLocation,
  faMailBulk,
  faNetworkWired,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

import learningBg from '../assets/images/learning.jpg';
import portfolioBg from '../assets/images/portfolio.png';
import socialBg from '../assets/images/social.png';
import tasksBg from '../assets/images/tasks.png';
import todolistBg from '../assets/images/todolist.png';

export const SOCIAL_DATA = [
  {
    id: 1,
    title: 'LinkedIn',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/eugene-kostroma-1078b7201/',
    style: { paddingLeft: '10px' },
  },
  {
    id: 2,
    title: 'Github',
    icon: faGithub,
    url: 'https://github.com/chshrct',
  },
  {
    id: 3,
    title: 'Telegram',
    icon: faTelegram,
    url: 'https://t.me/chshrct',
  },
];

export const RESUME_DATA = {
  expirience: [
    {
      id: 1,
      position: 'Professional Dota player/coach',
      date: 'September 2013 - may 2022',
      place: 'Winstrike',

      description: (
        <>
          <p>
            Since 2013 I had been a professional Dota 2 player in such teams as Power
            Rangers, Gambit, Winstrike, Team Unique and others. In most teams, I acted as
            captain. I also have a lot of experience as a coach.
          </p>
          <div style={{ height: '50px' }} />
        </>
      ),
    },
    {
      id: 2,
      position: 'Fullstack developer',
      date: 'March 2013 - september 2013',
      place: 'MIgroupMedia',
      description: (
        <p>I developed a landing page for an educational project from scratch.</p>
      ),
    },
  ],
  education: [
    {
      id: 1,
      position: 'Trainee',
      date: '2022',
      place: 'IT-incubator',

      description: (
        <>
          <p>
            The training program included: TypeScript, React, Redux-Toolkit, React-Query,
            Storybook, Unit Tests, REST API, WebSocket, HTML/CSS/JS knowledge development,
            back-end basics
          </p>
          <div style={{ height: '50px' }} />
        </>
      ),
    },
    {
      id: 2,
      position: 'Electronic engineer-programmer',
      date: '2008-2013',
      place: 'Belarusian State University of Informatics and Radioelectronics',
    },
  ],
};

export const SKILLS_DATA = [
  {
    id: 1,
    icon: faHtml5,
    title: 'HTML5+CSS3/SCSS',
    description: (
      <p>
        I have experience in cross-browser, Pixel Perfect, adaptive, responsive
        development using latest HTML5, CSS3 standards and CSS-preprocessors features.
      </p>
    ),
  },
  {
    id: 2,
    icon: faJs,
    title: 'JS/Typescript',
    description: (
      <p>
        I&apos;m studying how to create clean, maintainable, scalable code using ES6 and
        Typescript typization. I got sertification of
        <span>
          <a
            href="https://www.freecodecamp.org/certification/fcc8eaa88a5-c5ba-4bb9-a284-8d91f7164000/javascript-algorithms-and-data-structures"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;FreeCodeCamp&nbsp;
          </a>
        </span>
        , my free time is dedicated to
        <a href="https://www.codewars.com/users/chshrct" target="_blank" rel="noreferrer">
          &nbsp;Codewars&nbsp;
        </a>
        . Also I&apos;m a fan of YDKJS book series.
      </p>
    ),
  },
  {
    id: 3,
    icon: faReact,
    title: 'REACT+REDUX',
    description: (
      <p>
        I have experience in writing SPA using React, both with class and functional
        approach, for UI layer and Redux/Redux-toolkit, using thunk for asynchronous
        actions, for BLL as state manager.
      </p>
    ),
  },
  {
    id: 4,
    icon: faNetworkWired,
    title: 'HTTP+REST API',
    description: (
      <p>
        I developed data access layer for my apps using REST API and tested them with
        tools like Postman and Thunder Client
      </p>
    ),
  },
  {
    id: 5,
    icon: faFlaskVial,
    title: 'JEST+TDD',
    description: (
      <p>
        I used TDD as software development cycle that focusses on describing the behaviour
        of code first using tests, then implementing those behaviours. I have expirience
        in creating Unit tests, Snapshot tests, component views in Storybook.
      </p>
    ),
  },
  {
    id: 6,
    icon: faGithub,
    title: 'Git+Github',
    description: (
      <p>
        I have development experience of team projects using Github as hosting platform
        for version control and collaboration.
      </p>
    ),
  },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Learning Cards',
    description:
      'SPA for creating packs of training cards and learning from them. An educational team project created by a team of 4 people. Stack: Typescript/CSS, React, redux/thunk, router, REST, etc.',
    backgroundImage: learningBg,
    gitLink: 'https://github.com/chshrct/cards',
    deployLink: 'https://chshrct.github.io/cards/',
  },
  {
    id: 2,
    title: 'Todolist',
    description:
      'Todolist SPA. A training project that implements a full BLL/DALL/UI workflow based on TDD(unit and snapshot tests). Stack:Typescript/CSS, React, redux-toolkit/thunk, router, REST, JEST, MaterialUI, storybook, etc.',
    backgroundImage: todolistBg,
    gitLink: 'https://github.com/chshrct/todolist',
    deployLink: 'https://chshrct-todolist.herokuapp.com/',
  },
  {
    id: 3,
    title: 'Social Network',
    description:
      'Social network SPA. A training project that uses both a functional and a class approach in React for practice. Stack: Typescript/CSS, React, redux-toolkit/thunk, router, REST, axios, formik, etc.',
    backgroundImage: socialBg,
    gitLink: 'https://github.com/chshrct/social-network',
  },
  {
    id: 4,
    title: 'Portfolio',
    description:
      'Portfolio SPA. Fully responsive. Stack: Typescript/SCSS, React, axios, fontawesome, NodeJs, Express, Nodemailer for SMTP, etc.',
    backgroundImage: portfolioBg,
    gitLink: 'https://github.com/chshrct/portfolio',
  },
  {
    id: 5,
    title: 'Tasks IT-incubator',
    description:
      'Tasks SPA. Training project for solving problems from IT-incubator courses. Basically creating reusable components.',
    backgroundImage: tasksBg,
    gitLink: 'https://github.com/chshrct/hw-ignat',
    deployLink: 'https://chshrct.github.io/hw-ignat/#/pre-junior',
  },
];

export const CONTACTS_DATA = [
  {
    id: 1,
    icon: faMailBulk,
    title: 'Email',
    description: <a href="mailto:eugene.kostroma@gmail.com">eugene.kostroma@gmail.com</a>,
    style: { paddingLeft: '6px' },
  },
  {
    id: 2,
    icon: faPhone,
    title: 'Phone',
    description: (
      <>
        <a href="tel:+995 595126653">+995 595126653</a>
        <a href="tel:+375 293372761">+375 293372761</a>
      </>
    ),
  },
  {
    id: 3,
    icon: faLocation,
    title: 'Location',
    description: 'Tbilisi, Georgia',
    style: { paddingLeft: '8px' },
  },
];

export const FOOTER_DATA = [
  {
    id: 1,
    title: 'LinkedIn',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/eugene-kostroma-1078b7201/',
    style: { paddingLeft: '10px' },
  },
  {
    id: 2,
    title: 'Telegram',
    icon: faTelegram,
    url: 'https://t.me/chshrct',
  },
  {
    id: 3,
    title: 'Skype',
    icon: faSkype,
    url: 'https://join.skype.com/invite/z34sn90zGli5',
    style: { paddingLeft: '10px' },
  },
  {
    id: 4,
    title: 'Discord',
    icon: faDiscord,
    url: 'https://discord.com/users/184391496429076482',
    style: { paddingLeft: '4px' },
  },
];
