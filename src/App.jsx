import './App.css';
import { useState } from 'react'
import Form from './components/form/index.jsx';
import TotalMoney from './components/totalMoney';
import Iniciar from './components/telaInicio';
import Lista from './components/list';
import Filtros from './components/filtros';

function App() {

  const [listaTransacoes, setListaTransacoes ] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saida", value: 150 }
  ])

  const [ estadoBotao, setEstadoBotao ] = useState(false)

  
  return (
    <div className="App-header">
      { !estadoBotao ? <Iniciar onClick={() => setEstadoBotao(true)}/> :
        <>
          <div className="lateral">
            <Form 
            listaTransacoes={listaTransacoes} 
            setListaTransacoes={setListaTransacoes}
            />
            <TotalMoney listaTransacoes={listaTransacoes} />
          </div>
          <div className="container-cards">
            <Filtros 
            listaTransacoes={listaTransacoes}
            setListaTransacoes={setListaTransacoes}/>
            
          </div>
          
        </>
      }
    </div>
  );
}

export default App;
