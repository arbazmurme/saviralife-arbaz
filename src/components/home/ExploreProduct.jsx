"use client";
import { useRef } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

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
    <section className="elementor-section elementor-top-section animated fadeInUp py-8 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[29%_70%] gap-6 items-center">
          {/* Left Column - Heading & Buttons */}
          <div className="text-center md:text-left">
            <h4 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8">
              Explore Our Seasonal Favourites
            </h4>
            <div className="justify-center md:justify-start items-center gap-6 mt-4 hidden md:flex">
              <button
                className="bg-[#8CBC4F] text-white p-2 rounded-full shadow-lg hover:scale-105 transition-all"
                aria-label="Previous"
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <FaArrowLeftLong size={20} />
              </button>
              <button
                className="bg-[#8CBC4F] text-white p-2 rounded-full shadow-lg hover:scale-105 transition-all"
                aria-label="Next"
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <FaArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Column - Swiper Carousel */}
          <div>
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              draggable
              grabCursor
              navigation={false}
              pagination={false}
              mousewheel={false}
              keyboard
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              loop={true}
              breakpoints={{
                360: { slidesPerView: 1.5, spaceBetween: 10 },
                460: { slidesPerView: 2, spaceBetween: 15 },
                720: { slidesPerView: 2.5, spaceBetween: 20 },
                1080: { slidesPerView: 3, spaceBetween: 25 },
              }}
              className="mySwiper"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id} className="flex justify-center">
                  <Link href="/productinfo" className="block w-full max-w-xs">
                    <div className="border border-green-200 rounded-lg shadow-md relative">
                      <span className="p-4">
                        <span className="absolute top-2 left-2 bg-[#8CBC4F] text-white text-xs font-semibold px-2 py-1 rounded-full">
                          {product.discount}
                        </span>
                        <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
                          <AiOutlineHeart className="text-gray-600 text-lg" />
                        </button>
                        <div className="flex justify-center">
                          <Image
                            src={product.imageUrl}
                            alt={product.title}
                            width={270}
                            height={270}
                            className="object-contain w-full h-48 md:h-60 rounded-lg"
                          />
                        </div>
                      </span>

                      <div className="mt-4 p-4 text-center md:text-left bg-green-50 rounded-t-2xl rounded-b-lg">
                        <h3 className="text-gray-800 font-semibold text-base truncate">
                          {product.title}
                        </h3>
                        <p className="uppercase text-green-600 text-xs font-medium">
                          {product.description}
                        </p>
                        <div className="flex justify-center md:justify-start space-x-1 text-yellow-500 mt-1">
                          {[...Array(4)].map((_, i) => (
                            <FaStar key={i} />
                          ))}
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-blue-600 text-lg font-semibold">
                            {product.price}
                          </span>
                          <span class="text-gray-400 text-sm line-through">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreProduct;
