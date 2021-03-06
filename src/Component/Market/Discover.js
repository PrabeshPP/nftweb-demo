import { useCallback, useEffect,useState } from "react";
import classes from "./Discover.module.css";
import NftBox from "./NftBox";


const Discover=()=>{
    const [isLoading,setIsLoading]=useState(false);
    const [isError,setIsError]=useState("");
    const [nftData,setNftData]=useState([]);
   const fetchData=useCallback(async()=>{
    setIsLoading(true);
    try{
     const response=await fetch("https://nft-demo-2a9e8-default-rtdb.firebaseio.com/items.json");
     if(!response.ok){
         throw new Error("Could not fetch the data");
     }
     var data=await response.json();
     const loadItems=[];
     for(let item in data){
         loadItems.push({
             id:data[item].id,
             name:data[item].name,
             image:data[item].image,
             price:data[item].price
         
         });

     }
     const newLoadItems=[...loadItems,...loadItems];
     setNftData(newLoadItems.slice(0,8));

    }catch(err){
        setIsError(err.message);
    }

    setIsLoading(false);
    
},[])

   useEffect(()=>{
       fetchData();

   },[fetchData])

 

 

   return (
       <div className={classes.container}>
       <h1>Discover</h1>
       <div className={classes.content}>
       {
           
          isError?<div className={classes.loader}></div>:isLoading?<div className={classes.loader}></div>:<NftBox data={nftData}/>
       }
       </div>
       <div className={classes.box}>
       <button>LOAD MORE</button>
       </div>
       </div>
   )
 
  
}

export default Discover;