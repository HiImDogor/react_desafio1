import { useCart } from "../context/CartContext";
import { formatCLP } from "../utils/format";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart, total } = useCart();

  return (
    <div className="container py-4">
      <h2 className="mb-4">🛒 Tu carrito</h2>

      {cart.length === 0 ? (
        <div className="text-center">
          <p>Tu carrito está vacío 🍕</p>
          <Link to="/" className="btn btn-outline-primary">
            Ir al catálogo
          </Link>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2"
            >
              <div className="d-flex align-items-center gap-3">
                <img src={item.img} alt={item.name} width="80" />
                <div>
                  <h5 className="mb-0 text-capitalize">{item.name}</h5>
                  <small>${formatCLP(item.price)} c/u</small>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="btn btn-outline-success"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <h4 className="mt-4">Total: ${formatCLP(total)}</h4>
          <div className="d-flex gap-2 mt-3">
            <button className="btn btn-danger" onClick={clearCart}>
              Vaciar carrito 🗑️
            </button>
            <button className="btn btn-success">Pagar 💳</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
