import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Homepage";
import Pokedex from "./pages/Pokedex";
import NotFound from "./pages/NotFound";
import MyPokemon from "./pages/MyPokemon";
import { useDispatch } from "react-redux";
import { pokebagActions } from "./components/store/pokebag-slice";

function App() {
  const dispatch = useDispatch();
  const bagSessionData = JSON.parse(sessionStorage.getItem("bagData"));
  if (bagSessionData) {
    dispatch(pokebagActions.initiateBag(bagSessionData));
  }

  return ( 
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/my-pokemon" element={<MyPokemon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;
