import React, {useRef} from 'react';
import actualizarResultado from '../../redux/store/Resultado/action';
import { connect } from 'react-redux';

// Siempre al iniciar lo que debemos hacer es que este componente
//debe recibir por parametros las acciones
const Formulario = ({actualizarResultado})=>{
    const resultadoRef = useRef(null);//Asigno una referencia
    const onButtonClick = () => {
        // Le paso el nuevo valor que esta dentro del input
        actualizarResultado(resultadoRef.current.value);
    }
    return (
        <div>
            Campo:
            <input type='text' ref={resultadoRef}></input>
            <button onClick={onButtonClick}>Guardar en Store</button>
        </div>
    )
}

//Se conecta con Redux: null = indica si desea recuperar algo de la "store"
//Se conecta el formulario con redux
//Le pasamos elementos que obtenemos del store, y le enviasmo
//elementos que cambien el valor del store
export default connect(null,{actualizarResultado})(Formulario);