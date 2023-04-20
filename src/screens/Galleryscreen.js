import React from "react";
import Hero from "../Components/Hero";
import heroimg from "../assets/immagini/herohome.jpg";
import Gallery from "../Components/Gallery";
import { Link } from "react-router-dom";

const Galleryscreen = () => {
  return (
    <>
      <Hero img={heroimg}>
        <h1>
          {" "}
          <span className="span-color">Ambienti irregolari</span> impossibili da
          arredare?
        </h1>
        <p>Dai un'occhiata alla Galleria</p>
        <Link to="/contatti" className="btn">
          Contattaci per un preventivo
        </Link>
      </Hero>
      <Gallery />
    </>
  );
};

export default Galleryscreen;
