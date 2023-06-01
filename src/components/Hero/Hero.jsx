import Button from "../Button/Button";
import "./Hero.css";
import PropTypes from "prop-types";

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

Hero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Hero;
