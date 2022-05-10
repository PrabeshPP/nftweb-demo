import classes from "./Body.module.css";


const Body=(props)=>{
    return(
        <body className={classes.body}>
            <div className={classes.boxLeft}>

            </div>
            <div className={classes.boxRight}>
                <img src={props.imgSrc} alt="hello" />

            </div>
        </body>

    )

}

export default Body;