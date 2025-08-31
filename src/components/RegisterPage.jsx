import { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirm) {
      setMessage("❌ Todos los campos son obligatorios");
      return;
    }
    if (password.length < 6) {
      setMessage("❌ La contraseña debe tener al menos 6 caracteres");
      return;
    }
    if (password !== confirm) {
      setMessage("❌ Las contraseñas no coinciden");
      return;
    }

    setMessage("✅ Registro exitoso!");
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        width: "100vw", // ancho completo del viewport
        height: "100vh", // alto completo
        margin: 0,
        padding: 0,
        backgroundColor: "#f8f9fa", // color claro para ver el área
      }}
    >
      <h2 className="mb-4">Registro</h2>

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

        <div className="mb-3">
          <label>Confirmar contraseña</label>
          <input
            type="password"
            className="form-control"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Registrarse
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

export default RegisterPage;
