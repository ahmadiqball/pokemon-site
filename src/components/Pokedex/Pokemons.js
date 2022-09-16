import { Fragment, useEffect, useState } from "react";
import ClipLoader from "react-spinners/PulseLoader";
import classes from "./Pokemons.module.css";
import PokeCard from "./PokeCard";
import axios from "axios";
import { useSelector } from "react-redux";
import PokeDetail from "../PokeDetail/PokeDetail";
import PokeFilter from "./PokeFIlter";

const override = {
  display: "block",
  margin: "3rem auto",
  borderColor: "red",
  textAlign: "center",
};


const Pokemons = () => {
  let [loading, setLoading] = useState(true);
  const mainUrl = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";  
  const [pokeData, setPokeData] = useState([]);
  const [pokeNum, setPokeNum] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const sessionData = JSON.parse(sessionStorage.getItem("pokeData"));
  const show = useSelector((state) => state.ui.showModal);
  const modalData = useSelector((state) => state.ui.modalData);

  const getData = async (url) => {
    const result = await axios.get(url);

    if (result.status !== 200) {
      console.log(url);
      throw new Error("Failed fetch pokemons.");
    }

    const data = await result.data;
    setPokeData((lastData) => {
      return [...lastData, data];
    });
    setFilteredData((lastData) => {
      return [...lastData, data];
    });
  };

  useEffect(() => {
    const getPokemon = async () => {
      setLoading(true)
      const result = await axios.get(mainUrl);
      const data = await result.data;
      setPokeNum(data.count)
      
      // const filtered = await data.results.filter((str) => { return str.name.includes('sa')})
      // console.log(filtered)
      if (result.status !== 200) {
        console.log(mainUrl);
        throw new Error("Failed fetch pokemon.");
      }

      data.results.map((data) => {
        return getData(data.url);
      });
      setLoading(false)
    };

    if (sessionData) {
      setPokeData(sessionData);
      setFilteredData(sessionData);
      setLoading(false)
    } else {
      getPokemon().then((res) => setFilteredData(pokeData));
      // sessionStorage.setItem('pokeData', JSON.stringify(pokeData))
    }
  }, [mainUrl]);

  if (pokeData.length === pokeNum) {
    sessionStorage.setItem("pokeData", JSON.stringify(pokeData));
  }

  const filteringData = (search, typeInput) => {
    setLoading(true)
    const filtered = pokeData.filter((str) => {
      return str.name.includes(search);
    });
    if (typeInput !== "all") {
      const filtered2 = filtered.filter((str) => {
        let hasType;
        for (var i=0; i < str.types.length; i++) {
          if (str.types[i].type.name === typeInput) {
            hasType = true;
          }
        }

        if (hasType) {
          return true
        } else {
          return false
        }
      });
      setLoading(false)
      return setFilteredData(filtered2);
    }
    setLoading(false)
    return setFilteredData(filtered);
  };

  return (
    <Fragment>
      
      {show && <PokeDetail data={modalData} />}
      <PokeFilter onSearch={filteringData} />
      <ClipLoader color='#F2B807' loading={loading} cssOverride={override} size={20}/>
      <div className={classes.pokelist}>
        {filteredData.map((data) => (
          <PokeCard
            key={data.id}
            name={data.name}
            atk={data.stats[0].base_stat}
            def={data.stats[1].base_stat}
            img={data.sprites.other.dream_world.front_default}
            type={data.types}
            data={data}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Pokemons;
