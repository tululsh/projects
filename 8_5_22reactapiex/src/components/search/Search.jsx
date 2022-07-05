import "../search/search.css";

export default function Search({ filterCountries }) {
    return (
      <div className="header-container">
        <div className="head-country">
        <h1>World Countries Data</h1>
       <p>Currently, we have 250 countries</p>
       </div>
       <div className="search-country">
          <input
          // we invoke the filterCountries function with the input's value
          // as the argument on the input's change event
            onChange={(e) => filterCountries(e.target.value)}
            type="text"
            name=""
            placeholder="Search countries by name, city and languages"
          />
        </div>
      </div>
    );
  }