"use client";
import React from "react";
import Image from "next/image";

// Reusable Component for Ad Items
const AdItem = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-y-0">
      {/* Mobile Image */}
      <div className="bg-[#8CBC4F] rounded-full p-1 sm:p-2 md:hidden">
        <Image src={imgSrc} alt={title} width={40} height={40} />
      </div>

      {/* Desktop Image */}
      <div className="bg-[#8CBC4F] rounded-full p-1 mr-1 hidden md:block">
        <Image src={imgSrc} alt={title} width={100} height={100} />
      </div>

      {/* Text Content */}
      <div className="text-white text-center md:text-left space-y-1">
        <h3 className="text-[12px] md:text-lg font-semibold">{title}</h3>
        <p className="text-[10px] md:text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};


// Main AdSection Component
const AdSection = () => {
  const adItems = [
    {
      imgSrc: "https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_free-shipping.svg",
      title: "Free Shipping",
      description: "On orders above 299 in India. Delivering worldwide!",
    },
    {
      imgSrc: "https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_trophy.svg",
      title: "Steep Time Rewards",
      description: "Collect points and earn rewards for your next order.",
    },
    {
      imgSrc: "https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_tea.svg",
      title: "Free Samples",
      description: "Relish the happiness of 3 tea samples with your order.",
    },
    {
      imgSrc: "https://cdn.shopify.com/s/files/1/0905/2012/files/teapoz_gift-box.svg?v=1685003819",
      title: "Refer & Earn",
      description: "Give a gift of good health and earn while you’re at it.",
    },
  ];

  return (
    <section className="flex flex-wrap justify-center items-center bg-[#194A33] px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
        {adItems.map((item, index) => (
          <AdItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default AdSection;

