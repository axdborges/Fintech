import "./style.css"
import { useState  } from "react"

function Form ({listaTransacoes, setListaTransacoes}) {

    const [valorInput, setValorInput] = useState("")
    const [valorInput2, setValorInput2] = useState("")
    const [valorOption, setValorOption] = useState("Entrada")


    return (
        <div className="pai-form">
            <form action="" onSubmit={(e) => {e.preventDefault()}}>
                <input type="text" placeholder="valor" value={valorInput} onChange={(e) => setValorInput(e.target.value)}/>
                <input type="text" placeholder="descricao" value={valorInput2} onChange={(e) => setValorInput2(e.target.value)} />
                <select name="" id="" value={valorOption} onChange={(e) => setValorOption(e.target.value)}>
                    <option >Entrada</option>
                    <option >Saida</option>
                </select>
                
                <button onClick={() => 
                    {return setListaTransacoes([...listaTransacoes, { 
                     description: valorInput2,
                     type: valorOption.toLowerCase(), value: parseInt(valorInput) }
                    ])}}>Inserir Valor</button>
            </form>
        </div>
    )
}

export default Form 