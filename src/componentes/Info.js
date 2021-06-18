import { Lenguaje } from "./Lenguaje";

export const Info = (props) => {
  const {
    numeroPalabras,
    numeroCaracteres,
    longitudMediaPalabras,
    listaLenguajes,
  } = props;
  return (
    <ul>
      <li>
        Nº de palabras <span>{numeroPalabras}</span>
      </li>
      <li>
        Nº de caracteres <span>{numeroCaracteres}</span>
      </li>
      <li>
        Longitud media <span>{longitudMediaPalabras}</span>
      </li>
      <li>
        Contiene {listaLenguajes.length} lenguaje/s de programación
        <ul>
          {listaLenguajes.map((lenguaje, i) => (
            <Lenguaje key={i} lenguaje={lenguaje.texto} />
          ))}
        </ul>
      </li>
    </ul>
  );
};
