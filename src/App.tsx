import "./App.css";
import Nav from "./Components/Nav/Nav";
import Welcome from "./sections/Welcome/Welcome";
import Knowme from "./sections/Knowme/Knowme";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Blog from "./sections/Blog/Blog";
import Certificates from "./sections/Certificates/Certificates";
import Load from "./Components/Load/Load";
import { useEffect, useCallback, useState } from "react";

export default function App() {


  const [time, setTime] = useState(0);

  const callback = useCallback(() => {
    function load() {
      const timeout = setTimeout(() => {
        setTime(time + 1);
      }, 2000 / 100);

      if (time >= 100) {
        clearTimeout(timeout);
      }
    }
    load();
  }, [time]);

  useEffect(() => {
    callback();
  }, [callback]);
  return (
    <>
      {time >= 100 ? (
        <>
          <Nav />
          <main className="main">
            <Welcome />
            <Knowme />
            <Projects />
            <Certificates />
            <Blog />
            <Skills />
            <footer className="footer">
              Portifólio desenvolvido com 💙 por Luís daví
            </footer>
          </main>
        </>
      ) : (
        <Load time={time}/>
      )}
    </>
  );
}
