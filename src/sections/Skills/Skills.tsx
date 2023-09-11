import "./Skills.css";
import SkillsList from "../../json/SkillsList";
export default function Skills() {
    return (
        <section className="skills" id="skills">
            <h1>#Habilidades</h1>
            <div className="SkillsContainer">
                {SkillsList.map((s, index) => { 
                    return (
                        <div key={index} data-key={index + 1}>
                            {" "}
                            <img src={s.link} alt={s.skillName} data-tooltip-name={s.skillName} draggable="false"/>
                            <div className="tooltip">
                                <div>
                                    <div></div>
                                </div>
                                <p>{s.skillName}</p>
                            </div>
                        </div>
                    );
                })}{" "}
            </div>
        </section>
    );
}
