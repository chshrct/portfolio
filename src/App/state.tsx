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

export const SKILLS_DATA = [
  {
    id: 1,
    icon: faHtml5,
    title: 'HTML+CSS/SCSS',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, molestias?',
  },
  {
    id: 2,
    icon: faJs,
    title: 'JS/Typescript',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, molestias?',
  },
  {
    id: 3,
    icon: faReact,
    title: 'REACT+REDUX',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, molestias?',
  },
  {
    id: 4,
    icon: faNetworkWired,
    title: 'HTTP+REST API',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, molestias?',
  },
  {
    id: 5,
    icon: faFlaskVial,
    title: 'JEST+TDD',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, molestias?',
  },
  {
    id: 6,
    icon: faGithub,
    title: 'Git+Github',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, molestias?',
  },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Learning Cards',
    description:
      'SPA for creating packs of training cards and learning from them. An educational team project created by a team of 4 people. Stack: React, redux/thunk, router, REST, etc.',
    backgroundImage: learningBg,
    gitLink: 'https://github.com/chshrct/cards',
    deployLink: 'https://chshrct.github.io/cards/',
  },
  {
    id: 2,
    title: 'Todolist',
    description:
      'SPA todolist. A training project that implements a full BLL/DALL/UI workflow based on TDD(unit and snapshot tests). Stack: React, redux-toolkit/thunk, router, REST, JEST, MaterialUI, storybook, etc.',
    backgroundImage: todolistBg,
    gitLink: 'https://github.com/chshrct/todolist',
    deployLink: 'https://chshrct-todolist.herokuapp.com/',
  },
  {
    id: 3,
    title: 'Social Network',
    description:
      'SPA social network. A training project that uses both a functional and a class approach in React for practice. Stack: React, redux-toolkit/thunk, router, REST, axios, formik, etc.',
    backgroundImage: socialBg,
    gitLink: 'https://github.com/chshrct/social-network',
  },
  {
    id: 4,
    title: 'Portfolio',
    description: 'some text here',
    backgroundImage: portfolioBg,
    gitLink: 'https://github.com/chshrct/portfolio',
  },
  {
    id: 5,
    title: 'Tasks IT-incubator',
    description: 'some text here',
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
