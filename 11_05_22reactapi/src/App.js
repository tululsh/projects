import './App.css';
// import React, {useEffect, useState} from 'react';
import Algolia from './components/Algolia';

function App() {
  return (
    <div >
      <Algolia/>
    </div>
  );
}

export default App;

// import React, {useEffect,useState} from 'react';
// import { Link } from "react-router-dom";

// export default function App() {
//   return (
//     <div>
//     <h1>Bookkeeper</h1>
//     <nav
//       style={{
//         borderBottom: "solid 1px",
//         paddingBottom: "1rem",
//       }}
//     >
//       <Link to="/about">About</Link> |{" "}
//       <Link to="/contact">Contact</Link>
//     </nav>
//   </div>
//   );
// }