import React from "react";
import Hero from "../Components/Hero";
import { Link } from "react-router-dom";
import errorimg from "../assets/immagini/errorimg.jpg";

const Errorscreen = () => {
  return (
    <>
      <Hero img={errorimg}>
        <div className="text-error">
          <h1>- ERROR 404 -</h1>
          <p>Page Not Found....</p>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <Link to="/" className="btn">
            Back to Home
          </Link>
        </div>
      </Hero>
    </>
  );
};

export default Errorscreen;
