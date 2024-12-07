import React from "react";
import { connect } from "react-redux";
import { selectActiveResultado } from "../../redux/store/Resultado/reducer";

const Resultado = ({resultado})=>
    <div>
        {resultado}
    </div>

//Se crea la función para acceder al contenido del "store"
//Se obtiene el state del store
const mapStateToProps = state =>{
    return{
        //se descarga en la variable resultado
        //por medio de la opcion lo que hace es
        //selecionar el estado actual la cual fue creada en Reducer.js de Store
        resultado: selectActiveResultado(state)
    }
}

//Se conecta con la "store" de Redux: se quita el segundo parametro que 
//era la función que modificaba el store
//Se incluye el método que recupera el valor del "store"
//Como vamos a obtener valores del store debemos hacer la conección a redux
export default connect(mapStateToProps)(Resultado);