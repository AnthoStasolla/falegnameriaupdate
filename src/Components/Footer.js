import React from "react";
import "./Footer.css";
import { FaRegClock, FaWhatsapp } from "react-icons/fa";
import { BiPhone } from "react-icons/bi";
import { SocialBar } from "../links";
import background from "../assets/immagini/carosel2.jpg";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white text-center text-lg-start">
        <div
          className="p-4 "
          style={{
            background: `url(${background})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="container my-4">
            <h2
              className="text-center mb-4"
              style={{
                color: "#f0dcc7",
                fontSize: "2.5rem",
                textShadow: "3px 3px 2px black",
                fontFamily: "Mulish, sans-serif",
                fontWeight: "bolder",
              }}
            >
              Contatti
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase text-center ">
                <FaRegClock className="icon-footer" />
              </h5>
              <p className="text-center text-footer">
                Dal Lunedì al Venerdì <br />
                Mattina: 08.00 - 12.30 | Pomeriggio: 14.30 - 19.00.
                <br /> Domenica chiuso
              </p>
            </div>

            <div id="contact" className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase text-center">
                <BiPhone className="icon-footer" />
              </h5>

              <p className="text-center text-footer">
                354/2256426565 <br /> puoi anche contattarci scrivendo su
                Whatsapp <FaWhatsapp className="icon-wa" />
                <br /> o inviarci una mail: francosta@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:_
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com - © 2018 Falegnameria Franco Stasolla © 2023
          </a>
          <SocialBar />
        </div>
      </footer>
    </>
  );
};

export default Footer;
