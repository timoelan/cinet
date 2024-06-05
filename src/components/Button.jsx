import PropTypes from "prop-types";

const Button = ({ text, onClick, autofocus, id }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white p-4 fs-1 fw-bold w-100"
      autoFocus={autofocus}
      id={id}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  autofocus: PropTypes.bool,
  id: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  autofocus: false, // Default value for autofocus prop
};

export default Button;
