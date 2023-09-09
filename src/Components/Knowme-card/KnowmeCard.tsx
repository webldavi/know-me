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
              window.location.href = "/Luis_Davi_Rebouças.pdf";
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
              window.location.href = "mailto:luisdavi.contato@gmail.com";
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
              window.location.href = "https://www.linkedin.com/in/luisdav1/";
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
              window.location.href = "https://github.com/webldavi";
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
              window.location.href = "https://dev.to/webdavi";
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
              window.location.href = "https://instagram.com/lu1s.dev";
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
