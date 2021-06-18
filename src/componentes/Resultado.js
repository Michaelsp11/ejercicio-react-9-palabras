import PropTypes from "prop-types";
import { datosPalabraSchema } from "../schemas/datosSchemas";
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
Resultado.propTypes = {
  palabra: datosPalabraSchema,
  resultado: PropTypes.array.isRequired,
  numeroPalabras: PropTypes.number.isRequired,
  numeroCaracteres: PropTypes.number.isRequired,
  setResultado: PropTypes.func.isRequired,
  setNumeroPalabras: PropTypes.func.isRequired,
  setNumeroCaracteres: PropTypes.func.isRequired,
};
