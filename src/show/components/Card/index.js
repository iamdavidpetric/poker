import PropTypes from "prop-types";

const Card = ({
  fullname,
  matches,
  profit,
  rebuy,
  secondPace,
  wins,
  onClick,
  className,
}) => {
  return (
    <div
      className={`flex items-center justify-between bg-slate-800 rounded-lg h-10 px-4 my-1 border-white border hover:bg-slate-600 transition duration-300 text-white ${className}`}
      onClick={onClick}
    >
      <div className="w-1/6">{fullname}</div>
      <div className="w-1/6">{wins}</div>
      <div className="w-1/6">{secondPace}</div>
      <div className="w-1/6">{profit}</div>
      <div className="w-1/6">{rebuy}</div>
      <div className="mr-5">{matches}</div>
    </div>
  );
};

Card.defaultProps = {
  fullname: "",
  wins: "",
  secondPace: "",
  profit: "",
  rebuy: "",
  matches: "",
};

Card.propTypes = {
  fullname: PropTypes.string,
  wins: PropTypes.string,
  secondPace: PropTypes.string,
  profit: PropTypes.string,
  rebuy: PropTypes.string,
  matches: PropTypes.string,
};

export default Card;
