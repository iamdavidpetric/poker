import PropTypes from "prop-types";

const Button = ({
  className,
  disabled,
  iconLeft,
  iconRight,
  label,
  onClick,
}) => {
  return (
    <button
      className={`flex items-center px-2 transition-all duration-300  ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {iconLeft}
      {label}
      {iconRight}
    </button>
  );
};

Button.defaultProps = {
  className: "",
  disabled: false,
  iconLeft: undefined,
  iconRight: undefined,
  label: "",
  onClick: () => {},
};

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  iconLeft: PropTypes.any,
  iconRight: PropTypes.any,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
};

export default Button;
