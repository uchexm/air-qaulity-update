import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { TbArrowForwardUp } from "react-icons/tb";

const Country = ({ id, country, countryCode }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/statistics/${country}`);
  };

  return (
    <li className="country">
      <TbArrowForwardUp
        id={id}
        name={country}
        onClick={handleClick}
        className="forward"
      />
      <p className="countryName">{country}</p>
      <p className="countryCode">{countryCode}</p>
    </li>
  );
};

Country.propTypes = {
  id: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired,
};

export default Country;
