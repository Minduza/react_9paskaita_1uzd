import Button from "../Button/Button";
import "./Hero.css";

const Hero = ({ title, description }) => {
  return (
    <div className="hero">
      <div className="heroText">
        <h1>{title}</h1>
        <p>{description}</p>
        <Button>START JOURNEY</Button>
      </div>
    </div>
  );
};

export default Hero;
