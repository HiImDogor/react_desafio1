import { Link } from "react-router-dom";
import { formatCLP } from "../utils/format";

const Navbar = () => {
  const total = 25000;
  const token = false; // cambiar a true para ver el otro estado

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark w-100"
      style={{ minHeight: "70px" }}
    >
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          🍕 Pizzería Mamma Mía
        </Link>

        {/* Botón hamburguesa solo para móvil */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenido del navbar */}
        <div className="collapse navbar-collapse" id="mainNav">
          {/* Links lado izquierdo */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="btn btn-outline-light me-2">
                🍕 Home
              </Link>
            </li>
          </ul>

          {/* Lado derecho */}
          <div className="d-flex align-items-center gap-2">
            {token ? (
              <>
                <Link to="/profile" className="btn btn-outline-light">
                  🔓 Profile
                </Link>
                <button className="btn btn-outline-light">🔒 Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-light">
                  🔐 Login
                </Link>
                <Link to="/register" className="btn btn-outline-light">
                  📝 Register
                </Link>
              </>
            )}

            {/* Carrito */}
            <Link to="/cart" className="btn btn-success fw-bold">
              🛒 Total: ${formatCLP(total)}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
