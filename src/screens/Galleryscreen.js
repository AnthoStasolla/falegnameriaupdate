import React from "react";
import Hero from "../Components/Hero";
import heroimg from "../assets/immagini/herohome.jpg";
import Gallery from "../Components/Gallery";
import { Link } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/ai";

const Galleryscreen = () => {
  return (
    <>
      <Hero img={heroimg}>
        <h1>
          {" "}
          <span className="span-color">Ambienti irregolari</span> impossibili da
          arredare?
        </h1>
        <p>Ci pensiamo noi...</p>
        <p>
          ...visita la <span className="span-color">Galleria</span> qui sotto{" "}
          <AiOutlineArrowDown style={{ color: "#442607" }} size={40} />
        </p>

        <Link to="/contatti" className="btn btn-light p-3">
          Contattaci per un preventivo
        </Link>
      </Hero>
      <Gallery />
    </>
  );
};

export default Galleryscreen;
