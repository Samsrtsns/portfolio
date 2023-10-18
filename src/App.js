import { useEffect } from "react";
import Aos from "aos";

import "./App.css";
import Header from "./view/Header/Header";
import About from "./view/About/About";
import Service from "./view/Services/Service";
import Contact from "./view/Contact/Contact";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
  <>
    <Header/>
    <main>
      <About/>
      <Service/>
      <Contact/>
    </main>
  </>
  );
}

export default App;