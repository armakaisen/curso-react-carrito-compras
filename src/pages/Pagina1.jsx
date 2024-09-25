import TitulosContext from "../context/TitulosContext";
export const Pagina1 = () => {
  return (
    <div className="container">
      <TitulosContext elSize={1}>Pagina1</TitulosContext>
      <hr />
      <div>
        <TitulosContext elSize={2}>Sub-titulo de la página</TitulosContext>
      </div>
    </div>
  );
};
