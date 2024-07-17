import About from "./components/About";
import ExperienceSection from "./components/Experience/ExperienceSection";
import HomeSection from "./components/HomeSection";
import CustomNavBar from "./components/NavBar";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <CustomNavBar />
      <HomeSection />
      <About />
      <Skills />
      <ExperienceSection />
    </>
  );
}

export default App;
