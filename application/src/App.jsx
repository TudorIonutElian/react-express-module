import Header from './components/Header';
import Items from './components/Items';
import SidedMenu from "./components/SidedMenu";
import urls from './data/url';

import { useState } from 'react';

function App() {
  const [url, setUrl] = useState("");

  const setURLOnClick = (e, newUrl) => {
    e.preventDefault();
    console.log("URL will change into " + newUrl);
  }

  console.log(url)
  return (
    <div className="App h-screen">
      <Header urls={urls} urlChanger={setURLOnClick}/>
      <Items />
      <SidedMenu urls={urls}/>
    </div>
  )
}

export default App
