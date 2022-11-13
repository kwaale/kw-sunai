import Input from './Input'
import { useDispatch,useSelector } from "react-redux";



function FormDispositivo() {
    const state = useSelector(state => state);
    console.log('state formDispositivo', state)

    const dispatch = useDispatch();
    // const state = useSelector(state => state);
    // console.log('state', state);
    return (
        <div className="App">
            Dispositivo nuevo
            <div>
                {state.dispositivos?.map((disp) => {
                    return (
                        <div key={disp.id}>
                            <Input key={disp.id.toString() + 'a'} name2={'Numero de Serie Panel Solar'} name={'serialNumber'} />
                            <Input key={disp.id.toString() + 'b'}name2={'Cantidad'} name={'quantity'} />
                            <button onClick={()=>dispatch({type: 'ELIMINAR_DISPOSITIVO', payload : disp.id})}>Eliminar</button>
                        </div>
                    )
                })}
            
            </div>
        </div>
    );
}
export default FormDispositivo;