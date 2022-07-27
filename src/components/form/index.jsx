import "./styleF.css"
import { useState  } from "react"

function Form ({listaTransacoes, setListaTransacoes}) {

    const [valorInput, setValorInput] = useState("")
    const [valorInput2, setValorInput2] = useState("")
    const [valorOption, setValorOption] = useState("Entrada")


    return (
        <div className="pai-form">
            <form className="box-form" action="" onSubmit={(e) => {e.preventDefault()}}>
                <label htmlFor="">Descrição</label>
                <input type="text" className="input-descricao" required={true} placeholder="descricao" value={valorInput2} onChange={(e) => setValorInput2(e.target.value)} />
                <label htmlFor="">Valor</label> 
                <input type="number"  className="input-valor" required={true} placeholder="valor" value={valorInput} onChange={(e) => setValorInput(e.target.value)}/>
                <label htmlFor="">Tipo</label> 
                <select name="" id="" value={valorOption} onChange={(e) => setValorOption(e.target.value)}>
                    <option >Entrada</option>
                    <option >Saida</option>
                </select>
                
                <button onClick={() => 
                    {   if(valorInput && valorInput2 !== ""){
                        return setListaTransacoes([...listaTransacoes, { 
                            description: valorInput2,
                            type: valorOption.toLowerCase(), value: parseInt(valorInput) }
                        ])}}
                    }
                        >Inserir Valor</button>
            </form>
        </div>
    )
}

export default Form 