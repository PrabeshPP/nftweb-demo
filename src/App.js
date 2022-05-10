import './App.css';
import Body from './Component/Body/Body';
import Header from './Component/Header/Header';
import imgSrc from './Assets/moneky_nft.jpg';
import HotAunction from './Component/Auction/HotAuction';

function App() {
  return (
    <div className="App">
     <Header/>
     <Body imgSrc={imgSrc}/>
     <HotAunction/>
    </div>
  );
}

export default App;
