import { Fragment } from "react";
import Home from "../components/Home/Home";
import Navigation from "../components/Navigation/Navigation";

const Homepage = () => {
  return (
    <Fragment>
      <Navigation />
      <Home />
    </Fragment>
  );
};

export default Homepage;
