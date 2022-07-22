import "./style.css"
import { useState } from "react"

function Card ({transacao , id, listaTransacoes, setListaTransacoes }) {

  const filtra = () => {
    const filtrados = listaTransacoes.filter((elem, index) => {
      return index !== id
    })
    setListaTransacoes(filtrados)
  }



  return (
    <div className="card" >
      <h3 className="titulo">{transacao.description}</h3>
        {
          transacao.type.toLowerCase() === "entrada" ? 
          <>  
            <p className="descricao-verde">{transacao.type}</p>
            <p className="valor">R$ {transacao.value},00</p>
          </>
          
            : 
          <>
            <p className="descricao-cinza">{transacao.type}</p>
            <p className="valor">R$ -{transacao.value},00</p>
          </>
          
        }
      
      <button className="excluir-transacao" onClick={() => filtra()}>Excluir</button>
    </div>  
  )
}

export default Card