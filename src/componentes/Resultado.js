export const Resultado = (props) => {
  const {
    palabra,
    resultado,
    setResultado,
    numeroPalabras,
    setNumeroPalabras,
    numeroCaracteres,
    setNumeroCaracteres,
  } = props;
  const quitarPalabra = () => {
    setResultado(
      resultado.filter((palabraResultado) => palabraResultado.id !== palabra.id)
    );
    setNumeroPalabras(numeroPalabras - 1);
    setNumeroCaracteres(numeroCaracteres - palabra.texto.split("").length);
  };
  return <li onClick={quitarPalabra}>{palabra.texto}</li>;
};
