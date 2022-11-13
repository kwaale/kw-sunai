import Form from './components/Form';
import Inicio from './components/Inicio'
import FormCliente from './components/FormCliente'
import { Route, Routes } from 'react-router-dom';
import {useState} from 'react';
import { useDispatch } from 'react-redux'

import './App.css';

function App() {
  const [formState, setFormState] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("formState", formState);
    setFormState({
      ...formState,
      [name]: value
    })
  }

  return (
    <div className="App">
      Sunai
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/cliente' element={<FormCliente handleChange={handleChange}/>} />
        {/* <Route path='/detalle' element={<MovieDetail />} /> */}
        {/* <Route path='/results' element={<Resultados />} /> */}
        {/* <Route path='/detalle1' element={<MovieDetail />} /> */}
      </Routes>
    </div>
  );
}

export default App;
