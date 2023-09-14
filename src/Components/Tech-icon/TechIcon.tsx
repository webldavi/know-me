import "./TechIcon.css"

interface props {
  name: string;
  file: string;
}

export default function TechIcon(props: props) {
  return (
    <div className="tech">
      <img
        src={props.file}
        alt={props.name}
        data-tooltip-name={props.name}
        draggable="false"
      />
      <div className="tooltip">
        <div>
          <div></div>
        </div>
        <p>{props.name}</p>
      </div>
    </div>
  );
}
