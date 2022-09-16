import classes from "./MyPokemonCard.module.css";
import pokeVector from "../../assets/pokeball-vector.svg";
import trashIc from "../../assets/trash.svg";
import { useDispatch } from "react-redux";
import { pokebagActions } from "../store/pokebag-slice";
import { uiActions } from "../store/ui-slice";

const MyPokemonCard = (props) => {
  const dispatch = useDispatch();

  const releaseHandler = () => {
    dispatch(pokebagActions.removeFromBag(props.id))
  }

  const openDetail = () => {
    dispatch(uiActions.showModal(props.data))
  }

  return (
    <div className={`${classes.pokecard} ${props.type}`} >
      <div className={classes.upper} onClick={openDetail}>
        <h1>{props.name}</h1>
        <img src={props.img} alt="poke-img" className={classes.pokemon} />
        <img src={pokeVector} className={classes.pokeball} alt="pokeball"/>
      </div>
      <div className={classes.release}>
        <button onClick={releaseHandler}>
          <img src={trashIc} alt="trash"/>
          Release
        </button>
      </div>
    </div>
  );
};

export default MyPokemonCard;
