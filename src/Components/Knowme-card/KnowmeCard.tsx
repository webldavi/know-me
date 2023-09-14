import "./KnowmeCard.css";
import profileImg from "../../assets/photo.jpg";
import githubImg from "../../assets/github.svg";
import emailImg from "../../assets/email.svg";
import instagramImg from "../../assets/instagram.svg";
import docImg from "../../assets/doc.svg";
import devtoImg from "../../assets/devto.svg";
import linkedinImg from "../../assets/linkedin.svg";

export default function KnowmeCard() {
  return (
    <div className="knowmecard-container">
      <div className="bg-gradient">
        <div>
          <img src={profileImg} alt="my profile image" draggable="false" />
        </div>
      </div>
      <div className="knowmecard-text">
        <span>Sobre mim</span>
        <div className="knowme-info">
          <p>
            Oi, eu sou o Luís Daví e tenho 19 anos. Sou apaixonado por
            tecnologia e estou sempre buscando me atualizar na área de
            engenharia de software. Sou autodidata e estou sempre pronto para
            aprender mais.
          </p>
        </div>
        <div className="contacts">
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
