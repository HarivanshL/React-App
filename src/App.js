import './App.css';
import { useState, useRef, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid'


/*
fetchItems()
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        let newlist = [...quotelist, data];
        setQuotesList(data)
        console.log(data)
      }
    )
    */

function App() {
  const [quotelist, setQuotesList] = useState([])

  useEffect(() => {
    fetchItems();
  }, ['']);

  const fetchItems = async() => {
    const data = await fetch('/api');
    const items = await data.json();
    setQuotesList(items);
    console.log(items)
  }

  
  //const currentQuote = useRef('')
  const [currentQuote, setQuote] = useState('');

  const handleChange = (event) => {
    // 👇 Get input value from "event"
    setQuote(event.target.value);
  };

  const changeList = (event) => {
    let newlist = [...quotelist, currentQuote];
    setQuotesList(newlist)
    //writeToFile()
  }

/*
  const writeToFile = () => {
    fetch(path)
    .then((r) => r.text())
    .then(text  => {
      console.log(JSON.stringify(text.));
    })  
}
  
  const readFromFile = () =>{
  path.readFile("quotes.txt", function (err, data) { 
    if (err) { 
      return console.error(err); 
    } 
    console.log("Data read : " + data.toString()); 
      
  })}; 

          (typeof quotelist.quotes === 'undefined') ? (
          <p>Start adding your favorite quotes below!</p>
        )
  */

  


  
  return (
    <div className="App">
      <header className="App-header">
        <h1> Your Favorite Quotes </h1>
        {quotelist.length <1 && 
         <p>Start adding your favorite quotes below!</p>
        }
        {
          quotelist.map(quote => {
            return (<>
            <p key = {uuidv4()}> {quote} </p>
            </>)
          })
        }
      <input id = "textbox" type = "text" onChange={handleChange} />
      <button onClick={changeList}> Add Quote</button>

      </header>    

    </div>
  );
}

/*
<h2> Current Quote: {currentQuote}</h2>

{ (quotelist.length === 0 && "Start adding your favorite quote below!") }
{ quotelist.map((quote) => (
  <p key = {uuidv4()} > {quote} </p>
))}
*/




export default App;
