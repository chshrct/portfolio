import Footer from "../common/components/Footer/Footer";
import Header from "../common/components/Header/Header";
import Contacts from "../pages/Contacts/Contacts";
import Main from "../pages/Main/Main";
import Portfolio from "../pages/Portfolio/Portfolio";
import Skills from "../pages/Skills/Skills";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Portfolio />
      <Contacts />
      <Footer />
    </div>
  );
};
export default App;
