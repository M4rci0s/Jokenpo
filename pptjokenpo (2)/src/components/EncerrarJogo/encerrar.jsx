import React from "react";

function EncerrarJogo({ encerrarJogo, reiniciarJogo }) {
  return (
    <div>
      <button onClick={encerrarJogo}>Encerrar Jogo</button>
      <button onClick={reiniciarJogo}>Jogar Novamente</button>
    </div>
  );
}

export default EncerrarJogo;
