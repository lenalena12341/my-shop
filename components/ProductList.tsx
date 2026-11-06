'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
}

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <Card key={product.id} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
          {/* Контейнер для картинки: серая подложка, фиксированная высота */}
          <div className="relative w-full h-56 bg-slate-100 flex items-center justify-center p-4 rounded-t-xl border-b">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="max-h-full max-w-full object-contain" // object-contain не обрезает картинку
            />
          </div>
          
          <CardHeader className="flex-none">
            <CardTitle className="text-lg">{product.title}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardHeader>
          
          {/* flex-grow и mt-auto прижимают цену к самому низу карточки */}
          <CardContent className="flex-grow flex items-end mt-4">
            <p className="font-bold text-2xl">{product.price} ₽</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}