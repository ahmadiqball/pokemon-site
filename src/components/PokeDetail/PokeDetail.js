import classes from "./PokeDetail.module.css";
import Modal from "../UI/Modal";
import axios from "axios";
import { useEffect, useState } from "react";
import closeBtn from "../../assets/close.svg";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { pokebagActions } from "../store/pokebag-slice";
import pokeball from "../../assets/pokeball-vector.svg";
import catchImg from "../../assets/pokeball.svg";
import { useSelector } from "react-redux";

const PokeDetail = (props) => {
  const pokemon = props.data;
  const bagData = useSelector((state) => state.bag.bagItem);
  const [abilities, setAbilities] = useState([]);
  const dispatch = useDispatch();

  const initCatchId = bagData.findIndex(item => item.id === pokemon.id)
  let initCatch;
  if (initCatchId === -1) {
    initCatch = 'Catch'
  } else {
    initCatch = 'Catched'
  }

  const [catchBtn, setCatchBtn] = useState(initCatch);

  const closeDetail = () => {
    dispatch(uiActions.hideModal());
  };

  const catchPokemon = () => {
    setCatchBtn("Catched");
    dispatch(pokebagActions.addToBag({ item: pokemon }));
  };

  useEffect(() => {
    const abltCall = async (ablt) => {
      const ablRes = await axios.get(ablt.ability.url);
      const ability = await ablRes.data;

      if (ablRes.status !== 200) {
        throw new Error("Failed to fetch ability");
      }

      setAbilities((prev) => {
        return [...prev, ability];
      });
    };

    pokemon.abilities.map((ablt) => {
      return abltCall(ablt);
    });
  }, [pokemon]);

  return (
    <Modal className={`${classes.pokedetail} ${pokemon.types[0].type.name}`}>
      <img
        src={closeBtn}
        alt="CLOSE"
        className={classes.closeBtn}
        onClick={closeDetail}
      />
      <img src={pokeball} alt="pokeball" className={classes.pokeball} />
      <div className={classes.pokecard}>
        <div className={classes.detail}>
          <h3>{pokemon.name}</h3>
          <div className={classes.types}>
            {pokemon.types.map((type) => (
              <div
                key={type.type.name}
                className={`${classes.type} ${type.type.name}`}
              >
                {type.type.name}
              </div>
            ))}
          </div>

          <div className={classes.stats}>
            {pokemon.stats.map((stat) => (
              <div className={classes.stat} key={stat.stat.name}>
                <div className={classes.statval}>
                  <h5>{stat.stat.name.split("-").join(" ")}</h5>
                  <h5>{stat.base_stat}</h5>
                </div>
                <div className={classes.statbar}>
                  <div
                    style={{
                      width: `${(stat.base_stat * 100) / 200}%`,
                      backgroundColor: "var(--dark)",
                      height: "100%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <h4>Abilities</h4>
          <ul className={classes.ability}>
            {abilities.map((ability) => (
              <li key={ability.id}>
                <h5>{ability.name.split("-").join(" ")}</h5>
                <p>{ability.effect_entries[1].short_effect}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.images}>
          <div className={classes.imageWrapper}>
            <img
              className={classes.pokeImg}
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt="pokemon"
            />
          </div>
          <button
            className={`${classes.catch}  ${
              catchBtn === "Catched" && classes.catched
            }`}
            onClick={catchPokemon}
          >
            <img src={catchImg} alt="catch" />
            {catchBtn}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default PokeDetail;
