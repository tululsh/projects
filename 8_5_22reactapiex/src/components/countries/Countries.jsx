import "../countries/countries.css";

export default function Countries ({country}){
  return (
    <div className="country" key={country.name}>
      <div className="data">
      <div className="country-flag">
        <img src={country.flags.svg}
        alt={`${country.name}'s flag`}></img>
      </div>
      <h3 className="country-name">{country.name.toUpperCase()}</h3>
      <div className="country-text">
        <p>Capital: {country.capital}</p>
        <p>Languages: {country.languages[0].name}</p>
        <p>Population: {country.population}</p>
        <p>Currency:</p>
        </div>
      </div>
    </div>
  );
}

