import { faReact, faHtml5, faJs, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faNetworkWired, faFlaskVial } from '@fortawesome/free-solid-svg-icons';

import learningBg from '../assets/images/learning.jpg';
import portfolioBg from '../assets/images/portfolio.png';
import socialBg from '../assets/images/social.png';
import tasksBg from '../assets/images/tasks.png';
import todolistBg from '../assets/images/todolist.png';

export const SKILLS_DATA = [
  {
    icon: faHtml5,
    title: 'HTML+CSS/SCSS',
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

export const PROJECTS_DATA = [
  {
    title: 'Learning Cards',
    description: 'some text here',
    backgroundImage: learningBg,
    gitLink: 'https://github.com/chshrct/cards',
    deployLink: 'https://chshrct.github.io/cards/',
  },
  {
    title: 'Todolist',
    description: 'some text here',
    backgroundImage: todolistBg,
    gitLink: 'https://github.com/chshrct/todolist',
    deployLink: 'https://chshrct-todolist.herokuapp.com/',
  },
  {
    title: 'Social Network',
    description: 'some text here',
    backgroundImage: socialBg,
    gitLink: 'https://github.com/chshrct/social-network',
  },
  {
    title: 'Portfolio',
    description: 'some text here',
    backgroundImage: portfolioBg,
    gitLink: 'https://github.com/chshrct/portfolio',
  },
  {
    title: 'Tasks IT-incubator',
    description: 'some text here',
    backgroundImage: tasksBg,
    gitLink: 'https://github.com/chshrct/hw-ignat',
    deployLink: 'https://chshrct.github.io/hw-ignat/#/pre-junior',
  },
];
