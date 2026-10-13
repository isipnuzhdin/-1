
import { useState } from 'react';

function ProductCard({ name, price, image }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{name}</h2>

      <img src={image} alt={name} width="200" />

      <p>Цена: {price} руб.</p>

      <button onClick={() => setCount(count + 1)}>
        Добавить в корзину
      </button>

      <button
        onClick={() => setCount(count - 1)}
        disabled={count === 0}
      >
        Убрать
      </button>

      <p>Количество: {count}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Магазин</h1>

      <ProductCard
        name="Наушники"
        price={2500}
        image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
      />

      <ProductCard
        name="Мышка"
        price={1200}
        image="https://images.unsplash.com/photo-1527814050087-3793815479db?w=400"
      />

      <ProductCard
        name="Клавиатура"
        price={3500}
        image="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400"
      />
    </div>
  );
}

export default App;
