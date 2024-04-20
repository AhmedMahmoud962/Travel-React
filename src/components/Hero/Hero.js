import "./Hero.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.backgroundImg} alt="BackgroundImg" />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a className={props.btnclass} href={props.url}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
