

import todd from "/Users/bkelly/code/keypad/src/todd.png";
import { useState } from "react";
import "./App.css";



function App() {
  const checkCode = () => {
    console.log("display = ", display);
    if (display == "4112") {
      setDisplay("ENTER");
      document.getElementById("display").style.color = "green";
      document.getElementById("todd").style.display = "block";
      
    } else {
      setDisplay("INVALID");
      document.getElementById("display").style.color = "red";
    }
  };

  const [display, setDisplay] = useState("");

  return (
    <div className="App">
      <header className="app-header">
        <div class="wrapper">
        
          <h3 class="display" id="display">
            {!display ? "READY" : display}
          </h3>
         <img id="todd" src={todd}></img>
          <button onClick={() => setDisplay(display + "1")}>1</button>
          <button onClick={() => setDisplay(display + "2")}>2</button>
          <button onClick={() => setDisplay(display + "3")}>3</button>
          <br></br>
        </div>
        
        <button onClick={() => setDisplay(display + "4")}>4</button>
        <button onClick={() => setDisplay(display + "5")}>5</button>
        <button onClick={() => setDisplay(display + "6")}>6</button>
        <br></br>
        <button onClick={() => setDisplay(display + "7")}>7</button>
        <button onClick={() => setDisplay(display + "8")}>8</button>
        <button onClick={() => setDisplay(display + "9")}>9</button>
        <br></br>
        <button onClick={() => {
          document.getElementById("display").style.color = "black"
          setDisplay("")}}>C</button>
        <button onClick={() => setDisplay(display + "0")}>0</button>
        <button onClick={checkCode}>E</button>
      </header>

      <div>
     
    </div>

      
    </div>
  );
}

export default App;
