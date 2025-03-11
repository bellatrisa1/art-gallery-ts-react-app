import React from "react";
import "../styles/Cart.scss";
import { useNavigate } from "react-router-dom";

// Определите интерфейс для элементов корзины
interface CartItem {
  id: number;
  name: string;
  price: number; // Добавьте поле для цены, если оно используется
}

// Определите интерфейс для пропсов компонента Cart
interface CartProps {
  cartItems: CartItem[];
  onRemoveFromCart: (itemId: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onRemoveFromCart }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Возвращает на предыдущую страницу
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart-container">
      <button className="button_cart" onClick={goBack}>
        Назад
      </button>
      <h1>Ваша корзина</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              src="/img/2.jpg" // Замените на динамический путь, если необходимо
              alt={item.name}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h2 className="cart-item-title">{item.name}</h2>
              <p className="cart-item-price">${item.price.toFixed(2)}</p>
              <button
                className="remove-button"
                onClick={() => onRemoveFromCart(item.id)}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Итого:</h2>
        <p className="total-price">${calculateTotal().toFixed(2)}</p>
        <button className="checkout-button">Оформить заказ</button>
      </div>
    </div>
  );
};

export default Cart;
