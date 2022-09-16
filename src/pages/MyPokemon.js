import { Fragment } from "react";
import MyPokemonList from "../components/MyPokemon/MyPokemonList";
import Navigation from "../components/Navigation/Navigation";

const MyPokemon = () => {
  return (
    <Fragment>
      <Navigation />
    <MyPokemonList />
    </Fragment>
  );
};

export default MyPokemon;