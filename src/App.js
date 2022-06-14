
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <TechStack />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
