import React from "react";
import Link from "next/link";

const WinterTea = () => {
  return (
    <>
      <section className="w-full animate-fadeInUp">
        <div>
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
        </div>
      </section>
    </>
  );
};

export default WinterTea;

