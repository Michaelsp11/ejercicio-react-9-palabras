import PropTypes from "prop-types";

export const datosPalabraSchema = PropTypes.shape({
  id: PropTypes.number.isRequired,
  texto: PropTypes.string.isRequired,
  isLenguaje: PropTypes.bool.isRequired,
}).isRequired;
