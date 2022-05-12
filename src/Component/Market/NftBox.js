import classes from "./NftBox.module.css";
import {FaCartPlus} from 'react-icons/fa';

const NftBox = (props) => {
  const load = props.data.map((data) => (
    <div className={classes.box} key={Math.random()}>
      <img className={classes.img} src={data.image} />
      <div className={classes.name}>
        <p>{data.name}</p>
        <p>{data.price}</p>
      </div>
      <div className={classes.bid}>
            <button>Buy</button>
            <button>{<FaCartPlus/>}</button>
          </div>
    </div>
  ));
  return <div className={classes.container}>{load}</div>;
};

export default NftBox;
