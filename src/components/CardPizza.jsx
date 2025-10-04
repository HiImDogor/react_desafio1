import { Link } from "react-router-dom";
import { formatCLP } from "../utils/format";

const CardPizza = ({ id, name, price, ingredients, img }) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title text-capitalize">{name}</h5>

          <p className="text-muted mb-1">Ingredientes:</p>
          <ul>
            {ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>

          <hr />
          <p className="fw-bold text-center">Precio: ${formatCLP(price)}</p>

          <div className="d-grid gap-2">
            <Link to={`/pizza/${id}`} className="btn btn-outline-primary">
              Ver más 👀
            </Link>
            <button className="btn btn-primary">Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
