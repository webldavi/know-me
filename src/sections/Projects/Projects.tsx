import { useState } from "react";
import ProjectCard from "../../Components/Project-card/ProjectCard";
import "./Projects.css";
import ProjectsList from "../../json/ProjectsList";
export default function Projects() {
    const [countProjects, setCountProjects] = useState(3);
    const [textProjects, setTextProjects] = useState("Ver mais");

    function updateCountProjects() {
        setCountProjects(
            countProjects == ProjectsList.length - 1
                ? 3
                : ProjectsList.length - 1
        );
        setTextProjects(
            countProjects == ProjectsList.length - 1 ? "Ver mais" : "Ver menos"
        );
    }
    return (
        <section className="projects-section" id="projects">
            <h1>#Projetos</h1>
            <div className="projectList">
                {ProjectsList.map((p, index) => {
                    return (
                        index <= countProjects && (
                            <ProjectCard
                                key={index}
                                name={p.name}
                                desc={p.desc}
                                link={p.link}
                                nameFile={p.nameFile}
                            />
                        )
                    );
                })}
            </div>
            <button onClick={updateCountProjects}>{textProjects}</button>
        </section>
    );
}
