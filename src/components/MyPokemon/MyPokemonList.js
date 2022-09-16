import classes from "./MyPokemonList.module.css";
import MyPokemonCard from "./MyPokemonCard";
import { useSelector } from "react-redux";
import PokeDetail from "../PokeDetail/PokeDetail";

const MyPokemonList = () => {
  const show = useSelector((state) => state.ui.showModal);
  const modalData = useSelector((state) => state.ui.modalData);
  const bagData = useSelector((state) => state.bag.bagItem);

  return (
    <>
    {show && <PokeDetail data={modalData} />}
      <h1 className={classes.head}>
        You have collected {bagData.length} pokemons
      </h1>
      <div className={classes.pokelist}>
        {bagData.map((pokemon) => (
          <MyPokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            img={pokemon.sprites.other["official-artwork"].front_default}
            type={pokemon.types[0].type.name}
            data={pokemon}
          />
        ))}
      </div>
    </>
  );
};

export default MyPokemonList;
