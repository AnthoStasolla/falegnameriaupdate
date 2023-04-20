import React from "react";
import "./Panelabout.css";
import { Link } from "react-router-dom";

const Panelabout = ({ titolo, img }) => {
  return (
    <>
      <div
        className="card border-0 mx-2 m-5 shadow-sm rounded rounded-5"
        style={{ maxWidth: "350px", backgroundColor: "#e47a19" }}
      >
        <img
          src={img}
          className="card-img-top photo immagine rounded-bottom rounded-5"
          alt="foto"
          style={{
            maxWidth: "26rem",
            maxHeight: "20rem",
            objectFit: "cover",
            backgroundColor: "#e47a19",
          }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-card text-center">{titolo}</h5>
        </div>
        <Link to="/gallery" className="btn1 text-center">
          Vedi in Galleria
        </Link>
      </div>
    </>
  );
};

export default Panelabout;
