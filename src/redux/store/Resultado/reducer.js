//Inicializa el estado
//Es vacio porque estamos inicializado la aplicación y lo queremos vacio
const initialState = {resultado: ""};

export default(state=initialState, action)=>{
    //Valida el tipo de 'action' de acuerdo a cada identificador
    switch(action.type){
        case 'ACTUALIZAR_RESULTADO':
            return{
                ...state,//Retorna todo lo que había en el 'store'
                resultado: action.payload + " - Modificada" //resultado toma el valor nuevo
            };
            default: //Si no se modifica retorna el estado inicial
                return state;
    }
}

//Se exporta esta opción para devolver el valor de "resultado" del "state"
//Aqui se obtiene el valor del stado y ese estado por medio
//de su reducer obtiene el valor actual
export const selectActiveResultado = state => state.resultadoReducer.resultado;