import "./footer.css";

export function Footer({ filters }) {
  return (
    <footer className="footer">
      <h4>Prueba técnica de React</h4>
      <h5>
        Shopping Cart con useContext & useReducer
        {JSON.stringify(filters, null, 2)}
      </h5>
    </footer>
  );
}
