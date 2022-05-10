import classes from "./Body.module.css";
import {AiOutlineHeart} from "react-icons/ai";


const Body=(props)=>{
    return(
        <body className={classes.body}>
            <div className={classes.boxLeft}>

            </div>
            <div className={classes.boxRight}>
                <img src={props.imgSrc} alt="hello" />
                <div className={classes.foot}>
                    <div className={classes.left}>
                       <h4>Monke</h4>
                       <p>0.24 eth</p>
                    </div>
                    <div className={classes.right}>
                        <h4>We are here</h4>
                        <div className={classes.heart}><AiOutlineHeart/><p>25</p></div>
                    </div>

                </div>

            </div>
        </body>

    )

}

export default Body;