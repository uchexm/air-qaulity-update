/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiSearch } from 'react-icons/bi';
import { fetchData } from '../redux/countries/countries';
import Country from './country';

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchData());
    }
  }, [countries.length, dispatch]);

  return (
    <div className="countries">
      <h1>COUNTRIES</h1>
      <div className="searchInput">
        <input
          type="text"
          placeholder="Search name..."
          aria-label="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="searchIcon">
          <BiSearch />
        </div>
      </div>
      <ul className="countriesList">
        {
          // eslint-disable-next-line consistent-return
          countries
            .filter((element) => {
              if (search === '') {
                return element;
              }
              if (
                element.Country.toLowerCase().includes(search.toLowerCase())
              ) {
                return element;
              }
            })
            .map((country) => (
              <Country
                key={country.ID}
                id={country.ID}
                details={country}
                country={country.Country}
                countryCode={country.CountryCode}
              />
            ))
        }
      </ul>
    </div>
  );
};

export default Countries;
