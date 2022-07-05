import "./App.css";
import { useState } from "react";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "./components/Characters";
import { COPY_SUCCESS, COPY_FAIL } from "./components/Message";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  //states//
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(26);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecial, setIncludeSpecial] = useState(false);

  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        draggable: true,
        pauseOnHover: true,
      });
    } else {
      toast(message, {
        position: "top-center",
        autoClose: 5000,
        draggable: true,
        pauseOnHover: true,
      });
    }
  };

  const copyClipboard = (tal) => {
    navigator.clipboard.writeText(tal);
  };

  const copyClipboardHandle = () => {
    if (password == "") {
      notify(COPY_FAIL, true);
    } else {
      notify(COPY_SUCCESS);
      copyClipboard(password);
    }
  };

  const generatePassword = () => {
    const randomPassword =
    Math.random().toString(18).slice(2) + Math.random().toString(18).slice(2);
    setPassword(randomPassword);

    // copy the password to the clipboard & fire toast message
    if (navigator.clipboard.writeText(randomPassword)) {
      toast.success(COPY_SUCCESS, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };


  const handlePasswordGenerator = () => {
    if(!upperCase && !lowerCase && !includeNumbers && !includeSpecial){ // false // 
      notify('You must pick one option', true);
    }else{
      let characterList = '';
      if(includeNumbers){
        characterList = characterList + numbers;
        console.log(characterList);
      }
      if(includeSpecial){
        characterList = characterList + specialCharacters;
        console.log(characterList);

      }
      if(upperCase){
        characterList = characterList + upperCaseLetters;
        console.log(characterList);

      }
      if(lowerCase){
        characterList = characterList + lowerCaseLetters;
      }
    }
    setPassword(generatePassword);

  };

  return (
    <div className="container password-container">
      <div className="data-container">
        <h5>Password Generator</h5>
        <div className="generate">
          <h6>{password}</h6>
        </div>
        <div className="form-group">
          <label htmlFor="password-strength">Password length</label>
          <input
            className="lenght"
            type="number"
            id="password-stregth"
            name="password-strength"
            max="26"
            min="8"
            defaultValue={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="uppercase-letters">Add Uppercase Letters</label>
          <input
            className="uppercase"
            type="checkbox"
            id="uppercase-letters"
            name="uppercase-letters"
            checked={upperCase}
            onChange={(e)=> setUpperCase(e.target.checked)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="lowercase-letters">Add Lowercase Letters</label>
          <input
            className="lowercase"
            type="checkbox"
            id="lowercase-letters"
            name="lowercase-letters"
            checked={lowerCase}
            onChange={(e) => setLowerCase(e.target.checked)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="include-numbers">Include Numbers</label>
          <input
            className="numbers"
            type="checkbox"
            id="include-numbers"
            name="include-numbers"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="include-symbols">Include Symbols</label>
          <input
            className="symbolss"
            type="checkbox"
            id="include-symbols"
            name="include-symbols"
            checked={includeSpecial}
            onChange={(e) => setIncludeSpecial(e.target.checked)}
          ></input>
        </div>
      </div>
      <button className="btn" onClick={handlePasswordGenerator}>
        Generate Password
      </button>
      <ToastContainer />
    </div>
  );
}

export default App;
