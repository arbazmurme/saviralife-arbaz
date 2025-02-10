import Link from "next/link";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const WinterTea = () => {
  return (
    <>
      <section className="elementor-element elementor-element-e158083 elementor-section-full_width elementor-section-height-default elementor-section-height-inner-default elementor-section elementor-top-section animated fadeInUp">
        <section className="w-full h-auto">
            <div className="flex flex-wrap">
              <div className="w-full">
                <div className="flex flex-col">
                  <div className="relative">
                    <div className="w-full">
                      <div className="overflow-hidden">
                        <div className="flex justify-center items-center">
                          <Link href="/category">
                            <img
                              src="/assets/Savira_Banner1.png"
                              className="w-full h-auto object-cover cursor-pointer"
                              alt="img"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </section>
    </>
  );
};

export default WinterTea;
