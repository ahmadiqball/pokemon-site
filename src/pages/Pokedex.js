import { Fragment } from "react";
import Navigation from "../components/Navigation/Navigation";
import Pokemons from "../components/Pokedex/Pokemons";

const Pokedex = () => {
 
  return (
    <Fragment>
      <Navigation />
      <Pokemons />
    </Fragment>
  );
};

export default Pokedex;
