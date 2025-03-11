import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/User.scss";

function User() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="User">
      <div className="user-container">
        <header>
          <button className="btn_user" onClick={goBack}>
            Назад
          </button>
          <h1>Личный кабинет</h1>
          <nav>
            <ul>
              <li>
                <a href="#profile">Профиль</a>
              </li>
              <li>
                <a href="#settings">Настройки</a>
              </li>
              <li>
                <a href="#orders">Заказы</a>
              </li>
              <li>
                <a href="#logout">Выйти</a>
              </li>
            </ul>
          </nav>
        </header>
        <div>
          <section id="profile">
            <h2>Профиль.</h2>
            <p>Имя: Белла Белова</p>
            <p>Email: bella@example.com</p>
            <p>Номер телефона: +1 (999) 234 66 77</p>
            <p>Адрес проживания: Новый Орлеан, французкий квартал д.18</p>
            <button className="button_user">Редактировать профиль</button>
          </section>
          <section id="settings">
            <h2>Настройки.</h2>
            <p>Уведомления и звуки</p>
            <p>Конфидециальность</p>

            <button className="button_user">Изменить настройки</button>
          </section>
          <section id="orders">
            <h2>Заказы.</h2>
            <p>Последние заказы:</p>
            <ul>
              <li>Заказ #1234 - Ожидает отправки</li>
              <li>Заказ #1235 - Доставлен</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
export default User;
