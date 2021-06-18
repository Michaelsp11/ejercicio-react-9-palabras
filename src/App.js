import { useState } from "react";
import { Formulario } from "./componentes/Formulario";
import { Info } from "./componentes/Info";
import { Palabra } from "./componentes/Palabra";
import { Resultado } from "./componentes/Resultado";
import { palabras as palabrasAPI } from "./datos/palabras";
function App() {
  const [palabras, setPalabras] = useState([...palabrasAPI]);
  const [resultado, setResultado] = useState([]);
  const [numeroPalabras, setNumeroPalabras] = useState(0);
  const [numeroCaracteres, setNumeroCaracteres] = useState(0);
  return (
    <>
      <section className="palabras">
        <ul className="lista-palabras">
          {palabras.map((palabra) => (
            <Palabra
              key={palabra.id}
              palabra={palabra}
              resultado={resultado}
              setResultado={setResultado}
              numeroPalabras={numeroPalabras}
              setNumeroPalabras={setNumeroPalabras}
              numeroCaracteres={numeroCaracteres}
              setNumeroCaracteres={setNumeroCaracteres}
            />
          ))}
        </ul>
        <ul className="resultado">
          {resultado.map((palabra) => (
            <Resultado
              key={palabra.id}
              palabra={palabra}
              resultado={resultado}
              setResultado={setResultado}
              numeroPalabras={numeroPalabras}
              setNumeroPalabras={setNumeroPalabras}
              numeroCaracteres={numeroCaracteres}
              setNumeroCaracteres={setNumeroCaracteres}
            />
          ))}
        </ul>
      </section>
      <section className="crear-palabras">
        <Formulario />
      </section>
      <section className="info">
        <Info
          numeroPalabras={numeroPalabras}
          numeroCaracteres={numeroCaracteres}
        />
      </section>
    </>
  );
}

export default App;
