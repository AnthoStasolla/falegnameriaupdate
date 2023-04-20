import React from "react";
import gallery1 from "../assets/immagini/gallery1.jpeg";
import gallery2 from "../assets/immagini/gallery2.jpeg";
import gallery3 from "../assets/immagini/gallery3.jpeg";
import gallery4 from "../assets/immagini/gallery4.jpeg";
import gallery5 from "../assets/immagini/gallery5.jpeg";
import gallery6 from "../assets/immagini/gallery6.jpeg";
import gallery7 from "../assets/immagini/gallery7.jpeg";
import gallery8 from "../assets/immagini/gallery8.jpeg";
import gallery9 from "../assets/immagini/gallery9.jpeg";
import gallery10 from "../assets/immagini/gallery10.jpeg";
import gallery11 from "../assets/immagini/gallery11.jpeg";
import gallery12 from "../assets/immagini/gallery12.jpeg";
import gallery13 from "../assets/immagini/carosel.jpeg";
import gallery14 from "../assets/immagini/cucinahome.jpeg";
import gallery15 from "../assets/immagini/bagnohome.jpeg";

const Gallery = () => {
  return (
    <>
      <div
        id="gallery"
        className="container mb-1"
        style={{
          background: "background: rgba(68, 38, 0, 0.0)",
        }}
      >
        <h2
          className="text-center text-form mb-4 pt-4"
          style={{
            fontSize: "2.5rem",
            textShadow: "2px 3px 4px black",
            fontFamily: "Mulish, sans-serif",
            fontWeight: "bold",
            color: "#f0dcc7",
          }}
        >
          Galleria
        </h2>
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src={gallery1}
              className="w-100 rounded mb-4"
              alt="foto"
              style={{
                boxShadow: "2px 1px 4px #ff8c00",
              }}
            />

            <img
              src={gallery9}
              className="w-100 rounded mb-4"
              alt="foto2"
              style={{
                boxShadow: "2px 2px 4px #ff8c00",
              }}
            />
            <img
              src={gallery2}
              className="w-100 rounded mb-4"
              alt="foto7"
              style={{
                boxShadow: "2px 1px 4px #ff8c00",
              }}
            />
            <img
              src={gallery12}
              className="w-100 rounded mb-4"
              alt="foto7"
              style={{
                boxShadow: "2px 1px 4px #ff8c00",
              }}
            />
            <img
              src={gallery13}
              className="w-100 rounded mb-4"
              alt="foto7"
              style={{
                boxShadow: "2px 1px 4px #ff8c00",
              }}
            />
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src={gallery4}
              className="w-100 rounded mb-4"
              alt="foto3"
              style={{
                boxShadow: "2px 1px 4px #ff8c00",
              }}
            />

            <img
              src={gallery5}
              className="w-100 rounded mb-4"
              alt="foto4"
              style={{
                boxShadow: "2px 1px 4px #ff8c00",
              }}
            />
            <img
              src={gallery3}
              className="w-100 rounded mb-4"
              alt="foto7"
              style={{
                boxShadow: "2px 1px 4px #ff8c00",
              }}
            />
            <img
              src={gallery11}
              className="w-100 rounded mb-4"
              alt="foto7"
              style={{
                boxShadow: "2px 1px 4px #ff8c00",
              }}
            />
            <img
              src={gallery15}
              className="w-100 rounded mb-4"
              alt="foto7"
              style={{
                boxShadow: "2px 1px 4px #ff8c00",
              }}
            />
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src={gallery6}
              className="w-100 rounded mb-4"
              alt="foto5"
              style={{
                boxShadow: "2px 1px 4px #ff8c00",
              }}
            />

            <img
              src={gallery7}
              className="w-100 rounded mb-4"
              alt="foto6"
              style={{
                boxShadow: "2px 1px 4px #ff8c00",
              }}
            />
            <img
              src={gallery8}
              className="w-100 rounded mb-4"
              alt="foto7"
              style={{
                boxShadow: "2px 1px 4px #ff8c00",
              }}
            />
            <img
              src={gallery10}
              className="w-100 rounded mb-4"
              alt="foto7"
              style={{
                boxShadow: "2px 1px 4px #ff8c00",
              }}
            />
            <img
              src={gallery14}
              className="w-100 rounded mb-4"
              alt="foto7"
              style={{
                boxShadow: "2px 1px 4px #ff8c00",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
