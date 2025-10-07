import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center text-center"
      style={{ minHeight: "80vh" }}
    >
      <h1 className="display-3 fw-bold text-danger">404</h1>
      <p className="fs-4 mb-4">Oops... página no encontrada 😅</p>
      <Link to="/" className="btn btn-outline-dark">
        Volver al inicio 🍕
      </Link>
    </div>
  );
};

export default NotFound;
