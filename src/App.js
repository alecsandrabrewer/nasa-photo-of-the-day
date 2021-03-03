import React, {useState, useEffect} from "react";
import axios from 'axios';
import Main from './components/Main';
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
      console.log(response);
      setData(response.data);
    })
    .catch(err => {
      console.log(err)
    })
  }, []);

  return (
    <div className="App">
      {/* {data.Map(item => {
        return (
          <div>
            <Main
              photo = {item.hdurl}
              copyright = {item.copyright}
              date = {item.date}
              explanation = {item.explanation}
            />
          </div>
        )
      })} */}
    </div>
  );
}

export default App;
