import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

const initialListaCompras = [];

export const CarritoProvider = ({ children }) => {
  const comprasReducer = (state = initialListaCompras, action = {}) => {
    switch (action.type) {
      case "[CARRITO] agregar cantidad":
        return [...state, action.payload];

      case "[CARRITO] aumentar cantidad": //To Do agregar cantidad y modificar
        return state.map((item) => {
          if (item.id === action.payload) {
            const cant = item.cantidad + 1;
            return { ...item, cantidad: cant };
          }
          return item;
        });

      case "[CARRITO] disminuir cantidad": //To Do agregar
        //console.log("state payload:", action.payload);
        return state.map((item) => {
          if (item.id === action.payload && item.cantidad > 1) {
            const cant = item.cantidad - 1;
            return { ...item, cantidad: cant };
          }
          return item;
        });

      case "[CARRITO] Eliminar Compra":
        //console.log("id recibido en provider", action.payload);
        return state.filter((compra) => compra.id !== action.payload);

      default:
        throw console.error.message;
      //return state ;
    }
  };

  const [listaCompras, dispatch] = useReducer(
    comprasReducer,
    initialListaCompras
  );

  const agregarCompra = (compra) => {
    compra.cantidad = 1;
    const action = {
      type: "[CARRITO] agregar cantidad",
      payload: compra,
    };
    dispatch(action);
  };

  const aumentarCantidad = (id) => {
    // console.log("aumentando:", id);
    const action = {
      type: "[CARRITO] aumentar cantidad",
      payload: id,
    };
    dispatch(action);
  };

  const disminuirCantidad = (id) => {
    const action = {
      type: "[CARRITO] disminuir cantidad",
      payload: id,
    };

    dispatch(action);
  };

  const eliminarCompra = (id) => {
    const action = {
      type: "[CARRITO] Eliminar Compra",
      payload: id,
    };

    dispatch(action);
  };

  const totalCompra = (compra) => {
    const initialValue = 0;
    const valorTotal = compra.reduce(
      (total, state) => total + state.cantidad,
      initialValue
    );
    return valorTotal;
  };

  return (
    <CarritoContext.Provider
      value={{
        listaCompras,
        agregarCompra,
        aumentarCantidad,
        disminuirCantidad,
        eliminarCompra,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
