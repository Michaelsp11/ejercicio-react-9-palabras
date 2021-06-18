export const Palabra = (props) => {
  const {
    palabra,
    resultado,
    setResultado,
    numeroPalabras,
    setNumeroPalabras,
    numeroCaracteres,
    setNumeroCaracteres,
  } = props;
  const { texto } = palabra;
  const agregarPalabra = () => {
    setResultado([
      ...resultado,
      {
        id: resultado.length + 1,
        texto:
          resultado.length === 0
            ? texto.charAt(0).toUpperCase() + texto.slice(1, texto.length)
            : texto,
      },
    ]);
    setNumeroPalabras(numeroPalabras + 1);
    setNumeroCaracteres(numeroCaracteres + texto.split("").length);
  };
  return <li onClick={agregarPalabra}>{texto}</li>;
};
