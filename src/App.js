import logo from './logo.svg';
import './App.css';
import { useState, useRef, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid'
import text from 'quotes.txt'

var file = require('/quotes.txt')

const LOCAL_STORAGE_KEY = 'quotes.key'
function App() {
  const [quotelist, setQuotesList] = useState([])
  
  //const currentQuote = useRef('')
  const [currentQuote, setQuote] = useState('');

  const handleChange = (event) => {
    // 👇 Get input value from "event"
    setQuote(event.target.value);
  };

  const changeList = (event) => {
    let newlist = [...quotelist, currentQuote];
    setQuotesList(newlist)
  }


  const writeToFile = () => {
    file.writeFile( 
      currentQuote,
      function (err) { 
        if (err) { 
          return console.error(err); 
        }
  })}
  
  const readFromFile = () =>{
  file.readFile("quotes.txt", function (err, data) { 
    if (err) { 
      return console.error(err); 
    } 
    console.log("Data read : " + data.toString()); 
      
  })}; 

  

  
  return (
    <div className="App">
      <header className="App-header">
        <h1> Your Favorite Quotes </h1>
        <h2> Current Quote: {currentQuote}</h2>
        { (quotelist.length === 0 && "Start adding your favorite quote below!") }
        { quotelist.map((quote) => (
          <p key = {uuidv4()} > {quote} </p>
        ))}
      <input id = "textbox" type = "text" onChange={handleChange} />
      <button onClick={changeList}> Add Quote</button>

      </header>    

    </div>
  );
}





export default App;
