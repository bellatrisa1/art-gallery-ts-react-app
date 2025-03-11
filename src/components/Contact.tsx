import React from "react";

// Если в будущем потребуется добавить пропсы, определите их здесь
interface ContactProps {
  // Пример: onSubmit?: (data: FormData) => void;
}

function Contact({}: ContactProps) {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <h2>Контакты</h2>
        <p>Email: luxurtgalleryla@outlook.com</p>
        <p>Phone: +82 10 4519 8306</p>
      </div>

      <h2>Свяжитесь с нами</h2>
      <p>У вас остались вопросы? Готовы ответить!</p>
      <form className="contact-form">
        <input type="text" placeholder="Ваше имя" />
        <input type="email" placeholder="Ваш Email" />
        <textarea placeholder="Ваше сообщение"></textarea>
        <button type="submit" className="btn-primary">
          Отправить
        </button>
      </form>

      <p>Мы в социальных сетях:</p>
      <div className="social-links">
        <a
          href="https://instagram.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
          aria-label="Instagram"
        ></a>
        <a
          href="https://vk.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon vk"
          aria-label="VK"
        ></a>
        <a
          href="https://t.me/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon telegram"
          aria-label="Telegram"
        ></a>
      </div>
    </div>
  );
}

export default Contact;
