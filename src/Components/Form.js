import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <>
      <h1 className="text-contatti">INVIACI UNA MAIL</h1>
      <div className="container">
        <form className="form-container">
          <div className="form-outline mb-4">
            <input type="text" id="form4Example1" className="form-control" />
            <label className="form-label" htmlFor="form4Example1">
              NOME E COGNOME
            </label>
          </div>

          <div className="form-outline mb-4">
            <input type="email" id="form4Example2" className="form-control" />
            <label className="form-label" htmlFor="form4Example2">
              EMAIL
            </label>
          </div>

          <div className="form-outline mb-4">
            <textarea
              className="form-control"
              id="form4Example3"
              rows="4"
            ></textarea>
            <label className="form-label" htmlFor="form4Example3">
              SCRIVI IL TUO MESSAGGIO
            </label>
          </div>

          <div className="form-check d-flex justify-content-center mb-4">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="form4Example4"
              placeholder="Message here..."
            />
            <label className="form-check-label" htmlFor="form4Example4">
              Invia una copia del messaggio
            </label>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-block mb-4">
              Invia
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
