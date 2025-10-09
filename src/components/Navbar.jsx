import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { formatCLP } from "../utils/format";

const Navbar = () => {
  const { total } = useCart();
  const { token, logout } = useUser();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          🍕 Pizzería Mamma Mía
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="btn btn-outline-light me-2">
                🍕 Home
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2">
            {token ? (
              <>
                <Link to="/profile" className="btn btn-outline-light">
                  👤 Perfil
                </Link>
                <button onClick={logout} className="btn btn-outline-light">
                  🔒 Logout
                </button>
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

            <Link to="/cart" className="btn btn-success fw-bold">
              🛒 ${formatCLP(total)}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
