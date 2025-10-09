import { useEffect } from "react";
import { useUser } from "../context/UserContext";

const Profile = () => {
  const { email, getProfile, logout } = useUser();

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="container py-5 text-center">
      <h2>👤 Perfil de Usuario</h2>
      <p className="mt-3">
        Bienvenido, <strong>{email}</strong>
      </p>
      <button className="btn btn-danger mt-3" onClick={logout}>
        Cerrar sesión 🔒
      </button>
    </div>
  );
};

export default Profile;
