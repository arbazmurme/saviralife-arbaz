"use client"; // Needed for useSelector in Next.js (App Router)

import { useSelector } from "react-redux";

export default function ProductList() {
  const products = useSelector((state) => state.data.items);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Product List</h2>
      <ul className="space-y-2">
        {products.map((product) => (
          <li key={product.id} className="border p-2 rounded-lg">
            <p className="font-semibold">{product.name}</p>
            <p className="text-gray-600">${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
