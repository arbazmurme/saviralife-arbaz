"use client";
import React, { useEffect, useState } from "react";
import "../../app/tailwind.css";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import FiltersSidebar from "./FiltersSidebar";
import TeaLeafLoader from "../common/TeaLeafLoader ";

const products = [
  {
    id: 3,
    title: "Golden Chamomile",
    description: "White Ceramic Mug. 325ml",
    price: "₹539.00",
    discount: "40% off",
    imageUrl:
      "https://res.cloudinary.com/dpplqvnx6/image/upload/v1734016615/Category/DesktopImage/xrqzxcenpwcbicliwbxm.jpg",
  },
  {
    id: 4,
    title: "Tea Forte Lotus Relaxing Teas Presentation Box Tea",
    description: "White Ceramic Mug. 325ml",
    price: "₹23.90",
    discount: "25% off",
    imageUrl:
      "https://res.cloudinary.com/dpplqvnx6/image/upload/v1734016443/Category/DesktopImage/avrx2tqqmkzl6aq1fy1o.jpg",
  },
  {
    id: 7,
    title: "Rooibos Delight",
    description: "White Ceramic Mug. 325ml",
    price: "₹1249.00",
    discount: "52% off",
    imageUrl:
      "https://res.cloudinary.com/dpplqvnx6/image/upload/v1734016066/Category/DesktopImage/huv2a2pauw6kzv7xc66l.jpg",
  },
  {
    id: 8,
    title: "Rooibos Delight",
    description: "White Ceramic Mug. 325ml",
    price: "₹1249.00",
    discount: "52% off",
    imageUrl:
      "https://res.cloudinary.com/dpplqvnx6/image/upload/v1734016066/Category/DesktopImage/huv2a2pauw6kzv7xc66l.jpg",
  },
  {
    id: 9,
    title: "Rooibos Delight",
    description: "White Ceramic Mug. 325ml",
    price: "₹1249.00",
    discount: "52% off",
    imageUrl:
      "https://res.cloudinary.com/dpplqvnx6/image/upload/v1734016066/Category/DesktopImage/huv2a2pauw6kzv7xc66l.jpg",
  },
];
const sortingOptions = [
  "Recommended",
  "Price: Low to High",
  "Price: High to Low",
  "Newest First",
  "Best Selling",
];

const CategoriesPage = () => {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Recommended");
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient ? (
        <>
          {" "}
          <main className="min-h-screen">
            <div className="flex h-full min-h-screen flex-col md:flex-row gap-2 px-4 mt-4">
              {/* Filters Section */}
              <FiltersSidebar />

              {/* Products Section */}
              <div className="flex-1">
                <div className="flex flex-row items-center justify-between mx-5">
                  <span className="text-2xl font-bold capitalize">
                    Loose tea{" "}
                    <span className="text-xs font-normal text-gray-400">
                      - 5 Products
                    </span>
                  </span>

                  <div className="hidden flex-row items-center gap-2 md:flex relative">
                    <span className="text-sm font-normal text-gray-400">
                      Sort by:
                    </span>
                    <div className="relative">
                      <button
                        className="focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 border-input bg-background hover:bg-accent hover:text-accent-foreground border shadow-sm h-9 px-4 py-2"
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                      >
                        {selectedSort}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`lucide-icon lucide lucide-chevrons-up-down ml-2 size-4 shrink-0 transition-transform ${
                            isOpen ? "rotate-180" : "rotate-0"
                          } opacity-50`}
                        >
                          <path d="m7 15 5 5 5-5"></path>
                          <path d="m7 9 5-5 5 5"></path>
                        </svg>
                      </button>

                      {isOpen && (
                        <div className="absolute left-0 mt- w-48 bg-white border border-gray-200 shadow-md rounded-md z-50">
                          {sortingOptions.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                setSelectedSort(option);
                                setIsOpen(false);
                              }}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <section className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 px-4">
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      href="/productinfo"
                      className="block"
                    >
                      <div className="border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative bg-white">
                        {/* Discount Badge */}
                        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                          {product.discount}
                        </span>

                        {/* Wishlist Button */}
                        <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                          <AiOutlineHeart className="text-gray-600 text-lg" />
                        </button>

                        {/* Product Image */}
                        <div className="flex justify-center p-4">
                          <Image
                            src={product.imageUrl}
                            alt={product.title}
                            width={270}
                            height={270}
                            className="object-contain w-full h-40 md:h-48 rounded-lg"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="p-4 bg-green-50 rounded-b-lg">
                          <h3 className="text-gray-800 font-semibold text-sm md:text-base truncate">
                            {product.title}
                          </h3>
                          <p className="text-green-600 text-xs font-medium">
                            {product.description}
                          </p>

                          {/* Star Ratings */}
                          <div className="flex space-x-1 text-yellow-500 mt-1">
                            {[...Array(4)].map((_, i) => (
                              <FaStar key={i} />
                            ))}
                          </div>

                          {/* Price & Add to Cart Button */}
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-blue-600 text-lg font-semibold">
                              {product.price}
                            </span>
                            <button className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-md hover:bg-blue-700 text-white">
                              <AiOutlineShoppingCart className="text-xl" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </section>
                <div className="mt-20"></div>
              </div>
            </div>
          </main>
        </>
      ) : (
        <TeaLeafLoader />
      )}
    </div>
  );
};

export default CategoriesPage;
