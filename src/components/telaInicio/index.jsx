import "./style.css"

function Iniciar ({onClick}) {
    
    return (
        <div className="inicio">
            <h1 className="boasvindas">Centralize o controle das suas finanças</h1>
            <button className="iniciar" onClick={onClick}>Iniciar</button>
        </div>
    )
}

export default Iniciar