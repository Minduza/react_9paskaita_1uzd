import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ image, alt, title }) => {
  return (
    <div className="card">
      <div className="imgContainer">
        <img className="cardImg" src={image} alt={alt} />
      </div>
      <div className="cardTitle">
        <span>{title}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
};

export default Card;
