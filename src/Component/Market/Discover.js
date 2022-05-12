import { useCallback, useEffect,useState } from "react";


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
             image:data[item].image
         
         });

     }
     setNftData(loadItems);

    }catch(err){
        setIsError(err.message);
    }

    setIsLoading(false);
    
},[])

   useEffect(()=>{
       fetchData();

   },[fetchData])

   console.log(nftData)
 
  
}

export default Discover;