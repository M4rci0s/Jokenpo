import React, { useState } from "react";
import pedraImg from "../../../src/assets/pedra.png";
import papelImg from "../../../src/assets/papel.png";
import tesouraImg from "../../../src/assets/tesoura.png";

function Jogo({ setVitoriasJogador, setVitoriasComputador, setEmpates }) {
  const [escolhaComputador, setEscolhaComputador] = useState(null);

  const opcoes = [
    { nome: "Pedra", imagem: pedraImg },
    { nome: "Papel", imagem: papelImg },
    { nome: "Tesoura", imagem: tesouraImg },
  ];

  const jogar = (escolhaJogador) => {
    const escolhaComp = opcoes[Math.floor(Math.random() * 3)];
    setEscolhaComputador(escolhaComp);

    if (escolhaJogador === escolhaComp.nome) {
      setEmpates((empates) => empates + 1);
    } else if (
      (escolhaJogador === "Pedra" && escolhaComp.nome === "Tesoura") ||
      (escolhaJogador === "Papel" && escolhaComp.nome === "Pedra") ||
      (escolhaJogador === "Tesoura" && escolhaComp.nome === "Papel")
    ) {
      setVitoriasJogador((vitorias) => vitorias + 1);
    } else {
      setVitoriasComputador((vitorias) => vitorias + 1);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Faça sua escolha:</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {opcoes.map((opcao) => (
          <button
            key={opcao.nome}
            onClick={() => jogar(opcao.nome)}
            style={{ border: "none", background: "none" }}
          >
            <img
              src={opcao.imagem}
              alt={opcao.nome}
              style={{ width: "100px", height: "100px" }}
            />
          </button>
        ))}
      </div>
      {escolhaComputador && (
        <div style={{ marginTop: "20px" }}>
          <h3>Escolha do Computador:</h3>
          <img
            src={escolhaComputador.imagem}
            alt={escolhaComputador.nome}
            style={{ width: "100px", height: "100px" }}
          />
          <p>{escolhaComputador.nome}</p>
        </div>
      )}
    </div>
  );
}

export default Jogo;
