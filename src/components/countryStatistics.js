import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { MdOutlineArrowBackIos } from 'react-icons/md';

const Statistics = () => {
  const navigate = useNavigate();
  const { country } = useParams();
  const details = useSelector((state) => state.countries);
  const countryDetails = details.filter((detail) => detail.Country === country);
  const {
    Country,
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
    Date,
  } = countryDetails[0];

  const handleClick = () => {
    navigate('/', { replace: true });
  };

  return (
    <article className="statContainer">
      <div className="returnContainer">
        <MdOutlineArrowBackIos className="statIcon" onClick={handleClick} />
      </div>
      <h1>COVID-19 STATISTICS</h1>
      <div className="groupedUpdate">
        {countryDetails && (
          <div className="update">
            <article className="headstyle">
              <h2 className="detailCountryName">{Country}</h2>
              <p className="detailsDate">
                Date and Time:&nbsp;
                <span className="statValue">{Date}</span>
              </p>
            </article>
            <section className="statDetails">
              <article className="new">
                <p className="statTitle">
                  Highs:&nbsp;
                  <span className="statValue">{NewConfirmed}</span>
                </p>
                <p className="statTitle">
                  Lows:&nbsp;
                  <span className="statValue">{NewRecovered}</span>
                </p>
                <p className="statTitle">
                  Wildfire:&nbsp;
                  <span className="statValue">{NewDeaths}</span>
                </p>
              </article>
              <article className="total">
                <p className="statTitle">
                  Good Weather: &nbsp;
                  <span className="statValue">{TotalConfirmed}</span>
                </p>
                <p className="statTitle">
                  Bad Weather: &nbsp;
                  <span className="statValue">{TotalDeaths}</span>
                </p>
                <p className="statTitle">
                  Position:&nbsp;
                  <span className="statValue">{TotalRecovered}</span>
                </p>
              </article>
            </section>
          </div>
        )}
      </div>
    </article>
  );
};

export default Statistics;
