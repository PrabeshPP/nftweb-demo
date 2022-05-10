import classes from "./Body.module.css";
import {AiOutlineHeart} from "react-icons/ai";


const Body=(props)=>{
    return(
        <div className={classes.body}>
            <div className={classes.boxLeft}>
                <div className={classes.heading}>
                    <h1>Discover,Collect,and Charity
                     in extraordinary NFT Marketplace</h1>
                </div>
                <div className={classes.para}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur
                     adipiscing elit. Donec facilisis facilisis
                      nisi. Quisque vel malesuada nibh.
                    </p>
                    
                </div>
                <br></br>
                <div className={classes.button}>
                    <button className={classes.button1}>Explore</button>
                    <button className={classes.button2}>Create</button>
                </div>


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
        </div>

    )

}

export default Body;