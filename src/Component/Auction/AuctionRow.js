import classes from "./AuctionRow.module.css";

const Row=(props)=>{
    const load=props.data.map((data)=><div className={classes.box} key={data.name}>
    <img  className={classes.img} src={data.imgSrc}
    />
    <div className={classes.name}>
        <p>{data.name}</p>
        <p>{data.price}</p>
    </div>
    <div  className={classes.bid}>
        <button>bid</button>
    </div>

    </div>)
   return(
    <div className={classes.container}>
       {
         load  
       }
    </div>
   )

}

export default Row;