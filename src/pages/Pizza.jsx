import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatCLP } from "../utils/format";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!res.ok) throw new Error("No se pudo cargar la pizza");
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
  if (error) return <p className="text-center text-danger mt-5">{error}</p>;
  if (!pizza) return null;

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <img
            src={pizza.img}
            alt={pizza.name}
            className="img-fluid rounded mb-4"
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-capitalize">{pizza.name}</h2>
          <p>{pizza.desc}</p>
          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
          <h4 className="mt-3">Precio: ${formatCLP(pizza.price)}</h4>
          <button
            className="btn btn-primary mt-3"
            onClick={() => addToCart(pizza)}
          >
            Añadir al carrito 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
