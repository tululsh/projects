import { useEffect, useState } from "react";
import './App.css';
import Search from './components/search/Search';
import Countries from './components/countries/Countries';


function App() {
  // Setting the states
  // "countries" does not change 
  // We use filter based on "countries" and set it on results

  const [countries, setCountries] = useState([]);
  const [results, setResults] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  // Fetching data from the API

  async function fetchData() {
    try {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      // after fetching we assign both states with the data
      // this is made so the mapping through results will render the full
      // list of countries on the first render
      setCountries(data); 
      setResults(data); 
    } catch (err) {
      console.log(err);
    }
  }

  // We call the fetchData function on component's mount once.

  useEffect(() => {
    fetchData();
  }, []);

  // a function that filters through the array of countries and set it to "results"

  function filterCountries(searchParam) {
    let results = countries.filter((country) =>
      country.name.toLowerCase().includes(searchParam.toLowerCase())
    );
    setResults(results);
  }

  return (
    <div className="App">
      {/* We pass the function "filterCountries" to "Search" as a prop */}
      <Search filterCountries={filterCountries} />
      <div className="country-container">
        {/* We map through "results" */}
        {results.map((country) => (
          <Countries key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;