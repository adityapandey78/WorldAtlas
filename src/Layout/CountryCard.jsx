import React from 'react'
import { NavLink } from 'react-router-dom';

const CountryCard = ({country}) => {
    const{flags,name,population,region,capital,landlocked,car}=country;
  return (
    <li className='country-card card'>
        <div className="container-card bg-white-box">
            <img src={flags.svg} alt={flags.alt} />
            <div className="countryInfo">
                <div className="card-title">
                    {name.common.length >20
                    ? name.common.slice(0,20)+"..."
                    : name.common}</div>
                <p>
                    <span className="card-description">Population: </span>
                    {population.toLocaleString()}
                </p>
                <p>
                    <span className="card-description">Region: </span> {region}
                </p>
                <p>
                    <span className="card-description">Capital: </span>
                    {capital[0]}
                </p>
                <p>
                    <span className="card-description">Landlocked: </span>
                    {landlocked ? "Yes" : "No"}
                </p>
                {/* <p>
                    <span className="card-description">Car Driving Side: </span>
                    {car.side}
                </p> */}
                <button className='button'>
                    <NavLink to={`/country/${name.common}`}>
                    <span country-btn-text>Read More...</span>
                    </NavLink>
                    </button>
            </div>
        </div>
    </li>
  )
}

export default CountryCard