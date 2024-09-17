import CountryData from "../country_data/CountryData";

const CountryDetails = (props) => {
    // const{country,handleVisitedCountry,handleVisitedCountriesFlag} = props;
    return (
        <div>
            <h4>Country details : </h4>
            <hr />
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetails;