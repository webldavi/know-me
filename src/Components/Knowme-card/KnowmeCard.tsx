import "./KnowmeCard.css";
import profileImg from "../../assets/photo.jpg";
import githubImg from "../../assets/github.svg";
import emailImg from "../../assets/email.svg";
import instagramImg from "../../assets/instagram.svg";
import docImg from "../../assets/doc.svg";
import devtoImg from "../../assets/devto.svg";
import linkedinImg from "../../assets/linkedin.svg";

export default function KnowmeCard() {


  const content = 'export default {\n    "nome": "Luís Daví Rebouças",\n    "desc": `Oi, eu sou o Luís Daví e tenho 19 anos.\n    Sou apaixonado por tecnologia e estou sempre buscando\n    me atualizar na área de engenharia de software.\n    Sou autodidata e estou sempre pronto para aprender mais.`,\n    "idade": 19\n  }'

  const url = `https://n0d3rr-sh.vercel.app/#/editor/material-ocean/js?disable=true&text=${encodeURIComponent(content)}&line=true`

  return (
    <div className="knowmecard-container">
      <div className="bg-gradient">
        <div>
          <img src={profileImg} alt="my profile image" draggable="false" />
        </div>
      </div>
      <div className="knowmecard-text">
        <span className="pl-2">Sobre mim</span>
        <iframe className="knowme-info" src={url}></iframe>
        <div className="contacts pl-2">
          <div
            onClick={() => {
              window.open("/Luis_Davi_Rebouças.pdf", "_blank");
            }}
          >
            <img src={docImg} alt="" />
            <div className="tooltip">
              <div>
                <div></div>
              </div>
              <p>Currículo</p>
            </div>
          </div>
          <div
            onClick={() => {
              window.open("mailto:luisdavi.contato@gmail.com", "_blank");
            }}
          >
            <img src={emailImg} alt="" />
            <div className="tooltip">
              <div>
                <div></div>
              </div>
              <p>Email</p>
            </div>
          </div>
          <div
            onClick={() => {
              window.open("https://www.linkedin.com/in/luisdav1/", "_blank");
            }}
          >
            <img src={linkedinImg} alt="linkedin" />
            <div className="tooltip">
              <div>
                <div></div>
              </div>
              <p>Linkedin</p>
            </div>
          </div>
          <div
            onClick={() => {
              window.open("https://github.com/webldavi", "_blank");
            }}
          >
            <img src={githubImg} alt="" />
            <div className="tooltip">
              <div>
                <div></div>
              </div>
              <p>Github</p>
            </div>
          </div>
          <div
            onClick={() => {
              window.open("https://dev.to/webdavi", "_blank");
            }}
          >
            <img src={devtoImg} alt="" />
            <div className="tooltip">
              <div>
                <div></div>
              </div>
              <p>Blog - dev.to</p>
            </div>
          </div>
          <div
            onClick={() => {
              window.open("https://instagram.com/lu1s.dev", "_blank");
            }}
          >
            <img src={instagramImg} alt="" />
            <div className="tooltip">
              <div>
                <div></div>
              </div>
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
