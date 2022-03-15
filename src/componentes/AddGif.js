import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const AddGif = ({ setGifs }) => {
  const [valorEntrada, setValorEntrada] = useState("");

  const cargaValor = (e) => {
    setValorEntrada(e.target.value);
  };

  const enviosubmit = (e) => {
    e.preventDefault();

    if (valorEntrada.trim().length > 2) {
      setGifs((gif) => [valorEntrada, ...gif]);
      setValorEntrada("");
    }
  };
  return (
    <form onSubmit={enviosubmit}>
      <input type='text' value={valorEntrada} onChange={cargaValor} />
    </form>
  );
};

export default AddGif;
AddGif.propTypes = {
  setGifs: PropTypes.func.isRequired,
};
