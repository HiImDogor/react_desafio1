import { formatCLP } from "../utils/format";

const Navbar = () => {
  const total = 25000;
  const token = false; // cambia a true para ver el otro estado

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Pizzería Mamma Mía
        </a>

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

        <div className="collapse navbar-collapse" id="mainNav">
          {/* Home siempre visible */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="btn btn-outline-light me-2">🍕 Home</button>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2">
            {/* Condicional por token */}
            {token ? (
              <>
                <button className="btn btn-outline-light">🔓 Profile</button>
                <button className="btn btn-outline-light">🔒 Logout</button>
              </>
            ) : (
              <>
                <button className="btn btn-outline-light">🔐 Login</button>
                <button className="btn btn-outline-light">🔐 Register</button>
              </>
            )}

            {/* Total siempre visible */}
            <button className="btn btn-success">
              🛒 Total: ${formatCLP(total)}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
