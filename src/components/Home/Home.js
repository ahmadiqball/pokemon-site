import classes from './Home.module.css';
import image from '../../assets/homepoke.svg';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div className={classes.home}>
            <div className={classes['home-text']}>
                <h1>Find<span> all your favorite </span>Pokemon</h1>
                <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
                <Link to='/pokedex'><button>See Pokemons</button></Link>
            </div>
            <div className={classes['home-img']}>
                <img src={image} alt='pikachu'/>
            </div>
        </div>
    )
}

export default Home;