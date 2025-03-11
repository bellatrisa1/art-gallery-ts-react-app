import React from "react";

interface GalleryProps {
  onAddToCart: (item: CartItem) => void;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
}

function Gallery({ onAddToCart }: GalleryProps) {
  const buyArtwork = (title: string, price: number) => {
    const item: CartItem = { id: Date.now(), name: title, price };
    onAddToCart(item);
    alert(`Вы выбрали: ${title}`);
  };

  return (
    <div id="gallery" className="container">
      <h1>Каталог</h1>
      <p>Эти работы доступны для покупки</p>
      <h2>Картины эпохи Возрождения</h2>
      <div className="gallery">
        <div className="gallery-item" tabIndex={0}>
          <img src="../img/1.jpg" alt="Рождение Венеры" />
          <p>Сандро Боттичелли</p>
          <h3>«Рождение Венеры»</h3>
          <p>Стоимость: $40,000,000</p>
          <button onClick={() => buyArtwork("Рождение Венеры", 40000000)}>
            Купить
          </button>
        </div>
        <div className="gallery-item" tabIndex={0}>
          <img src="../img/2.jpg" alt="Тайная вечеря" />
          <p>Леонардо да Винчи</p>
          <h3>«Тайная вечеря»</h3>
          <p>Стоимость: $180,000,000</p>
          <button onClick={() => buyArtwork("Тайная вечеря", 180000000)}>
            Купить
          </button>
        </div>
        <div className="gallery-item" tabIndex={0}>
          <img src="../img/3.jpg" alt="Сотворение Адама" />
          <p>Микеланджело</p>
          <h3>«Сотворение Адама»</h3>
          <p>Стоимость: $170,000,000</p>
          <button onClick={() => buyArtwork("Сотворение Адама", 170000000)}>
            Купить
          </button>
        </div>
        <div className="gallery-item" tabIndex={0}>
          <img src="../img/4.jpg" alt="Урок анатомии доктора Тульпа" />
          <p>Рембрандт</p>
          <h3>«Урок анатомии доктора Тульпа»</h3>
          <p>Стоимость: $118,000,000</p>
          <button
            onClick={() => buyArtwork("сУрок анатомии доктора Тульпа", 118000000)}
          >
            Купить
          </button>
        </div>
        <div className="gallery-item" tabIndex={0}>
          <img src="../img/5.jpg" alt="Звездная ночь" />
          <p>Винсент ван Гог</p>
          <h3>«Звёздная ночь»</h3>
          <p>Стоимость: $500,000,000</p>
          <button onClick={() => buyArtwork("Звездная ночь", 500000000)}>
            Купить
          </button>
        </div>
        <div className="gallery-item" tabIndex={0}>
          <img src="../img/6.jpg" alt="Девушка с жемчужной сережкой" />
          <p>Иоганн Вермеер</p>
          <h3>«Девушка с жемчужной сережкой»</h3>
          <p>Стоимость: $70,000,000</p>
          <button
            onClick={() => buyArtwork("Девушка с жемчужной сережкой", 70000000)}
          >
            Купить
          </button>
        </div>
        <div className="gallery-item" tabIndex={0}>
          <img src="../img/7.jpg" alt="Американская готика" />
          <p>Грант Вуд</p>
          <h3>«Американская готика»</h3>
          <p>Стоимость: $85,000,000</p>
          <button onClick={() => buyArtwork("Американская готика", 85000000)}>
            Купить
          </button>
        </div>
        <div className="gallery-item" tabIndex={0}>
          <img
            src="../img/8.jpg"
            alt="Воскресный день на острове Ла-Гран-Жатте"
          />
          <p>Жорж Сёра</p>
          <h3>«Воскресный день на острове Ла-Гран-Жатте»</h3>
          <p>Стоимость: $43,000,000</p>
          <button
            onClick={() =>
              buyArtwork("Воскресный день на острове Ла-Гран-Жатте", 43000000)
            }
          >
            Купить
          </button>
        </div>
        <div className="gallery-item" tabIndex={0}>
          <img src="../img/9.jpg" alt="Ночной дозор" />
          <p>Рембрандт</p>
          <h3>«Ночной дозор»</h3>
          <p>Стоимость: $750,000,000</p>
          <button onClick={() => buyArtwork("Ночной дозор", 750000000)}>
            Купить
          </button>
        </div>
        <div className="gallery-item" tabIndex={0}>
          <img src="../img/10.jpg" alt="Мона Лиза" />
          <p>Леонардо да Винчи</p>
          <h3>«Мона Лиза»</h3>
          <p>Цена: $900,000,000</p>
          <button onClick={() => buyArtwork("Мона Лиза", 9000000000)}>
            Купить
          </button>
        </div>
        <div className="gallery-item" tabIndex={0}>
          <img src="../img/11.jpg" alt="Крик" />
          <p>Эдвард Мунк</p>
          <h3>«Крик»</h3>
          <p>Цена: $110,000,000</p>
          <button onClick={() => buyArtwork("Крик", 110000000)}>Купить</button>
        </div>
        <div className="gallery-item" tabIndex={0}>
          <img src="../img/12.jpg" alt="Поцелуй" />
          <p>Густав Климт</p>
          <h3>«Поцелуй»</h3>
          <p>Стоимость: $47,000,000</p>
          <button onClick={() => buyArtwork("Поцелуй", 47000000)}>Купить</button>
        </div>
        <div className="gallery-item" tabIndex={0}>
          <img src="../img/13.jpg" alt="Постоянство памяти" />
          <p>Сальвадор Дали</p>
          <h3>«Постоянство памяти»</h3>
          <p>Стоимость: $550,000,000</p>
          <button onClick={() => buyArtwork("Постоянство памяти", 550000000)}>
            Купить
          </button>
        </div>
        <div className="gallery-item" tabIndex={0}>
          <img src="../img/14.jpg" alt="Ночные ястребы" />
          <p>Эдвард Хоппер</p>
          <h3>«Ночные ястребы»</h3>
          <p>Стоимость: $110,000,000</p>
          <button onClick={() => buyArtwork("Ночные ястребы", 110000000)}>
            Купить
          </button>
        </div>
        <div className="gallery-item" tabIndex={0}>
          <img src="../img/15.jpg" alt="Афинская школа" />
          <p>Рафаэль</p>
          <h3>«Афинская школа»</h3>
          <p>Стоимость: $165,000,000</p>
          <button onClick={() => buyArtwork("Афинская школа", 165000000)}>
            Купить
          </button>
        </div>
        <div className="gallery-item" tabIndex={0}>
          <img src="../img/16.jpg" alt="Автопортрет" />
          <p>Винсент ван Гог</p>
          <h3>«Автопортрет»</h3>
          <p>Стоимость: $133,000,000</p>
          <button onClick={() => buyArtwork("Автопортрет", 133000000)}>
            Купить
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
