//Creamos el store
import { createStore,combineReducers} from 'redux';
//Importamos los reducers que necesitemos
import resultadoReducer from './Resultado/reducer'
import contadorReducer from './Contador/reducer'

//Creación de los reducers
//Si ocupamos más reducer los vamos incorporando
const myReducers = combineReducers({
   resultadoReducer,
   contadorReducer
});

export default() => {
    return {
        //Se devuelve un objeto que incluye el "store" creado con "createStore()"
        //que recibe como parametros los "reducers" e información adicional ("Middleware")
        //Se incluye una línea para utilizar la extensión Redux DevTools
        ...createStore(myReducers,
            //Lo que estamos haciendo es a la creación de Store le asociamos una extensión
            //
            //Esto nos permite poder ver mis actions en la extensión redux devtools
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 
        )
    }
};