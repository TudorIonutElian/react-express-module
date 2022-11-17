import Header from './components/Header';
import Items from './components/Items';
import SidedMenu from "./components/SidedMenu";
import urls from './data/url';

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
  }, [url]);


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
    console.log(apiSearch)
  }
  

  const setURLOnClick = (e, newUrl) => {
    e.preventDefault();
    setUrl(newUrl);
    console.log(menuSide)
  }

  console.log(url)
  return (
    <div className="App h-screen">
      <Header urls={urls} urlChanger={setURLOnClick}/>
      <Items />
      <SidedMenu urls={urls} menuSide={menuSide} urlChanger={setURLOnClick}/>
    </div>
  )
}

export default App
