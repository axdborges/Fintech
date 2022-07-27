import "./styleB.css"
import {useState} from 'react'
import Lista from "../list"

function Filtros ({listaTransacoes, setListaTransacoes}) {
    
    const [filtroAtual, setFiltro] = useState([])
    const filtrar = (filtro) => {
        const filtrados = listaTransacoes.filter((elem) => {
            return elem.type === filtro
        })
        if(filtro === "todos") {setFiltro([...listaTransacoes])}
        else if (filtro === "entrada") {setFiltro([...filtrados])}
        else if (filtro === "saida") {setFiltro([...filtrados])}

    }
    
    return (
        <>  
            <div className="filtros">
                <div className="filtros-titulo">
                    <h4>Resumo financeiro</h4>
                </div>
                <div className="filtros-botoes">
                    <button onClick={()=> {return filtrar("todos")}}>Todos</button>
                    <button onClick={()=> {return filtrar("entrada")}}>Entradas</button>
                    <button onClick={()=> {return filtrar("saida")}}>Despesas</button>
                </div>
            </div>

            <Lista listaTransacoes={listaTransacoes}
            setListaTransacoes={setListaTransacoes}
            filtrado={filtroAtual}/>
        </>
    )
}

export default Filtros