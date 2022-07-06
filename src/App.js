import logo from './logo.svg';
import './App.css';
import { QuejaFormulario } from './PAGES/QuejaFormulario';
import { Route, Routes } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { checkToken, Login } from './PAGES/Login';
import { MesaPartes } from './PAGES/MesaPartes';
import { Busqueda } from './PAGES/QUEJAS_RECLAMOS/Busqueda';
import { Entrada } from './PAGES/pagesLogin/Entrada';
import { MesaPartes_Post } from './PAGES/pagesLogin/ExtencionesCompartidas/MesaPartes_Post';
import React ,{ useRef } from 'react';
import { Toast } from 'primereact/toast';

function App() {

  const loggedin=useSelector(state =>state.auth.loggedIn);
  const toast = useRef(null).current;


  checkToken();
  
  function eleccion1(a){
    if(loggedin===true){

 
    
       return a

   
   }else {


     return <Login/>
     }  
 
    }

  return (
    <div className="App">
    <Toast ref={toast} />
  
      <Routes>
    <Route path='/Login' element={<Login/>} />
    <Route path='/Entrada' element={eleccion1(<Entrada/>)} />
    <Route path='/MesaPartes/Respuesta' element={eleccion1(<MesaPartes_Post/>)} />
    <Route path='/MesaPartes/Formulario' element={<QuejaFormulario/>} />
    <Route path='/MesaPartes/Busqueda-Solicitud' element={<Busqueda/>} />
<Route path='/MesaPartes' element={ <MesaPartes/>}  />
</Routes>
  
    </div>
  );
}

export default App;
