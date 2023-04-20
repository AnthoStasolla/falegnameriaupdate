import React from "react";
import Hero from "../Components/Hero";
import Form from "../Components/Form";
import imgcontatti from "../assets/immagini/cucinahome.jpeg";

const Contattiscreen = () => {
  return (
    <>
      <Hero img={imgcontatti}>
        <h1>Contattaci al nostro numero di telefono</h1>
        <p>
          <span className="span-color">354/5855561165</span>
        </p>
        <p>...tramite Whatsapp o puoi inviarci una mail</p>
      </Hero>
      <Form />
    </>
  );
};

export default Contattiscreen;
