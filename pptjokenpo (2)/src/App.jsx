import React, { useState } from "react";
import Jogo from "../src/components/Jogo/jogo";
import Placar from "./components/Placar/placar";
import EncerrarJogo from "../src/components/EncerrarJogo/encerrar";
import "./components/Jogo/Jogo.module.css";

function App() {
  const [vitoriasJogador, setVitoriasJogador] = useState(0);
  const [vitoriasComputador, setVitoriasComputador] = useState(0);
  const [empates, setEmpates] = useState(0);
  const [jogoEncerrado, setJogoEncerrado] = useState(false);

  const reiniciarJogo = () => {
    setVitoriasJogador(0);
    setVitoriasComputador(0);
    setEmpates(0);
    setJogoEncerrado(false);
  };

  const encerrarJogo = () => {
    setJogoEncerrado(true);
  };

  return (
    <div>
      <h1>Pedra, Papel, Tesoura</h1>
      <Placar
        vitoriasJogador={vitoriasJogador}
        vitoriasComputador={vitoriasComputador}
        empates={empates}
      />
      {!jogoEncerrado && (
        <Jogo
          setVitoriasJogador={setVitoriasJogador}
          setVitoriasComputador={setVitoriasComputador}
          setEmpates={setEmpates}
        />
      )}
      <EncerrarJogo encerrarJogo={encerrarJogo} reiniciarJogo={reiniciarJogo} />
    </div>
  );
}

export default App;
