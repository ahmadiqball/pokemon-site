import classes from './NotFound.module.css';
import rocket from '../assets/rocket-team.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className={classes.notfound}>
            <h1>404</h1>
            <h5>The rocket team <span>has won this time</span></h5>
            <Link to='/'><button>Return</button></Link>
            <img src={rocket} alt='rocket-team'/>
        </div>
    )
}

export default NotFound;