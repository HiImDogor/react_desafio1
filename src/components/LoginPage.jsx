import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("❌ Todos los campos son obligatorios");
      return;
    }
    if (password.length < 6) {
      setMessage("❌ La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setMessage("✅ Login exitoso!");
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        width: "100vw", // ocupa todo el ancho del viewport
        height: "100vh", // ocupa todo el alto del viewport
        margin: 0,
        padding: 0,
        backgroundColor: "#f8f9fa", // fondo claro
      }}
    >
      <h2 className="mb-4">Iniciar Sesión</h2>

      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", maxWidth: "1200px", padding: "0 2rem" }}
      >
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Iniciar Sesión
        </button>

        {message && (
          <div
            className={`alert mt-3 text-center ${
              message.includes("✅") ? "alert-success" : "alert-danger"
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
