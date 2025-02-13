"use client";
import { useState } from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import "../../app/tailwind.css";

const ProductPage = () => {
  const product = {
    name: "Apple iMac 24” All-In-One Computer, Apple M1, 8GB RAM",
    price: 1249.99,
    reviews: 345,
    colors: ["Green", "Pink", "Silver", "Blue"],
    capacities: ["256GB", "512GB", "1TB"],
    images: ["https://res.cloudinary.com/dpplqvnx6/image/upload/v1734016443/Category/DesktopImage/avrx2tqqmkzl6aq1fy1o.jpg", "https://res.cloudinary.com/dpplqvnx6/image/upload/v1734016443/Category/DesktopImage/avrx2tqqmkzl6aq1fy1o.jpg", "https://res.cloudinary.com/dpplqvnx6/image/upload/v1734016443/Category/DesktopImage/avrx2tqqmkzl6aq1fy1o.jpg"],
    shippingCost: 19,
    pickupCost: 9,
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedCapacity, setSelectedCapacity] = useState(product.capacities[0]);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg">
      {/* Left: Product Images */}
      <div className="flex flex-col items-center">
        <Image src={selectedImage} alt="Product Image" width={400} height={400} className="rounded-lg" />
        <div className="flex gap-2 mt-4">
          {product.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="Thumbnail"
              width={80}
              height={80}
              className={`cursor-pointer rounded-lg border ${
                selectedImage === img ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Right: Product Info */}
      <div className="flex flex-col space-y-4">
        {/* Title & Reviews */}
        <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
        <p className="text-gray-600">⭐⭐⭐⭐⭐ {product.reviews} Reviews</p>

        {/* Price & Quantity Selector */}
        <div className="flex items-center space-x-4">
          <p className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
          <div className="flex items-center border rounded-lg">
            <button
              className="px-3 py-1 text-lg font-bold"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              className="px-3 py-1 text-lg font-bold"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="flex gap-2">
          <button className="flex-1 bg-[#8CBC4F] hover:bg-[#759b44] text-white py-2 px-5 rounded-lg">
            Add to cart
          </button>
          <button className="p-2 border rounded-lg text-gray-600 hover:text-red-500">
            <FaHeart size={20} />
          </button>
        </div>

        {/* Color Selection */}
        <div>
          <p className="font-semibold text-gray-700">Colour</p>
          <div className="flex gap-2 mt-2">
            {product.colors.map((color) => (
              <button
                key={color}
                className={`px-4 py-2 border rounded-lg ${
                  selectedColor === color ? "border-green-500 bg-green-100" : "border-gray-300"
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* SSD Selection */}
        <div>
          <p className="font-semibold text-gray-700">SSD capacity</p>
          <div className="flex gap-2 mt-2">
            {product.capacities.map((capacity) => (
              <button
                key={capacity}
                className={`px-4 py-2 border rounded-lg ${
                  selectedCapacity === capacity ? "border-green-500 bg-green-100" : "border-gray-300"
                }`}
                onClick={() => setSelectedCapacity(capacity)}
              >
                {capacity}
              </button>
            ))}
          </div>
        </div>

        {/* Pickup & Shipping */}
        {/* <div className="border-t pt-4">
          <p className="font-semibold text-gray-700">Pickup</p>
          <p className="text-gray-600">Shipping - ${product.shippingCost} (Arrives in 5 days)</p>
          <p className="text-gray-600">Pickup from Store - ${product.pickupCost}</p>
        </div> */}
      </div>
    </div>
  );
};

export default ProductPage;
