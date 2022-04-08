import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";

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
