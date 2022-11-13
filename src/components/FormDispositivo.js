import Input from './Input';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";



function FormDispositivo({handleChange}) {
    const [stateDispo, setStateDispositivo] = useState();
    console.log('stateDispo formDispositivo', stateDispo)

    const dispatch = useDispatch();
  


    const cargaDivice = ()=>{

    }

    return (
        <div className="App">
            Panel Solar
            <div>
                <button
                    onClick={() => dispatch({ type: 'AGREGAR_device' })} >Agregar device</button>
                        <div >
                            {/* <Input name2={'Numero de Serie'} name={'serialNumber'} handleChange={handleChange}/>
                            <Input name2={'Cantidad'} name={'quantity'} handleChange={handleChange}/> */}
                            <button onClick={()=>cargaDivice()}>Eliminar</button>
                        </div>
            </div>
        </div>
    );
}
export default FormDispositivo;