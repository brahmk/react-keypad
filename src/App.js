import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

 const checkCode = (display) => {
   if (display ==='4112'){
    setDisplay('ENTER')
   } else { setDisplay('INVALID')}
 }
  const [display, setDisplay] = useState(' ')
  return (
    <div className="App">

      
      
      <main>
      <h3 class="display">{display}</h3>
      <button onClick={()=>setDisplay(display +'1')}>1</button>
      <button onClick={()=>setDisplay(display +'2')}>2</button>
      <button onClick={()=>setDisplay(display +'3')}>3</button>
      <br></br>
      <button onClick={()=>setDisplay(display +'4')}>4</button>
      <button onClick={()=>setDisplay(display +'5')}>5</button>
      <button onClick={()=>setDisplay(display +'6')}>6</button>
      <br></br>
      <button onClick={()=>setDisplay(display +'7')}>7</button>
      <button onClick={()=>setDisplay(display +'8')}>8</button>
      <button onClick={()=>setDisplay(display +'9')}>9</button>
      <br></br>
      <button onClick={()=>setDisplay('')}>C</button>
      <button onClick={()=>setDisplay(display +'0')}>0</button>
      <button onClick={checkCode}>E</button>
      </main>
      
    </div>
    
  );
}

export default App;
