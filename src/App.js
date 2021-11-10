import logo from './logo.svg';
import './App.css';
import Head from './Header.js';
import Unique from './Indiv';
import Dash from './Dashboard';
import {useState,useEffect} from 'react'



function App() {
  const [tocur,settocur]=useState(0);
  var rows = [];
  if(tocur==0)
     for (var i = 0; i < 38; i++) { 
          rows.push( <Dash ind={i} />);
        }
  else{
    rows.push( <Dash ind={tocur} />);

  }      

function handle(e){
  settocur(e.target.value)
  }

  return (
    <>
    <Head head="Covid19Tracker (India)" />
    <Unique selectedval={tocur} 
      onchangeval={handle}
    />
    <div className="App">
    {rows}
    </div>
    </>
  );
}
export default App;
