import Input from './Input';
import {useState} from 'react';
import { useDispatch } from 'react-redux'


function FormCliente({handleChange}) {

    return (
        <div className="App">
            <Input name2={'Nombre Cliente'} name={'nameClient'} handleChange={handleChange} />
            <Input name2={'Nombre Planta'} name={'namePlant'} handleChange={handleChange} />
            <button
                onClick={() => {
                    // dispatch({ type: 'Cargar', payload: {} })

                }} >Cargar</button>

        </div>
    );
}
export default FormCliente;