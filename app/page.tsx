import ProductList from '@/components/ProductList';

const products = [
  { id: 1, title: 'Смартфон', price: 50000, description: 'Хороший', imageUrl: '/images/1.webp' },
  { id: 2, title: 'Ноутбук', price: 80000, description: 'Мощный', imageUrl: '/images/2.webp' },
  { id: 3, title: 'Наушники', price: 5000, description: 'Беспроводные', imageUrl: '/images/3.avif' },
  { id: 4, title: 'Клавиатура', price: 3000, description: 'Механическая', imageUrl: '/images/4.webp' },
  { id: 5, title: 'Мышь', price: 2000, description: 'Игровая', imageUrl: '/images/5.webp' },
  { id: 6, title: 'Монитор', price: 25000, description: '24 дюйма', imageUrl: '/images/6.webp' },
  { id: 7, title: 'Колонки', price: 4000, description: 'Стерео', imageUrl: '/images/7.webp' },
  { id: 8, title: 'Микрофон', price: 7000, description: 'Для стримов', imageUrl: '/images/8.webp' },
  { id: 9, title: 'Веб-камера', price: 6000, description: 'Full HD', imageUrl: '/images/9.webp' },
  { id: 10, title: 'Кресло', price: 15000, description: 'Удобное', imageUrl: '/images/10.jpg' },
  { id: 11, title: 'Стол', price: 12000, description: 'Деревянный', imageUrl: '/images/11.webp' },
  { id: 12, title: 'Лампа', price: 1500, description: 'Настольная', imageUrl: '/images/12.webp' },
];

export default function Page() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Каталог товаров</h1>
      <ProductList products={products} />
    </main>
  );
}