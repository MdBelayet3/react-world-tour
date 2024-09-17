import { useState } from 'react';
import './Country.css'
import CountryDetails from '../country_details/CountryDetails';
const Country = ({country,handleVisitedCountry,handleVisitedCountriesFlag}) => {
    // console.log(country);
    const {name,flags,area,capital,population,cca2} = country;

    const [visited, setVisited] = useState(false)
    
    const handleVisited = () =>{
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name : {name?.common}</h3>
            <img src={flags?.png} alt={flags.alt} />
            <h4>Population : {population}</h4>
            <h4>Area : {area}</h4>
            <h4>Capital : {capital}</h4>
            <h4>Code : {cca2}</h4>
            <button onClick={()=> handleVisitedCountry(country)} className='btn'>Mark Visited</button><br /><br />
            <button onClick={() =>handleVisitedCountriesFlag(country.flags.png)} className='btn'>Mark Flag</button><br /><br />
            <button onClick={handleVisited} className='btn'>{visited ? 'Visited' : 'Going'}</button><br />
            {
                visited ?  'I have visited this country' : 'I want to go'
            }
            <hr />
            <CountryDetails
             country={country} handleVisitedCountry={handleVisitedCountry} handleVisitedCountriesFlag={handleVisitedCountriesFlag}></CountryDetails>
        </div>
    );
};

export default Country;
