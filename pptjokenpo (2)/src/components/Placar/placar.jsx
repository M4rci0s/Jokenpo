import React from "react";

function Placar({ vitoriasJogador, vitoriasComputador, empates }) {
  return (
    <div>
      <h2>Placar:</h2>
      <p>Jogador: {vitoriasJogador}</p>
      <p>Computador: {vitoriasComputador}</p>
      <p>Empates: {empates}</p>
    </div>
  );
}

export default Placar;
