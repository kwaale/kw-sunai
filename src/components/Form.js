import Input from './Input'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import FormDispositivo from './FormDispositivo'

//+56961203008
function Form() {
    const dispatch = useDispatch();
    const globalState = useSelector(globalState => globalState);
    
    console.log('globalState Form', globalState);
    

    return (
        <div className="App">
            <div>
                
                {/* <FormDispositivo /> */}
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