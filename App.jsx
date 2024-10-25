import logo from './logo.svg';

import './App.css';

import { useState } from 'react';

 

//changing the bg color based on the user input and storing that in browser localStorage, because of this when user revisits the same website his preferences will be reflected in the browser

//we made the radio button checked based on the local storage theme value

function App() {

 

  const [theme, setTheme] = useState(localStorage.getItem("Theme"));

 

  const handleSelect = (e) => {

    setTheme(e.target.value);

 

  }

  localStorage.setItem("Theme", theme);

 

  // console.log(localStorage.getItem("Theme"));

 

  return (

    <>

      <form style={{backgroundColor: localStorage.getItem("Theme") === "Dark" ? "black" : "white", color: localStorage.getItem("Theme") === "Dark" ? "white" : "black"}}>

        <input type="radio" name='theme' id='darkTheme' onChange={handleSelect} value="Dark" checked={localStorage.getItem("Theme") === "Dark"} />

        <label htmlFor='darkTheme'>Dark</label>

 

        <input type="radio" name='theme' id='lightTheme' onChange={handleSelect} value="Light" checked={localStorage.getItem("Theme") === "Light" || localStorage.getItem("Theme") === "null"  } />

        <label htmlFor='lightTheme'>Light</label>

      </form>

    </>

 

  );

}

 

export default App;
