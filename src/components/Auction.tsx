import React from "react";

function Auction() {
  return (
    <div id="auction" className="container">
      <h1>Аукцион</h1>
      <h2>Подробности про аукционы в нашем музее искусства</h2>
      <div className="auction">
        <div className="auction-item" tabIndex={0}>
          <img src="../img/gallery.jpg" alt="Рождение Венеры" />
          <h3>Купить искусство</h3>
          <p>
            Эрарта сближает человека с искусством и позволяет забрать его
            частицу с собой...
          </p>
          <h5>
            На нашем аукционе вы найдете уникальные произведения искусства,
            которые поражают воображение и дарят эстетическое наслаждение. Мы
            стремимся сделать процесс приобретения искусства прозрачным и
            увлекательным для каждого участника.
          </h5>
        </div>
        <div className="auction-item" tabIndex={0}>
          <img src="../img/gallery.jpg" alt="Сотворение Адама" />
          <h3>Ваше мероприятие</h3>
          <p>Эрарта — один из самых интересных музеев Петербурга...</p>
          <h5>
            Чтобы начать участвовать в наших аукционах, вам необходимо
            зарегистрироваться на нашем сайте. Это простой процесс, который
            занимает всего несколько минут. После регистрации вы сможете
            просматривать текущие аукционы и делать ставки на понравившиеся
            лоты.
          </h5>
        </div>
        <div className="auction-item" tabIndex={0}>
          <img src="../img/gallery.jpg" alt="Сотворение Адама" />
          <h3>Ваше мероприятие</h3>
          <p>Эрарта — один из самых интересных музеев Петербурга...</p>
          <h5>
            Каждый аукцион начинается с начальной цены, установленной продавцом.
            Участники могут делать ставки, повышая цену на определенный шаг.
            Аукцион продолжается до тех пор, пока не будет достигнута
            максимальная цена или не истечет время аукциона. Победителем
            становится участник, предложивший наивысшую цену.
          </h5>
        </div>
      </div>
    </div>
  );
}
export default Auction;
