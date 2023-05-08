import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import styles from "./styles/App.module.scss";
const App = () => {
  return (
    <div className={`bg-primary ${styles.container}`}>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
