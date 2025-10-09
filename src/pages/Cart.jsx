import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { formatCLP } from "../utils/format";

const Cart = () => {
  const { cart, total, increment, decrement, removeFromCart, clearCart } =
    useCart();
  const { token } = useUser();

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">🛒 Tu carrito</h2>

      {cart.length === 0 ? (
        <div className="text-center mt-5">
          <p>No hay pizzas en el carrito.</p>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="d-flex align-items-center justify-content-between border rounded p-3 mb-3 shadow-sm"
            >
              {/* Imagen */}
              <div className="d-flex align-items-center gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h5 className="mb-1 text-capitalize">{item.name}</h5>
                  <p className="text-muted mb-0">
                    Precio unitario: ${formatCLP(item.price)}
                  </p>
                </div>
              </div>

              {/* Controles de cantidad */}
              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => decrement(item.id)}
                >
                  -
                </button>
                <span className="fw-bold">{item.count}</span>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => increment(item.id)}
                >
                  +
                </button>
              </div>

              {/* Subtotal */}
              <div className="text-end">
                <p className="fw-bold mb-1">
                  Subtotal: ${formatCLP(item.price * item.count)}
                </p>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  🗑️ Eliminar
                </button>
              </div>
            </div>
          ))}

          {/* Total general */}
          <div className="text-end mt-4">
            <h4>Total a pagar: ${formatCLP(total)}</h4>
            <div className="d-flex justify-content-end gap-2 mt-3">
              <button className="btn btn-outline-danger" onClick={clearCart}>
                Vaciar carrito 🧹
              </button>
              <button className="btn btn-success" disabled={!token}>
                Pagar 💳
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
