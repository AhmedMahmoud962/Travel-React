import "./Destination.css";

function DestinationData(props) {
  return (
    <div className={props.cName}>
      <div className="des-text" style={{ alignItems: "flex-start" }}>
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
      <div className="image">
        <img src={props.image1} alt="img" />
        <img src={props.image2} alt="img" />
      </div>
    </div>
  );
}

export default DestinationData;
