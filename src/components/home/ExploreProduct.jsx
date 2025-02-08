"use client";
import { useRef } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import {
  FaStar,
  FaRegHeart,
  FaArrowLeftLong,
  FaArrowRight,
} from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const products = [
  {
    id: 8,
    title: "Golden Chamomile",
    description: "White Ceramic Mug. 325ml",
    price: "₹539.00",
    discount: "40% off",
    imageUrl:
      "https://res.cloudinary.com/dpplqvnx6/image/upload/v1734016615/Category/DesktopImage/xrqzxcenpwcbicliwbxm.jpg",
  },
  {
    id: 9,
    title: "Tea Forte Lotus Relaxing Teas Presentation Box Tea",
    description: "White Ceramic Mug. 325ml",
    price: "₹23.90",
    discount: "25% off",
    imageUrl:
      "https://res.cloudinary.com/dpplqvnx6/image/upload/v1734016443/Category/DesktopImage/avrx2tqqmkzl6aq1fy1o.jpg",
  },
  {
    id: 10,
    title: "Rooibos Delight",
    description: "White Ceramic Mug. 325ml",
    price: "₹1249.00",
    discount: "52% off",
    imageUrl:
      "https://res.cloudinary.com/dpplqvnx6/image/upload/v1734016066/Category/DesktopImage/huv2a2pauw6kzv7xc66l.jpg",
  },
  {
    id: 11,
    title: "Rooibos Delight",
    description: "White Ceramic Mug. 325ml",
    price: "₹1249.00",
    discount: "52% off",
    imageUrl:
      "https://res.cloudinary.com/dpplqvnx6/image/upload/v1734016066/Category/DesktopImage/huv2a2pauw6kzv7xc66l.jpg",
  },
];

const ExploreProduct = () => {
  const swiperRef = useRef(null);

  return (
    <section className="elementor-section elementor-top-section animated fadeInUp">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-[30%_70%] grid-cols-1 gap-6 items-center">
          {/* Left Column - Heading & Buttons */}
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">
              Explore Our Seasonal Favourites
            </h4>
            <div className="flex justify-center items-center gap-4 mt-4">
              <button
                className="bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700 hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none"
                aria-label="Previous"
                type="button"
                onClick={() => swiperRef.current?.slidePrev()} // Move to previous slide
              >
                <FaArrowLeftLong size={24} />
              </button>
              <button
                className="bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700 hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none"
                aria-label="Next"
                type="button"
                onClick={() => swiperRef.current?.slideNext()} // Move to next slide
              >
                <FaArrowRight size={24} />
              </button>
            </div>
          </div>

          {/* Right Column - Swiper Carousel */}
          <div>
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
              draggable
              grabCursor
              navigation={false}
              pagination={false}
              mousewheel={false}
              keyboard
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              loop={true}
              breakpoints={{
                360: { slidesPerView: 2.5, spaceBetween: 1 },
                460: { slidesPerView: 2.3, spaceBetween: 2 },
                720: { slidesPerView: 3, spaceBetween: 10 },
                1080: { slidesPerView: 3, spaceBetween: 7 },
              }}
              className="mySwiper"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <Link href="/productinfo">
                    <div className="p-4">
                      <article className="border rounded-lg overflow-hidden shadow-lg">
                        <div className="relative">
                          <img
                            className="w-full h-48 object-cover"
                            src={product.imageUrl}
                            alt={product.title}
                          />
                          <ul className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1">
                            <li>{product.discount}</li>
                          </ul>
                          <div className="absolute bottom-0 left-0 p-2">
                            <span className="bg-white rounded-full p-2 shadow-lg">
                              <FaRegHeart size={20} className="text-red-500" />
                            </span>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, index) => (
                              <FaStar
                                key={index}
                                size={20}
                                className="text-yellow-400"
                              />
                            ))}
                          </div>
                          <h3 className="text-lg font-semibold truncate">
                            {product.title}
                          </h3>
                          <p className="text-gray-600">{product.description}</p>
                          <div className="flex items-center justify-between mt-4">
                            <span className="text-green-700 font-bold">
                              {product.price}
                            </span>
                            <button className="bg-green-700 text-white p-2 rounded-full shadow-lg">
                              <MdOutlineShoppingBag size={20} />
                            </button>
                          </div>
                        </div>
                      </article>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreProduct;
