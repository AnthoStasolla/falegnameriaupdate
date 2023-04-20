import React from "react";
import { FaFacebook, FaInstagram, FaGooglePlus } from "react-icons/fa";
import zonagiorno from "./assets/immagini/zonagiornohome.jpeg";
import cucine from "./assets/immagini/cucinahome.jpeg";
import bagni from "./assets/immagini/bagnohome.jpeg";
import attcommerciali from "./assets/immagini/attcommercialihome.jpeg";
import soppalchi from "./assets/immagini/soppalchi home.jpeg";
import tavoli from "./assets/immagini/tavolohome.jpeg";

const socialLinks = [
  {
    id: 1,
    url: "https://instagram.com",
    icon: (
      <FaInstagram
        className="icon"
        style={{
          color: "violet",
          width: "30px",
          height: "30px",
        }}
      />
    ),
  },
  {
    id: 2,
    url: "https://facebook.com",
    icon: (
      <FaFacebook className="icon" style={{ width: "30px", height: "30px" }} />
    ),
  },
  {
    id: 3,
    url: "https://google.com",
    icon: (
      <FaGooglePlus
        className="icon"
        style={{
          color: "red",
          width: "30px",
          height: "30px",
        }}
      />
    ),
  },
];

export const SocialBar = () => {
  return (
    <ul className="social">
      {socialLinks.map((el) => {
        const { id, url, icon } = el;
        return (
          <li key={id}>
            <a href={url} alt="social">
              {icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export const cardsHero = [
  {
    id: 0,
    titolo: "Zona Giorno",
    img: zonagiorno,
  },
  {
    id: 1,
    titolo: "Cucine",
    img: cucine,
  },
  {
    id: 2,
    titolo: "Bagni",
    img: bagni,
  },
  {
    id: 3,
    titolo: "Soppalchi",
    img: soppalchi,
  },
  {
    id: 4,
    titolo: "Attività Commerciali",
    img: attcommerciali,
  },
  {
    id: 5,
    titolo: "Tavoli e altro",
    img: tavoli,
  },
];
