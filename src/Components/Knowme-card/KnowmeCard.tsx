import "./KnowmeCard.css";
import profileImg from "../../assets/photo.jpg";
import githubImg from "../../assets/github.svg";
import emailImg from "../../assets/email.svg";
import instagramImg from "../../assets/instagram.svg";
import docImg from "../../assets/doc.svg";

export default function KnowmeCard() {
  return (
    <div className="knowmecard-container">
      <div className="bg-gradient">
        <div>
          <img src={profileImg} />
        </div>
      </div>
      <div className="knowmecard-text">
        <h1>Sobre mim</h1>
        <div className="knowme-info">
          <p>
            Oi, eu sou o Luís Daví e tenho 19 anos. Sou apaixonado por
            tecnologia e estou sempre buscando me atualizar na área de
            engenharia de software. Sou autodidata e estou sempre pronto para
            aprender mais.
          </p>
        </div>
        <div className="contacts">
          <div onClick={(e) => {
                window.location.href = "/Luis_Davi_Rebouças.pdf";
              }}>
            <img src={docImg} alt="" />
          </div>
          <div onClick={(e) => {
                window.location.href = "https://github.com/webldavi";
              }}>
            <img src={githubImg} alt="" />
          </div>
          <div onClick={(e) => {
                window.location.href = "mailto:luisdavi.contato@gmail.com";
              }}>
            <img src={emailImg} alt="" />
          </div>
          <div onClick={(e) => {
                window.location.href = "https://instagram.com/lu1s.dev";
              }}>
            <img src={instagramImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
