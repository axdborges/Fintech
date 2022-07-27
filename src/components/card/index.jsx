import "./styleC.css"
import { useState } from "react"
import{FaTrashAlt} from 'react-icons/fa'

function Card ({transacao , id, listaTransacoes, setListaTransacoes , filtrado}) {
  const filtra = () => {
    if(filtrado === undefined) {
      const filtrados = listaTransacoes.filter((elem, index) => {
        return index !== id
      })
      setListaTransacoes(filtrados)
    } else {
      const achado = filtrado.find((elem, index) => {
        return index === id
      })
      const indexAchado = listaTransacoes.indexOf(achado)
      const arrayNovo = [...listaTransacoes]
      setListaTransacoes(arrayNovo.splice(indexAchado, 1,))
    }
    
  }



  return (
    <div className="card" >
      
        {
          transacao.type.toLowerCase() === "entrada" ? 
          <>  
            <h3 className="titulo-verde">{transacao.description}</h3>
            <p className="descricao">{transacao.type}</p>
            <p className="valor">R${transacao.value},00</p>
          </>
          
            : 
          <>
            <h3 className="titulo">{transacao.description}</h3>
            <p className="descricao">{transacao.type}</p>
            <p className="valor-vermelho">R$ -{transacao.value},00</p>
          </>
          
        }
      
      <button className="excluir-transacao" onClick={() => filtra()}><FaTrashAlt/></button>
    </div>  
  )
}

export default Card