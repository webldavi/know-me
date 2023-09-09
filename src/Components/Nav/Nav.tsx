import { useState } from "react";
import NavLink from "../Nav-link/NavLink";
import "./Nav.css";

export default function Nav() {
  const [drawer, setDrawer] = useState(false);
  function goToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
  function openDrawer() {
    setDrawer(!drawer);
  }

  return (
    <header className="nav">
      <div className="brand">
        <h1>Luís Daví</h1>
        <h2>Desenvolvedor Front-end</h2>
      </div>
      <nav className="navigator">
        <NavLink onClick={() => goToSection("welcome")}>Inicio</NavLink>
        <NavLink onClick={() => goToSection("knowme")}>Sobre mim</NavLink>
        <NavLink onClick={() => goToSection("projects")}>Projetos</NavLink>
        <NavLink onClick={() => goToSection("blog")}>Blog</NavLink>
        <NavLink onClick={() => goToSection("certificate")}>Certificados</NavLink>
        <NavLink onClick={() => goToSection("skills")}>Habilidades</NavLink>
      </nav>
      <button onClick={() => openDrawer()} type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        Menu
      </button>
      <aside data-opacity={drawer}>
        <nav className="navigatorMobile">
          <NavLink onClick={() => goToSection("welcome")}>Inicio</NavLink>
          <NavLink onClick={() => goToSection("knowme")}>Sobre mim</NavLink>
          <NavLink onClick={() => goToSection("projects")}>Projetos</NavLink>
          <NavLink onClick={() => goToSection("blog")}>Blog</NavLink>
          <NavLink onClick={() => goToSection("certificate")}>Certificados</NavLink>
          <NavLink onClick={() => goToSection("skills")}>Habilidades</NavLink>
        </nav>
      </aside>
    </header>
  );
}
