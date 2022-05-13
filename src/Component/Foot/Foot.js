import classes from "./Foot.module.css";
import {BsInstagram,BsFacebook,BsTwitter} from "react-icons/bs";

const Foot=()=>{
    return(
        <div className={classes.footContainer}>
        <div className={classes.container}>
            <div className={classes.box1}>
                <h2>
                Lorem ipsum dolor, sit amet consectetur
                 adipisicing elit. Perferendis soluta ipsum ullam.
                  Et molestiae quaerat quibusdam iste voluptas.
                </h2>
            </div>
            <div className={classes.box}>
                <div className={classes.box11}>
                    <span>Marketplace</span>
                    <p>Home</p>
                    <p>Activity</p>
                    <p>Discover</p>
                    <p>Learn more</p>
                </div>
                <div className={classes.box11}>
                <span>Company</span>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Portfolio</p>
                </div>
                <div className={classes.box11}>
                <span>Marketplace</span>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Email</p>
                </div>
                
            </div>
            
        </div>
        <div className={classes.iconBox}>
            <div className={classes.icons}>
        <BsInstagram className={classes.icon}/>
        <BsFacebook className={classes.icon}/>
        <BsTwitter className={classes.icon}/>
            </div>
            <div className={classes.copy}>
            <span>&copy;2021 NFT STORE</span>
        </div>
        </div>
        
        </div>
    )

}

export default Foot;