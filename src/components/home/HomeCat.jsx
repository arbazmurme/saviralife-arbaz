"use client";
import React from "react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomeCat = () => {
  const categories = [
    {
      title: "Tea Bags",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_image_45.png",
      alt: "Tea Bags",
    },
    {
      title: "Maté",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0905/2012/files/Mate_9.png?v=1685006070",
      alt: "Maté",
    },
    {
      title: "Matcha",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_image-54.png?v=1684921221",
      alt: "Matcha",
    },
    {
      title: "Oolong",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_image_49.png",
      alt: "Oolong",
    },
    {
      title: "Loose Tea",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_image_46.png",
      alt: "Loose Tea",
    },
    {
      title: "Green Tea",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_image_47.png",
      alt: "Green Tea",
    },
    {
      title: "Gift Sets",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_image_48.png",
      alt: "Gift Sets",
    },
    {
      title: "Teaware",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0905/2012/files/teaware.jpg?v=1685006326",
      alt: "Teaware",
    },
    {
      title: "Black Tea",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_image_44.png",
      alt: "Black Tea",
    },
    {
      title: "White Tea",
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_image_43.png",
      alt: "White Tea",
    },
  ];

  return (
    <section className="animated fadeInUp">
      <Swiper
        draggable={true}
        grabCursor={true}
        navigation={false}
        pagination={false}
        mousewheel={false}
        keyboard={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        breakpoints={{
          360: { slidesPerView: 4, spaceBetween: 5 },
          460: { slidesPerView: 4, spaceBetween: 5 },
          720: { slidesPerView: 6, spaceBetween: 20 },
          1080: { slidesPerView: 8, spaceBetween: 7 },
        }}
        className="mySwiper"
      >
        {categories.map((item, index) => (
          <SwiperSlide key={index}>
            <Link href="/category">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "transform 0.2s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  style={{
                    width: "96px",
                    height: "96px",
                    objectFit: "contain",
                  }}
                  src={item.imgSrc}
                  alt={item.alt}
                />
                <div
                  style={{
                    marginTop: "8px",
                    textAlign: "center",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#4a5568",
                  }}
                >
                  {item.title}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeCat;
