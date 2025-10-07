const Profile = () => {
  const email = "usuario@example.com"; // temporal (estático)

  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div
        className="card p-4 shadow"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-3">Perfil de Usuario</h2>
        <p className="text-center fs-5">
          Correo: <strong>{email}</strong>
        </p>
        <button className="btn btn-dark w-100 mt-3">Cerrar sesión 🔒</button>
      </div>
    </div>
  );
};

export default Profile;
