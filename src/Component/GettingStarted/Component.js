import classes from "./Component.module.css";
import {RiSecurePaymentLine} from "react-icons/ri";
import {IoIosWallet,IoIosRocket} from "react-icons/io";

const data=[
    {
            'name':"Connect Your Wallet",
            'icon':RiSecurePaymentLine
    },
    {
        'name':"Other Payment Options",
        'icon':IoIosWallet

    },
    {
        'name':"Mint your NFT",
        'icon':IoIosRocket

    }
]

const ComponentStarted=()=>{
    const container=data.map((item)=><div className={classes.mainContainer}>
        <div className={classes.iconContainer} key={item.name}>
            <item.icon className={classes.icon}/>
        </div>
        <p>{item.name}</p>
        </div>)
    
   
    return (
        <div className={classes.container}>
            <div className={classes.head}>
                <h1>Getting Started</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className={classes.iconBox}>
                {container}
            </div>
        </div>
    )

}

export default ComponentStarted;