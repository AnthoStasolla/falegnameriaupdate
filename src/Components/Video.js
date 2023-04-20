import React from "react";
import "./Video.css";
import { Link } from "react-router-dom";
import videohero from "../assets/video/videohero.mp4";

const Video = () => {
  return (
    <>
      <div className="hero">
        <video autoPlay loop muted id="video">
          <source src={videohero} type="video/mp4" />
        </video>
        <div className="content">
          <h1>FRANCO STASOLLA</h1>
          <p>Arredamenti Su Misura</p>

          <div>
            <Link to="/about" className="btn">
              Contattaci
            </Link>
            <Link to="/contact" className="btn btn-light">
              Visita la Galleria
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
