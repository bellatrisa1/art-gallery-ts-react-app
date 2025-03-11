import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
      <header>
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <a href="#about">О нас</a>
            </li>
            <li>
              <a href="#gallery">Каталог</a>
            </li>
            <li>
              <a href="#auction">Аукцион</a>
            </li>
            <li>
              <a href="#delivery">Доставка</a>
            </li>
            <li>
              <a href="#contact">Контакты</a>
            </li>
          </ul>
          <div className="search-box">
            <input type="text" placeholder="Поиск по названию картины" />
            <button>Найти</button>
          </div>
          <div>
            <Link to="/cart">
              <button className="cart_btn">
                <img
                  src="../img/svg/cart-svgrepo-com.svg"
                  width="25"
                  height="25"
                  alt="cart"
                />
              </button>
            </Link>
            <Link to="/user">
              <button className="user_btn">
                <img
                  src="../img/svg/user-round-svgrepo-com.svg"
                  width="25"
                  height="25"
                  alt="user"
                />
              </button>
            </Link>
          </div>
        </nav>
      </header>
    );
}
export default Header;