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

export default HomeCat = () => {
  return (
    <section className="container mx-auto py-8">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="flex flex-col">
            <div className="animated fadeInUp">
              <div className="block block_carousel exclusive">
                <div className="block_content">
                  <Swiper
                    draggable={true}
                    grabCursor={true}
                    navigation={false}
                    pagination={false}
                    mousewheel={false}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    breakpoints={{
                      360: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                      },
                      460: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                      },
                      720: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                      },
                      1080: {
                        slidesPerView: 8,
                        spaceBetween: 7,
                      },
                    }}
                    className="mySwiper"
                    style={{ marginLeft: "-15px" }}
                  >
                    {[
                      {
                        title: "Tea Bags",
                        imgSrc: "https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_image_45.png",
                        alt: "Tea Bags",
                      },
                      {
                        title: "Maté",
                        imgSrc: "https://cdn.shopify.com/s/files/1/0905/2012/files/Mate_9.png?v=1685006070",
                        alt: "Maté",
                      },
                      {
                        title: "Matcha",
                        imgSrc: "https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_image-54.png?v=1684921221",
                        alt: "Matcha",
                      },
                      {
                        title: "Oolong",
                        imgSrc: "https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_image_49.png",
                        alt: "Oolong",
                      },
                      {
                        title: "Loose Tea",
                        imgSrc: "https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_image_46.png",
                        alt: "Loose Tea",
                      },
                      {
                        title: "Green Tea",
                        imgSrc: "https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_image_47.png",
                        alt: "Green Tea",
                      },
                      {
                        title: "Gift Sets",
                        imgSrc: "https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_image_48.png",
                        alt: "Gift Sets",
                      },
                      {
                        title: "Teaware",
                        imgSrc: "https://cdn.shopify.com/s/files/1/0905/2012/files/teaware.jpg?v=1685006326",
                        alt: "Teaware",
                      },
                      {
                        title: "Black Tea",
                        imgSrc: "https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_image_44.png",
                        alt: "Black Tea",
                      },
                      {
                        title: "White Tea",
                        imgSrc: "https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_image_43.png",
                        alt: "White Tea",
                      },
                    ].map((item, index) => (
                      <SwiperSlide key={index}>
                        <Link href="/category">
                          <div className="flex flex-col items-center">
                            <div className="block-carousel-container">
                              <div className="left-block">
                                <div className="block-carousel-image-containe">
                                  <div className="item-title text-center font-semibold">
                                    {item.title}
                                  </div>
                                  <img
                                    className="img-fluid w-full h-auto hover:scroll-m-20"
                                    src={item.imgSrc}
                                    alt={item.alt}
                                  />
                                </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};
