import "./styleI.css";
import "../../root.css";
import logo from './inicio.png'

function Iniciar({ onClick }) {
  return (
    <div className="body-inicio">
      <div className="inicio">
        <h3>
          <span>Nu </span>Kenzie
        </h3>
        <h1 className="boasvindas">Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button className="iniciar" onClick={onClick}>
          Iniciar
        </button>
      </div>
      <figure>
        <img src={logo} alt="" />
      </figure>
    </div>
  );
}

export default Iniciar;
