import PropTypes from "prop-types";
import { datosPalabraSchema } from "../schemas/datosSchemas";
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
        isLenguaje: palabra.isLenguaje,
      },
    ]);
    setNumeroPalabras(numeroPalabras + 1);
    setNumeroCaracteres(numeroCaracteres + texto.split("").length);
  };
  return <li onClick={agregarPalabra}>{texto}</li>;
};
Palabra.propTypes = {
  palabra: datosPalabraSchema,
  resultado: PropTypes.array.isRequired,
  numeroPalabras: PropTypes.number.isRequired,
  numeroCaracteres: PropTypes.number.isRequired,
  setResultado: PropTypes.func.isRequired,
  setNumeroPalabras: PropTypes.func.isRequired,
  setNumeroCaracteres: PropTypes.func.isRequired,
};
