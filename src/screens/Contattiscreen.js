import React from "react";
import Hero from "../Components/Hero";
import Form from "../Components/Form";
import imgcontatti from "../assets/immagini/cucinahome.jpeg";
import { AiOutlineArrowDown } from "react-icons/ai";

const Contattiscreen = () => {
  return (
    <>
      <Hero img={imgcontatti}>
        <h1>Contattaci al nostro numero di telefono</h1>
        <p>
          <span className="span-color">
            <AiOutlineArrowDown style={{ color: "#442607" }} size={40} />
            qui sotto{" "}
            <AiOutlineArrowDown style={{ color: "#442607" }} size={40} />
          </span>
        </p>
      </Hero>
      <Form />
    </>
  );
};

export default Contattiscreen;
