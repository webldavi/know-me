import "./Certificates.css";
import discover from '../../assets/discover.png'
import nlwia from "../../assets/nlwia.png"

export default function Certificates() {
    const certificatesList = [
        {
            src: discover
        },
        {
            src: nlwia
        }
    ]
    return (
        <section id="certificate" className="certificateContainer">
            <h1>#Certificados</h1>
            <div className="list">
                {
                    certificatesList.map((certificate, i)=>{
                        return <img className="certificate" src={certificate.src} key={i}/>
                    })
                }
            </div>
        </section>
    );
}
