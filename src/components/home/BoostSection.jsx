import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

const BoostSection = () => {
  return (
    <>
      <section
        className="elementor-element elementor-element-2fa607b elementor-section-boxed elementor-section-height-default elementor-section-height-inner-default elementor-section elementor-top-section animated fadeInUp"
        data-id="2fa607b"
        data-element_type="section"
        data-settings='{"background_background":"classic","animation":"fadeInUp"}'
      >
        <div className="px-6 md:px-12 lg:px-24 pb-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h4 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Your Exercise Boost <br /> with Benefits
            </h4>
            <p className="text-base text-gray-500 font-medium">
              Our blends don't sacrifice well-being for function.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Left Benefits */}
            <div className="w-full md:w-1/3 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <img
                  src="https://cdn.shopify.com/s/files/1/0905/2012/files/save-energy.svg?v=1685004916"
                  alt="Energize without the crash"
                  className="w-18 h-18"
                />
                <div>
                  <h3 className="text-xl font-semibold">
                    Energize without the crash
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Sed cras ornare arcu dui vivamus arcu felis bibendum.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img
                  src="https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_gym.svg?v=1684921221"
                  alt="Have a better workout"
                  className="w-14 h-14"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    Have a better workout
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Sed cras ornare arcu dui vivamus arcu felis bibendum.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img
                  src="https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_guts.svg?v=1684921221"
                  alt="Support your gut"
                  className="w-14 h-14"
                />
                <div>
                  <h3 className="text-lg font-semibold">Support your gut</h3>
                  <p className="text-gray-600 text-sm">
                    Sed cras ornare arcu dui vivamus arcu felis bibendum.
                  </p>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="flex justify-center">
              <img
                src="https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_image_51.png?v=1684921221"
                alt="Teapoz Image"
                className="max-w-full h-auto"
              />
            </div>

            {/* Right Benefits */}
            <div className="w-full md:w-1/3 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <img
                  src="https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_tea-leaf.svg?v=1684921221"
                  alt="Created with you in mind"
                  className="w-14 h-14"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    Created with you in mind
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Sed cras ornare arcu dui vivamus arcu felis bibendum.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img
                  src="https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_love-world.svg?v=1684921221"
                  alt="We love the earth"
                  className="w-14 h-14"
                />
                <div>
                  <h3 className="text-lg font-semibold">We love the earth</h3>
                  <p className="text-gray-600 text-sm">
                    Sed cras ornare arcu dui vivamus arcu felis bibendum.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img
                  src="https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_tea-pot.svg?v=1684921221"
                  alt="Real flavor always"
                  className="w-14 h-14"
                />
                <div>
                  <h3 className="text-lg font-semibold">Real flavor always</h3>
                  <p className="text-gray-600 text-sm">
                    Sed cras ornare arcu dui vivamus arcu felis bibendum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoostSection;
