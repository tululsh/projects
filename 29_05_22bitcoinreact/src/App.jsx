import "./App.css";
import { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import Coin from "./component/Coin";

function App() {
  //state//
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState("");

  //useeffect//
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoin(res.data);
        console.log(res);
      });
  },[])
// a function that handles the .value method//
  const handleChange = (event)=>{
    setSearch(event.target.value);
  }
//filter+includs template//
let filteredCoins = coin.filter((i)=>{
return i.name.toLowerCase().includes(search.toLowerCase())
});
  return (
    <>
      <div className="coin-app">
        <div className="input-search">
          <input type='text' placeholder="Enter your coin" onChange={handleChange}></input>
        </div>
        {filteredCoins.map((result)=>{
return(
  <Coin
  name={result.name}
  price={result.current_price}
 image={result.image}
 pricechange={result.price_change_percentage_24h}
 marketcap={result.market_cap}

  />
)
        })}
      </div>
    </>
  );
}

export default App;
