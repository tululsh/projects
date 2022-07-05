import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Algolia() {
  // set search term //
  const [term, setTerm] = useState("");

  // set data from the api //
  const [data, setData] = useState([]);

  // set loading for each time I search something //
  const [loading, setLoading] = useState(false);

  // set error if something accures in the search //
  const [error, setError] = useState(false);

  const fetchApi = async (searchTerm) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${searchTerm}`
      );
      console.log(data);
      setData(data.hits);
      setLoading(false);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    fetchApi();
  },[]);


  const RenderAlgolia = () => {
    if (data.length) {
      return (
        <div>
          {data.map((result) => (
            <div key={result.objectID}>
               <h1>
              {result.author}
            </h1>
              <a href={result.url}>{result.title}</a>
            </div>
            
          ))}
         
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="main-container">
      {!loading && !error && (
        <div>
          <input
            onChange={(event) => setTerm(event.target.value)}
            type="text"
          />
          <button onClick={()=> fetchApi(term)}>Search</button>
          <RenderAlgolia/>

        </div>
        
      )}
    </div>
  );
}
