import "./App.css";

import Nav from "./Components/Nav/Nav";
import Welcome from "./sections/Welcome/Welcome";
import Knowme from "./sections/Knowme/Knowme";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Blog from "./sections/Blog/Blog";
export default function App() {
    return (
        <>
            <Nav />
            <div className="backgroundImage"></div>
            <main className="main">
                <Welcome />
                <Knowme />
                <Projects />
                <Blog />
                <Skills />
            </main>
            <footer className="footer">Portifólio desenvolvido com 💙 por Luís daví</footer>
        </>
    );
}
