//Nombre del método de la acción
//Que recibe como parametro lo que desea modificar
//y devuelve un objeto con dos parametros
    //El identificador de la operación que se ejecuta
    //y lo que se va a modificar


    //cuando invoquemos nuestra acción  desde un componente
    //resultado recibe un valor que es el parametro a recibir
const actualizarResultado = resultado =>{
    return{

        //La logica de aqui es solo obtener un valor y pasarlo
        //así como esta al payload
        
        type: 'ACTUALIZAR_RESULTADO',//Le asignamos un tipo, que es un nombre que queramos, 
                                    //que sea facil de identificar y en mayuscula
        payload: resultado //El payload es la información que le trasmitimos al reducer
    }
}

export default actualizarResultado;