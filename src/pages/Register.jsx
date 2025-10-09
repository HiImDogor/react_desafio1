import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Register = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { register, loading } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ok = await register(form.email, form.password);
    if (ok) navigate("/profile");
  };

  return (
    <div className="container py-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center mb-4">📝 Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-dark w-100" disabled={loading}>
          {loading ? "Creando cuenta..." : "Registrarse"}
        </button>
      </form>
    </div>
  );
};

export default Register;
