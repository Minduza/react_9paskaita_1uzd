import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ children, ...rest }) => {
  return (
    <button className="btn" {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
};

export default Button;
