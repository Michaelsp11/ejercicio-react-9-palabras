import { useState } from "react";
import { Formulario } from "./componentes/Formulario";
import { Info } from "./componentes/Info";
import { Palabra } from "./componentes/Palabra";
import { palabras as palabrasAPI } from "./datos/palabras";
function App() {
  const [palabras, setPalabras] = useState([...palabrasAPI]);
  return (
    <>
      <section className="palabras">
        <ul className="lista-palabras">
          {palabras.map(({ id, texto }) => (
            <Palabra key={id} texto={texto} />
          ))}
        </ul>
        <ul className="resultado"></ul>
      </section>
      <section className="crear-palabras">
        <Formulario />
      </section>
      <section className="info">
        <Info />
      </section>
    </>
  );
}

export default App;
