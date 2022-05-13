import './App.css';
import Body from './Component/Body/Body';
import Header from './Component/Header/Header';
import imgSrc from './Assets/moneky_nft.jpg';
import HotAunction from './Component/Auction/HotAuction';
import ComponentStarted from './Component/GettingStarted/Component';
import Discover from './Component/Market/Discover';
import Foot from './Component/Foot/Foot';

function App() {
  return (
    <div className="App">
     <Header/>
     <Body imgSrc={imgSrc}/>
     <HotAunction/>
     <ComponentStarted/>
     <Discover/>
     <Foot/>
    </div>
  );
}

export default App;
