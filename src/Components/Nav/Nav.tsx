import NavLink from "../Nav-link/NavLink";
import "./Nav.css";

export default function Nav() {
  function goToSection(sectionNumber: number) {
    window.scrollBy({
      top: sectionNumber, // could be negative value
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <nav className="nav">
      <div className="brand">
        <h1>Luís Daví</h1>
        <span>Desenvolvedor Front-end</span>
      </div>
      <div className="navigator">
        <NavLink onClick={() => goToSection(0)}>Inicio</NavLink>
        <NavLink onClick={() => goToSection(650)}>Sobre mim</NavLink>
        <NavLink onClick={() => goToSection(1600)}>Projetos</NavLink>
        <NavLink onClick={() => goToSection(3000)}>Habilidades</NavLink>
      </div>
    </nav>
  );
}
