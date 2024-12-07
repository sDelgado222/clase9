import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Debemos importar el "store"
import storeF from './redux/store'

//Importamos un paquete Provider que es para conectar a Redux con react, es como un puente
import {Provider} from 'react-redux';

const store = storeF()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Provider es un componente que tiene como descendiente el componente
  //principal de la aplicación, en este caso es "App" y se le pasa como
  //propiedad el store
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
