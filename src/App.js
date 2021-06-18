import { useState } from "react";
import { Formulario } from "./componentes/Formulario";
import { Info } from "./componentes/Info";
import { Palabra } from "./componentes/Palabra";
import { Resultado } from "./componentes/Resultado";
import { palabras as palabrasAPI } from "./datos/palabras";
function App() {
  const [palabras, setPalabras] = useState([...palabrasAPI]);
  const [resultado, setResultado] = useState([]);
  return (
    <>
      <section className="palabras">
        <ul className="lista-palabras">
          {palabras.map(({ id, texto }) => (
            <Palabra
              key={id}
              texto={texto}
              resultado={resultado}
              setResultado={setResultado}
            />
          ))}
        </ul>
        <ul className="resultado">
          {resultado.map((palabra, i) => (
            <Resultado key={i} palabra={palabra} />
          ))}
        </ul>
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
