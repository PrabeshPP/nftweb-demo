import classes from "./HotAuction.module.css";
import {BsArrowRight} from "react-icons/bs";
import img1 from "/Users/prabe/OneDrive/Desktop/ReactJs_Projects/nftweb/src/Assets/moneky_nft.jpg";
import img2 from "/Users/prabe/OneDrive/Desktop/ReactJs_Projects/nftweb/src/Assets/nft1.png";
import img3 from "/Users/prabe/OneDrive/Desktop/ReactJs_Projects/nftweb/src/Assets/nft2.png";
import img4 from "/Users/prabe/OneDrive/Desktop/ReactJs_Projects/nftweb/src/Assets/nft3.png";
import Row from "./AuctionRow";


const localData=[
  {
    "price":"1.20weth",
    "name":"Monke",
    "imgSrc":img1
},
{
    "price":"5.20weth",
    "name":"Anime",
    "imgSrc":img2
},
{
    "price":"6.20weth",
    "name":"Dino",
    "imgSrc":img3
},
{
    "price":"15.20weth",
    "name":"Purple Dragon",
    "imgSrc":img4
}
]




const HotAunction=()=>{

 
      return(
          <div className={classes.container}>
            <div className={classes.nav}>
                <h1>Hot auctions</h1>
                <div className={classes.right}>
                <h4>View All</h4>
                <BsArrowRight className={classes.arrow}/>
                </div>
            </div>
            <Row data={localData}/>

          </div>
      )
        
    
    
        
    


   

   
 

}

export default HotAunction;