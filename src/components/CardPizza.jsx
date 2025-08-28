import { formatCLP } from "../utils/format";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>

          <p className="text-muted mb-1">Ingredientes:</p>
          <ul className="list-unstyled d-flex flex-wrap gap-2">
            {ingredients.map((ing, i) => (
              <li key={i} className="badge text-bg-light border">
                {ing}
              </li>
            ))}
          </ul>

          <hr />
          <p className="fw-bold text-center">Precio: ${formatCLP(price)}</p>

          <div className="d-grid gap-2">
            <button className="btn btn-outline-primary">Ver más 👀</button>
            <button className="btn btn-primary">Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
