import React, {useState, useEffect} from "react";
import axios from 'axios';
import Main from './components/Main';
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
      // console.log(response.data);
      setData(response.data);
    })
    .catch(err => {
      console.log(err)
    })
  }, []);
  // console.log('data', data);
  return (
    <div className="App">

    <Main
      data = {data}
    />
    </div>
  );
}

export default App;
