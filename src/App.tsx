import "./App.css";
import Nav from "./Components/Nav/Nav";
import Welcome from "./sections/Welcome/Welcome";
import Knowme from "./sections/Knowme/Knowme";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Blog from "./sections/Blog/Blog";
import Certificates from "./sections/Certificates/Certificates";
import Load from "./Components/Load/Load";
import {useState } from "react";

export default function App() {


  const [time, setTime] = useState(0);
  window.addEventListener("load", ()=>{
    setTime(100)
  })
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
