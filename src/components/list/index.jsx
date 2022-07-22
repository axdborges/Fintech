import "./style.css"
import { useState } from "react"
import Card from "../card"
import Filtros from "../filtros"

function Lista ({listaTransacoes, setListaTransacoes, filtro}) {
    
   return listaTransacoes.map((elem,index) => {
        return (
            <Card transacao={elem} key={index} 
            id={index}
            setListaTransacoes={setListaTransacoes}
            listaTransacoes={listaTransacoes} />
        )
   }) 
}

export default Lista