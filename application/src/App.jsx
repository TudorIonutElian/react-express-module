import Header from './components/Header';
import Items from './components/Items';
import SidedMenu from "./components/SidedMenu";
import urls from './data/url';
import config from './data/config';
import axios from "axios";

import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [url, setUrl] = useState("/");
  const [apiSearch, setApiSearch] = useState("api1");
  const [menuSide, setMenuSide] = useState("left");
  const [apiData, setApiData] = useState([]);
  
  useEffect(() => {
    // Update the document title using the browser API
    changeURL(url);
    getAPIData(apiSearch);
  }, [apiData]);


  const changeURL = (url) => {
    switch (url) {
      case urls[0].href:
        setApiSearch("api1");
        setMenuSide("left");
        break;
  
      case urls[1].href:
        setApiSearch("api2");
        setMenuSide("left");
        break;
  
      case urls[2].href:
        setApiSearch("api1");
        setMenuSide("right");
        break;
  
      case urls[3].href:
        setApiSearch("api2");
        setMenuSide("right");
        break;
    
      default:
        break;
    }
  }

  const getAPIData = (apiSearch) => {
    axios.get(`${config.API_URL}/${apiSearch}`).then((data)=> {setApiData(data.data)});
  }
  

  const setURLOnClick = (e, newUrl) => {
    e.preventDefault();
    setUrl(newUrl);
  }

  return (
    <div className="App h-screen">
      <Header urls={urls} urlChanger={setURLOnClick}/>
      <Items itemsApiData={apiData}/>
      <SidedMenu urls={urls} menuSide={menuSide} urlChanger={setURLOnClick}/>
    </div>
  )
}

export default App
