export const Resultado = (props) => {
  const {
    palabra,
    resultado,
    setResultado,
    numeroPalabras,
    setNumeroPalabras,
  } = props;
  const quitarPalabra = () => {
    setResultado(
      resultado.filter((palabraResultado) => palabraResultado.id !== palabra.id)
    );
    setNumeroPalabras(numeroPalabras - 1);
  };
  return <li onClick={quitarPalabra}>{palabra.texto}</li>;
};
