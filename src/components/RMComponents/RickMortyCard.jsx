import React from "react";
import "./RickMortyCard.css";

function RickMortyCard({ personaje }) {
  return (
    <>
      <article className="rm-card rounded shadow-sm">
        <div className="left-container">
          <img src={personaje.image} alt={personaje.name} rounded />
        </div>
        <div className="rigth-container">
          <div className="section">
            <h2 className="text-white m-0 p-0">{personaje.name}</h2>
            <span className="status">
              {personaje.status} - {personaje.species}
            </span>
          </div>
          <div className="section">
            <p className="m-0 text-secondary">Última ubicación conocida</p>
            <span>{personaje.location.name}</span>
          </div>
          <div className="section">
          <p className="m-0 text-secondary">Origen</p>
            <span>{personaje.origin.name}</span>
          </div>
        </div>
      </article>
    </>
  );
}

export default RickMortyCard;
