import React, {useState, useEffect} from "react";
import axios from 'axios';
import Main from './components/Main';
import Header from './components/Header';
import "./App.css";

function App() {
  const [data, setData] = useState({});

  // Random way to monitor useEffect dependency 
  // const [random, setRandom] = useState(false);

  // for (let i=0; i < 4; i++){
  //   setInterval(() => {
  //     const ranNumber = Math.random()
  //     if (ranNumber > .9) setRandom(!random)
  //     console.log(random)
  //   }, 5000);
  // }


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
  console.log('data', data);
  return (
    <div className="App">
    <Header
      data = {data}
    />
    <Main
      data = {data}
    />
    </div>
  );
}

export default App;
