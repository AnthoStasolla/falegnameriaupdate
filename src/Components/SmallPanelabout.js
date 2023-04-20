import React from "react";
import "./SmallPanelabout.css";
import backgroundpanel from "../assets/immagini/carosel2.jpg";

const SmallPanelabout = () => {
  return (
    <>
      <div
        className="p-5 w-100 mt-5 "
        style={{
          background: `url(${backgroundpanel})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <h5 className="content-text">
            L'Arredamento Con il <span className="span-color">TUO</span> Stile!
          </h5>
          <p className="content-text text-center">
            Mobili Su Misura Sempre <span className="span-color">UNICI</span>!
          </p>
        </div>
      </div>
    </>
  );
};

export default SmallPanelabout;
