import React from "react";
import Hero from "../Components/Hero";
import { cardsHero } from "../links";
import Panelabout from "../Components/Panelabout";
import SmallPanelabout from "../Components/SmallPanelabout";

const Aboutscreen = () => {
  return (
    <>
      <Hero>
        <h1>Da anni passione e dedizione...</h1>
        <p>
          ...contattaci e{" "}
          <span className="span-color">chiedi un preventivo</span> per
          l'arredamento dei tuoi sogni
        </p>
      </Hero>
      <SmallPanelabout />
      <div className="d-lg-flex d-md-col mt-3 mb-4 mx-2">
        {cardsHero.map((card) => {
          return <Panelabout key={card.id} {...card} />;
        })}
      </div>
    </>
  );
};

export default Aboutscreen;
