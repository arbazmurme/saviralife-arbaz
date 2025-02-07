"use client";
import {
  EffectFade,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <section className="w-full h-auto animated fadeInUp">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="flex flex-col">
            <div className="elementor-widget-container">
              <div className="LeoSlideshow">
                <div
                  className="bannercontainer w-full"
                  style={{ padding: 0, margin: "0 auto" }}
                >
                  <div className="iview iview-group-6769453bd11a1-12 iview-hover">
                    <Swiper
                      grabCursor={true}
                      navigation={false}
                      pagination={true}
                      mousewheel={false}
                      keyboard={true}
                      draggable={true}
                      effect={"fade"}
                      modules={[
                        EffectFade,
                        Navigation,
                        Pagination,
                        Mousewheel,
                        Keyboard,
                        Autoplay,
                      ]}
                      loop={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }}
                      breakpoints={{
                        360: {
                          slidesPerView: 1,
                          spaceBetween: 5,
                        },
                        460: {
                          slidesPerView: 1,
                          spaceBetween: 5,
                        },
                        720: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        1080: {
                          slidesPerView: 1,
                          spaceBetween: 7,
                        },
                      }}
                      className="homeSlider mt-2"
                    >
                      <SwiperSlide>
                        <div className="slider-animate">
                          <div className="home-contain rounded-0 p-0">
                            <Link href="/category">
                              <img
                                src="/assets/slider.png"
                                className="img-fluid w-full h-auto bg-img blur-up lazyload"
                                alt="img"
                                style={{ cursor: "pointer" }}
                              />
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="slider-animate">
                          <div className="home-contain rounded-0 p-0">
                            <Link href="/category">
                              <img
                                src="/assets/slider2.png"
                                className="img-fluid w-full h-auto bg-img blur-up lazyload"
                                alt="img"
                                style={{ cursor: "pointer" }}
                              />
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
