export const Palabra = (props) => {
  const { texto, resultado, setResultado } = props;
  const agregarPalabra = () => {
    setResultado([...resultado, texto]);
  };
  return <li onClick={agregarPalabra}>{texto}</li>;
};
