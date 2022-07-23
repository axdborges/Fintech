import "./styleT.css";
import { useState } from "react";

function TotalMoney({ listaTransacoes }) {
  const dinheiroTotal = listaTransacoes.reduce((prev, curr) => {
    return curr.type.toLowerCase() === "entrada" ? prev + curr.value : prev - curr.value;
  }, 0);

  return (
    <div className="total-card">
      <div className="total-linha">
        <h3 className="total-titulo">Valor total:</h3>
        <span className="total-dinheiro">$ {dinheiroTotal}</span>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
}

export default TotalMoney;
