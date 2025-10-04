import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const { id } = useParams(); // toma el id desde la URL
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setPizza(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPizza();
  }, [id]);

  if (loading) return <p className="text-center mt-5">Cargando pizza...</p>;
  if (error)
    return <p className="text-center mt-5 text-danger">Error: {error}</p>;
  if (!pizza) return null;

  return (
    <div className="container my-5">
      <div className="card shadow">
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={pizza.img}
              className="img-fluid rounded-start"
              alt={pizza.name}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h3 className="fw-bold text-capitalize">{pizza.name}</h3>
              <p className="text-muted">{pizza.desc}</p>
              <h5>Ingredientes:</h5>
              <ul>
                {pizza.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
              <h4 className="fw-bold mt-3">
                Precio: ${pizza.price.toLocaleString("es-CL")}
              </h4>
              <button className="btn btn-primary mt-3">
                Añadir al carrito 🛒
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
