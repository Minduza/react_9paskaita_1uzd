import "./Card.css";

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

export default Card;
