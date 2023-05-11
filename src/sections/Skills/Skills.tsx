import "./Skills.css";
import SkillsList from "./SkillsList";
export default function Skills() {
  return (
    <section className="skills">
      <h1>#Habilidades</h1>
      <div className="SkillsContainer">
        {SkillsList.map((s, index) => {
          return (
            <div>
              <img src={s.link} key={index} alt={s.skillName} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
