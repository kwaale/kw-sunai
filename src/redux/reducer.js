const initialState = {
  nameClient: '',
  namePlant: '',
  devices: []
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
  if (action.type === "CARGA_CLIENTE") {
    console.log('state.devices gf', state.devices)
    return {
      ...state,
      devices: [...state.devices,
      {
        serialNumber: 'sdfdsf',
        quantity: 1,
        id: newId()
      }
      ]
    }
  }
  if (action.type === "AGREGAR_DISPOSITIVO") {
    console.log('state.devices gf', state.devices)
    return {
      ...state,
      devices: [...state.devices,
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
      devices: state.devices.filter(d => d.id !== action.payload)
    };
  }
  return state;
}

export default reducer;