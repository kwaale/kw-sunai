const initialState = {
  nameClient: '',
  namePlant: '',
  dispositivos: []
}

//Funcion generadora del ID
const getId = () => {
  let initialId = 0;
  return () => {
    return initialId++;
  }
}
const newId = getId();

function reducer(state = initialState, action) {
  if (action.type === "AGREGAR_DISPOSITIVO") {
    console.log('state.dispositivos gf', state.dispositivos)
    return {
      ...state,
      dispositivos: [...state.dispositivos,
      {
        serialNumber: 'sdfdsf',
        quantity: 1,
        id: newId()
      }
      ]
    }
  }
  if (action.type === "ELIMINAR_DISPOSITIVO") {
    console.log('state ELIMINAR_DISPOSITIVO', action.payloadstate);
    return {
      ...state,
      dispositivos: state.dispositivos.filter(d => d.id !== action.payload)
    };
  }
  return state;
}

export default reducer;