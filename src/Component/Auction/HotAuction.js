import { useEffect } from "react";
import jsonData from "./auction.json";
import classes from "./HotAuction.module.css";
import {BsArrowRight} from "react-icons/bs";




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

          </div>
      )
        
    
    
        
    


   

   
 

}

export default HotAunction;