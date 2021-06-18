export const Info = (props) => {
  const { numeroPalabras, numeroCaracteres } = props;
  return (
    <ul>
      <li>
        Nº de palabras <span>{numeroPalabras}</span>
      </li>
      <li>
        Nº de caracteres <span>{numeroCaracteres}</span>
      </li>
      <li>
        Longitud media <span>5.32</span>
      </li>
      <li>
        Contiene 2 lenguaje/s de programación
        <ul>
          <li>JavaScript</li>
          <li>Java</li>
        </ul>
      </li>
    </ul>
  );
};
