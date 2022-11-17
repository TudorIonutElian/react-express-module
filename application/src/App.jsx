import Header from './components/Header';
import Items from './components/Items';
import SidedMenu from "./components/SidedMenu";
import urls from './data/url';

function App() {

  return (
    <div className="App h-screen">
      <Header urls={urls}/>
      <Items />
      <SidedMenu urls={urls}/>
    </div>
  )
}

export default App
