export default function TitulosContext({ elSize, children }) {
  switch (elSize) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h3>{children}</h3>;
    default:
      throw Error("Título no definido..." + elSize);
  }
}
