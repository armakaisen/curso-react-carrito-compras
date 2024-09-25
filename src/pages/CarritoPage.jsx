import { useContext } from "react";
import "../style/carritoPage.css";
import { CarritoContext } from "../context/CarritoContext";

export const CarritoPage = () => {
  const calcularTotal = () => {
    return listaCompras
      .reduce((total, item) => total + item.cantidad * item.price * 6500, 0)
      .toFixed(2);
  };

  /*  const prueba = (id) => {
    console.log("el id recibido:", id);
  }; */

  const {
    listaCompras,
    agregarCompra,
    aumentarCantidad,
    disminuirCantidad,
    eliminarCompra,
  } = useContext(CarritoContext);

  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Elimnar</th>
          </tr>
        </thead>
        <tbody>
          {listaCompras.map((item) => (
            <tr key={item.id}>
              <th>{item.title}</th>
              <td>{item.price}</td>
              <td>
                <button
                  className="btn btn-light"
                  onClick={() => disminuirCantidad(item.id)}
                >
                  -
                </button>
                <button className="btn btn-primary">{item.cantidad}</button>
                <button
                  className="btn btn-light"
                  onClick={() => aumentarCantidad(item.id)}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => eliminarCompra(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          <th>Total:</th>
          <td></td>
          <td>Gs. {new Intl.NumberFormat().format(calcularTotal())}</td>
          <td></td>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button className="btn btn-primary">Comprar</button>
      </div>
    </>
  );
};
