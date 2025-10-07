import { createContext, useState, useContext } from "react";

// 1️⃣ Crear el contexto
const CartContext = createContext();

// 2️⃣ Crear un hook para usar el contexto más fácil
export const useCart = () => useContext(CartContext);

// 3️⃣ Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar pizza al carrito
  const addToCart = (pizza) => {
    const existing = cart.find((item) => item.id === pizza.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
  };

  // Eliminar una unidad
  const removeFromCart = (id) => {
    const updated = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updated);
  };

  // Calcular total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Vaciar carrito
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
