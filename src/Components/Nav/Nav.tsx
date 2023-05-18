import NavLink from "../Nav-link/NavLink";
import "./Nav.css";

export default function Nav() {
    function goToSection(sectionId: string) {
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
        });
    }

    return (
        <nav className="nav">
            <div className="brand">
                <h1>Luís Daví</h1>
                <span>Desenvolvedor Front-end</span>
            </div>
            <div className="navigator">
                <NavLink onClick={() => goToSection("welcome")}>Inicio</NavLink>
                <NavLink onClick={() => goToSection("knowme")}>
                    Sobre mim
                </NavLink>
                <NavLink onClick={() => goToSection("projects")}>
                    Projetos
                </NavLink>
                <NavLink onClick={() => goToSection("blog")}>Blog</NavLink>
                <NavLink onClick={() => goToSection("skills")}>
                    Habilidades
                </NavLink>
            </div>
        </nav>
    );
}
