
import './root.css';
import './reset.css';
import './App.css';
import { useState } from 'react'
import Form from './components/form/index.jsx';
import TotalMoney from './components/totalMoney';
import Iniciar from './components/telaInicio';
import Lista from './components/list';
import Filtros from './components/filtros';

function App() {

  const [listaTransacoes, setListaTransacoes ] = useState([])

  const [ estadoBotao, setEstadoBotao ] = useState(false)

  const voltaInicio = () => {
    setEstadoBotao(false)
  }

  
  return (
    <div className="App-header">
      { !estadoBotao ? <Iniciar onClick={() => setEstadoBotao(true)}/> :
        <div className="pai-detodos">
          <div className="meu-header">
            <h3><span>Nu </span> Kenzie</h3>
            <button onClick={() => voltaInicio()}>Início</button>
          </div>
          <div className="meubody">
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
          </div>
        </div>
        
    
      }
    </div>
  );
}

export default App;
