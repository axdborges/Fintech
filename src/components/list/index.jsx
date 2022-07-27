import "./styleLT.css"
import { useState } from "react"
import Card from "../card"
import Filtros from "../filtros"

function Lista ({listaTransacoes, setListaTransacoes, filtrado}) {
    return ( 
        <> 
            { filtrado.length ===0 ? 
                listaTransacoes.length === 0 ? <div> <h2>Você ainda não tem nenhum lançamento</h2> </div>
                :  
                listaTransacoes.map((elem,index) => {
                    return (
                        <Card transacao={elem} key={index} 
                        id={index}
                        setListaTransacoes={setListaTransacoes}
                        listaTransacoes={listaTransacoes} />
                    )
                })
              :

               filtrado.map((elem,index) => {
                    return (
                        <Card transacao={elem} key={index} 
                        id={index}
                        setListaTransacoes={setListaTransacoes}
                        listaTransacoes={listaTransacoes}
                        filtrado={filtrado} />
                    )
                }) 
            } 

        </>  
    ) 
}

export default Lista