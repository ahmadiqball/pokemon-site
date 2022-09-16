import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import classes from "./Navigation.module.css";
import logo from "../../assets/pokemon.svg";
import Backdrop from "../UI/Backdrop";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const [backdrop, setBackdrop] = useState(false);
  const [actPage, setActPage] = useState(location.pathname);
  const [docDrop, setDocDrop] = useState(false);

  return (
    <Fragment>
      {backdrop && <Backdrop />}
      <div className={classes.slot} />
      <Navbar expand="md" fixed="top" className={classes.navbar}>
        <Container className={classes["navbar-cont"]}>
          <Navbar.Brand>
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setBackdrop(!backdrop)}/>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={classes["navbar-collapse"]}
          >
            <Nav className={classes["navbar-nav"]}>
              <Link
                to="/"
                className={actPage === "/" ? classes.active : ""}
                onClick={() => {
                  setActPage("/");
                }}
              >
                Home
              </Link>
              <Link
                to="/pokedex"
                className={actPage === "/pokedex" ? classes.active : ""}
                onClick={() => {
                  setActPage("/pokedex");
                }}
              >
                Pokedex
              </Link>
              <Link
                to='/my-pokemon'
                className={actPage === "/my-pokemon" ? classes.active : ""}
                onClick={() => {
                  setActPage("/my-pokemon");
                }}
              >
                My Pokemon
              </Link>
              <div style={{position: 'relative'}}>
              <Nav.Link
                style = {{ position: 'relative'}}
                onClick={() => {
                  setDocDrop(!docDrop);
                }}
              >
                Documentation
              </Nav.Link>
              {docDrop && 
                <div className={classes.docdrop}>
                  <a href='https://github.com/ahmadiqball/pokemon-site'>Repository</a>
                  <a href='https://www.figma.com/file/wKFZ7XhGTdBKPDfFNa34St/Pokedex-(Community)'>UI Kit</a>
                  <a href='https://pokeapi.co/'>Poke API</a>
                </div>}
              </div>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Navigation;
