import Input from './Input'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import FormDispositivo from './FormDispositivo'

//+56961203008
function Form() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log('state Form', state);
    return (
        <div className="App">
            <div>
                <Input name2={'Nombre Cliente'} name={'nameClient'} />
                <Input name2={'Nombre Planta'} name={'namePlant'} />
                <button
                    onClick={() => dispatch({ type: 'AGREGAR_DISPOSITIVO' })} >Agregar Dispositivo</button>
                <FormDispositivo/>
                <button
                    onClick={() => {
                        dispatch({ type: 'IMPRIMIR' })
                        console.log('Ver')
                    }} >Boton 2</button>
            </div>
        </div>
    );
}
export default Form;