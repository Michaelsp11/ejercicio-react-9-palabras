export const Resultado = (props) => {
  const { palabra, resultado, setResultado } = props;
  const quitarPalabra = () => {
    setResultado(
      resultado.filter((palabraResultado) => palabraResultado.id !== palabra.id)
    );
  };
  return <li onClick={quitarPalabra}>{palabra.texto}</li>;
};
