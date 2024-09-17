import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {
    // useEffect hook and event handler for countries data load
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    // useState hook and event handler for display visited country name
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountry = (country) => {
        console.log('add this country')
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    // useState hook and event handler for display visited country flag
    const [visitedCountriesFlag, setVisitedCountriesFlag] = useState([]);

    const handleVisitedCountriesFlag = (flag) => {
        console.log('visited country flag');
        const newVisitedCountriesFlag = [...visitedCountriesFlag, flag];
        setVisitedCountriesFlag(newVisitedCountriesFlag);
    }

    return (
        <div>
            {/* display visited countries name */}
            <h2>Visited Countries : {visitedCountries.length} </h2>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca2}>{country.name.common}</li>)
                }
            </ol>

            {/* visited countries flag */}
            <h2>Visited countries flag : {visitedCountriesFlag.length}</h2>
            <div className="flag-container">
                {
                    visitedCountriesFlag.map((flag, idx) => <img key={idx} src={flag} alt="" />)
                }
            </div>

            {/* display country component */}
            <h3>Countries : {countries.length}</h3>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca2} handleVisitedCountry={handleVisitedCountry} handleVisitedCountriesFlag={handleVisitedCountriesFlag} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;