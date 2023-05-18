import "./Skills.css";
import SkillsList from "./SkillsList";
export default function Skills() {
        return (<section className="skills">
            <h1>#Habilidades</h1>
            <div className="SkillsContainer">
                {
                SkillsList.map((s, index) => {
                            return(< div key = {
                                index
                            } > <img src={
                                    s.link
                                }
                                alt={
                                    s.skillName
                                }/>
                        </div>
                        );
                    }
                )
            } </div>
        </section>
    );
}
