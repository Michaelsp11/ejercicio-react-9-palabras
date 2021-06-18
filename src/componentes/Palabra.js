export const Palabra = (props) => {
  const {
    palabra,
    resultado,
    setResultado,
    numeroPalabras,
    setNumeroPalabras,
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
  };
  return <li onClick={agregarPalabra}>{texto}</li>;
};
