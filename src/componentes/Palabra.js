export const Palabra = (props) => {
  const { palabra, resultado, setResultado } = props;
  const agregarPalabra = () => {
    setResultado([
      ...resultado,
      { id: resultado.length + 1, texto: palabra.texto },
    ]);
  };
  return <li onClick={agregarPalabra}>{palabra.texto}</li>;
};
