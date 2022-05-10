import classes from "./Header.module.css";

const Header=()=>{
    return(
        <header className={classes.header}>
        <div className={classes.h3}>
            <h2 >NFT STORE</h2>
        </div>
        <div className={classes.nav}>
            <ul>
                <li>HOME</li>
                <li>MY PROFILE</li>
                <li>ACTIVITY</li>
                <li>HOW IT WOKS</li>
            </ul>
        </div>
        <div className={classes.createDiv}>
            <button className={classes.create}>
                CREATE
            </button>
            <span className={classes.sign}>SIGN IN</span>
        </div>


        </header>
    )

}

export default Header;
