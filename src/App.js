import './App.css';
import Body from './Component/Body/Body';
import Header from './Component/Header/Header';
import imgSrc from './Assets/moneky_nft.jpg';

function App() {
  return (
    <div className="App">
     <Header/>
     <Body imgSrc={imgSrc}/>
    </div>
  );
}

export default App;
