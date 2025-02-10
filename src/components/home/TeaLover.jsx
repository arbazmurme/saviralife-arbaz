"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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
    id: 5,
    title: "Golden Chamomile",
    description: "White Ceramic Mug. 325ml",
    price: "₹539.00",
    discount: "40% off",
    imageUrl:
      "https://res.cloudinary.com/dpplqvnx6/image/upload/v1734016615/Category/DesktopImage/xrqzxcenpwcbicliwbxm.jpg",
  },
  {
    id: 6,
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
];

const Consumers = () => {
  return (
    <section className="elementor-element elementor-element-1f3e57d elementor-section-boxed elementor-section-height-default elementor-section-height-inner-default elementor-section elementor-top-section animated fadeInUp">
      <section className="mx-auto p-6">
        <div className="max-w-2xl mx-auto my-10">
          <h1 className="text-5xl font-bold text-center">
            Gifts for Tea Lovers
          </h1>
          <p className="text-gray-500 text-center mb-8">
            Our range of gift boxes are elegantly packed, gorgeous to look at,
            and packed with the freshest Indian teas.
          </p>
        </div>
        <Swiper
          slidesPerView={2} // Ensure mobile shows 2 products
          spaceBetween={15}
          modules={[Pagination]}
          className="my-8"
          breakpoints={{
            640: {
              slidesPerView: 2, // Show 2 products on mobile
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4, // Show 4 products on desktop
              spaceBetween: 20,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Link href="/productinfo" className="block">
                <div className="border border-green-200 rounded-lg shadow-md relative">
                  <span className="absolute top-2 left-2 bg-[#8CBC4F] text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {product.discount}
                  </span>
                  <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
                    <AiOutlineHeart className="text-gray-600 text-lg" />
                  </button>
                  <div className="flex justify-center md:p-4">
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      width={270}
                      height={270}
                      className="object-contain w-full h-48 md:h-60 rounded-lg"
                    />
                  </div>
                  <div className="p-4 text-left bg-green-50 rounded-b-lg">
                    <h3 className="text-gray-800 font-semibold text-base truncate">
                      {product.title}
                    </h3>
                    <p className="uppercase text-green-600 text-xs font-medium">
                      {product.description}
                    </p>
                    <div className="flex justify-left space-x-1 text-yellow-500 mt-1">
                      {[...Array(4)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-blue-600 text-lg font-semibold">
                        {product.price}
                      </span>
                      <button className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow text-white">
                        <AiOutlineShoppingCart className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/productinfo" className="block pt-5">
                <div className="border border-green-200 rounded-lg shadow-md relative">
                  <span className="absolute top-2 left-2 bg-[#8CBC4F] text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {product.discount}
                  </span>
                  <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
                    <AiOutlineHeart className="text-gray-600 text-lg" />
                  </button>
                  <div className="flex justify-center md:p-4">
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      width={270}
                      height={270}
                      className="object-contain w-full h-48 md:h-60 rounded-lg"
                    />
                  </div>
                  <div className="p-4 text-center bg-green-50 rounded-b-lg">
                    <h3 className="text-gray-800 font-semibold text-base truncate">
                      {product.title}
                    </h3>
                    <p className="uppercase text-green-600 text-xs font-medium">
                      {product.description}
                    </p>
                    <div className="flex justify-center space-x-1 text-yellow-500 mt-1">
                      {[...Array(4)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-blue-600 text-lg font-semibold">
                        {product.price}
                      </span>
                      <button className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow text-white">
                        <AiOutlineShoppingCart className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default Consumers;
