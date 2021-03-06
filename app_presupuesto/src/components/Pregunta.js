import React, {Fragment, useState } from 'react';
import Error from './Error';
import ProTypes from 'prop-types'


const Pregunta = ({setPresupuesto, setRestante, setMostrarPregunta}) => {
    //State 
    const [cantidad,setCantidad] = useState(0);
    const [error, setError] = useState(false);
    //Funcion que lee presupuesto
    const definirPresupuesto = e =>{
        setCantidad(parseInt(e.target.value, 10));

    }

    //Submit de presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault();

        //Validar
if (cantidad<1 || isNaN(cantidad)){
    setError(true);
    return;
}
        //Si pasa la validacion
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostrarPregunta(false);


    }
    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {
                error ? <Error
                mensaje="El presupuesto es incorrecto"
                />: null
            }
            <form onSubmit={agregarPresupuesto}>
                <input
                type="number"
                className="u-full-width"
                placeholder="Coloca tu presupuesto"
                onChange={definirPresupuesto}
                />
                <input
                type="submit"
                className="button-primary u-full-width"
                value="Definir Presupuesto"
                />
            </form>
        </Fragment>
     );
} 
Pregunta.protoType = {
    setPresupuesto: ProTypes.func.isRequired,
    setRestante: ProTypes.func.isRequired,
    setMostrarPregunta: ProTypes.func.isRequired
}
 
export default Pregunta;