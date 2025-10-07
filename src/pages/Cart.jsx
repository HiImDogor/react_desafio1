import { useState } from "react";
import { pizzaCart } from "../pizzas";
import { formatCLP } from "../utils/format";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container my-5">
      <h2>🛒 Carrito</h2>
      <ul className="list-group mb-3">
        {cart.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center">
              <img
                src={item.img}
                alt={item.name}
                width="60"
                className="me-3 rounded"
              />
              <div>
                <h6 className="mb-0">{item.name}</h6>
                <small>${formatCLP(item.price)}</small>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => decrease(item.id)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => increase(item.id)}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h4>Total: ${formatCLP(total)}</h4>
      <button className="btn btn-success">Pagar 💳</button>
    </div>
  );
};

export default Cart;
