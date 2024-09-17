const CountryData = (props) => {
    const {country} = props;
    return (
        <div>
            <small>Country data : {country.name.common}</small>
        </div>
    );
};

export default CountryData;