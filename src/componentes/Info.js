export const Info = (props) => {
  const { numeroPalabras, numeroCaracteres, longitudMediaPalabras } = props;
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
        Contiene 2 lenguaje/s de programación
        <ul>
          <li>JavaScript</li>
          <li>Java</li>
        </ul>
      </li>
    </ul>
  );
};
