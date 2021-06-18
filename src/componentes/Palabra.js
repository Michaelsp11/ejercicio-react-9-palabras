export const Palabra = (props) => {
  const { palabra, resultado, setResultado } = props;
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
  };
  return <li onClick={agregarPalabra}>{texto}</li>;
};
