import classes from "./PokeFilter.module.css";
import { useRef, useEffect, useState } from "react";
import axios from 'axios';

const PokeFilter = (props) => {
  const searchIpt = useRef();
  const typeIpt = useRef();
  const [typeData, setTypeData] = useState([])
  const getTypeSession = JSON.parse(sessionStorage.getItem('typeData'));

  useEffect(() => {
    const getTypeData = async () => {
      const typeRes = await axios.get('https://pokeapi.co/api/v2/type');

      if (typeRes.status !== 200) {
        throw new Error('Failed to fetch type data.')
      }

      const typeDataRes = await typeRes.data.results;
      setTypeData(typeDataRes)
      sessionStorage.setItem('typeData', JSON.stringify(typeDataRes))
    }

    if (getTypeSession) {
      setTypeData(getTypeSession)
    } else {
      getTypeData()
    }
  }, [])

  const searchHandler = () => {
    // console.log(searchIpt.current.value)
    props.onSearch(searchIpt.current.value.toLowerCase(), typeIpt.current.value);
  };

  return (
    <form className={classes.filter}>
      <input
        className={classes.search}
        ref={searchIpt}
        placeholder='Search your pokemon here...'
        onChange={searchHandler}
      ></input>
      <div className={classes.selects}>
        <select ref={typeIpt} onChange={searchHandler}>
          <option value='all'>All Type</option>
          {typeData.map((item) => (
            <option key={item.name} value={item.name}>{item.name}</option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default PokeFilter;
