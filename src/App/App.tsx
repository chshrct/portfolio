import { FC } from 'react';

import Footer from '../common/components/Footer/Footer';
import Header from '../common/components/Header/Header';
import Contacts from '../pages/Contacts/Contacts';
import Main from '../pages/Main/Main';
import Projects from '../pages/Projects/Projects';
import Skills from '../pages/Skills/Skills';

import s from './App.module.scss';

const App: FC = () => (
  <div className={s.App}>
    <Header />
    <Main />
    <Skills />
    <Projects />
    <Contacts />
    <Footer />
  </div>
);

export default App;
