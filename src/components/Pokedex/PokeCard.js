import classes from "./PokeCard.module.css";
import pokeball from "../../assets/pokeball-vector.svg";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

const PokeCard = (props) => {
  const dispatch = useDispatch();


  const openDetail = () => {
    dispatch(uiActions.showModal(props.data))
  }

  return (
    <Fragment>
      <div className={classes.pokecard} onClick={openDetail}>
        <div className={classes.desc}>
          <h4>{props.name}</h4>
          <div className={classes.stats}>
            <div className={classes.stat}>
              <p>Attack </p>
              <p className={classes.round}>{props.atk}</p>
            </div>
            <div className={classes.stat}>
              <p>Defense </p>
              <p className={classes.round}>{props.def}</p>
            </div>
          </div>
          <div className={classes.types}>
            {props.type.map((type) => (
              <div
                key={type.type.name}
                className={`${classes.type} ${type.type.name}`}
              >
                {type.type.name}
              </div>
            ))}
          </div>
        </div>
        <div className={`${classes.image} ${props.type[0].type.name}`}>
          <img className={classes.pokeball} src={pokeball} alt='pokeball' />
          <img className={classes.pokeImg} src={props.img} alt="pokemon-img" />
        </div>
      </div>
    </Fragment>
  );
};

export default PokeCard;
