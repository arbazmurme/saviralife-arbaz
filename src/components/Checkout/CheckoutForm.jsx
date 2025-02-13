"use client";
import Image from "next/image";
import "../../app/tailwind.css";
import React, { useState } from "react";
import {
  FaShoppingCart,
  FaCheckCircle,
  FaClipboardList,
  FaRegCheckCircle,
  FaPlus,
} from "react-icons/fa";

const CheckoutForm = () => {
  const [items, setItems] = useState([
    {
      name: "Tea Forte Lotus Relaxing Teas Presentation Box",
      img: "https://res.cloudinary.com/dpplqvnx6/image/upload/v1734016443/Category/DesktopImage/avrx2tqqmkzl6aq1fy1o.jpg",
      quantity: 1,
      price: 19.12,
      color: "White",
    },
  ]);

  const calculateSubtotal = () => {
    let subtotal = 0;
    items.forEach((item) => {
      subtotal += item.quantity * item.price;
    });
    return subtotal;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + 75;
  };

  return (
    <section className="bg-gray-100 py-8 antialiased md:py-16">
      <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        {/* Progress Bar */}
        <ol className="flex items-center w-full max-w-2xl text-center text-sm font-medium text-gray-500 sm:text-base">
          <li className="flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
            <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] sm:after:hidden">
              <FaShoppingCart className="me-2 h-4 w-4 sm:h-5 sm:w-5" /> Cart
            </span>
          </li>
          <li className="flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
            <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] sm:after:hidden">
              <FaRegCheckCircle className="me-2 h-4 w-4 sm:h-5 sm:w-5" />{" "}
              Checkout
            </span>
          </li>
          <li className="flex shrink-0 items-center">
            <FaClipboardList className="me-2 h-4 w-4 sm:h-5 sm:w-5" /> Order
            Summary
          </li>
        </ol>

        <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
          <div className="min-w-0 flex-1 space-y-8">
            {/* Delivery Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Delivery Details
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="your_name"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="your_name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Bonnie Green"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="your_email"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Your Email*
                  </label>
                  <input
                    type="email"
                    id="your_email"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>

                {/* House Number */}
                <div>
                  <label
                    htmlFor="house_number"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    House Number
                  </label>
                  <input
                    type="text"
                    id="house_number"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="123"
                    required
                  />
                </div>

                {/* Address */}
                <div>
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="123 Main Street"
                    required
                  />
                </div>

                {/* Area */}
                <div>
                  <label
                    htmlFor="area"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Area
                  </label>
                  <input
                    type="text"
                    id="area"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Downtown"
                    required
                  />
                </div>

                {/* State */}
                <div>
                  <label
                    htmlFor="state"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="California"
                    required
                  />
                </div>

                {/* Zip/Postal Code */}
                <div>
                  <label
                    htmlFor="zip_code"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Zip/Postal Code
                  </label>
                  <input
                    type="text"
                    id="zip_code"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="90001"
                    required
                  />
                </div>

                {/* Country */}
                <div>
                  <label
                    htmlFor="country"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="United States"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="+1 234 567 8900"
                    required
                  />
                </div>

                {/* Add New Address Button */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100"
                  >
                    <FaPlus className="h-5 w-5" /> Add New Address
                  </button>
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Payment</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-start">
                    <input
                      id="online-payment"
                      type="radio"
                      name="payment-method"
                      className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
                      defaultChecked
                    />
                    <div className="ml-4 text-sm">
                      <label
                        htmlFor="online-payment"
                        className="font-medium text-gray-900"
                      >
                        {" "}
                        Online Payment{" "}
                      </label>
                      <p className="mt-1 text-xs text-gray-500">
                        Pay securely using online payment services
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-start">
                    <input
                      id="credit-card"
                      type="radio"
                      name="payment-method"
                      className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
                      defaultChecked
                    />
                    <div className="ml-4 text-sm">
                      <label
                        htmlFor="credit-card"
                        className="font-medium text-gray-900"
                      >
                        {" "}
                        Credit Card{" "}
                      </label>
                      <p className="mt-1 text-xs text-gray-500">
                        Pay with your credit card
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-start">
                    <input
                      id="cash-on-delivery"
                      type="radio"
                      name="payment-method"
                      className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
                    />
                    <div className="ml-4 text-sm">
                      <label
                        htmlFor="cash-on-delivery"
                        className="font-medium text-gray-900"
                      >
                        {" "}
                        Cash on Delivery{" "}
                      </label>
                      <p className="mt-1 text-xs text-gray-500">
                        Pay with cash when your order is delivered
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-300 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100"
              >
                Continue
              </button>
            </div>
            

          </div>

          {/* Order Summary */}
          <div className="mt-6 w-full space-y-6 lg:mt-0 lg:max-w-xs xl:max-w-lg">
            <div className="flow-root">
              <div className="-my-3 divide-y divide-gray-200">
                <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                  {/* Heading */}
                  <h2 className="text-xl font-semibold mb-5 text-gray-900">
                    Bill Summary
                  </h2>

                  {/* Item List */}
                  <>
                    <div className="space-y-4">
                      {items.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between border-b pb-4 last:border-none"
                        >
                          {/* Product Image */}
                          <div className="w-20 h-20 flex-shrink-0">
                            <Image
                              src={item.img}
                              alt={item.name}
                              width={80}
                              height={80}
                              className="rounded-md object-cover"
                            />
                          </div>

                          {/* Product Details */}
                          <div className="flex-1 px-4">
                            <p className="font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-gray-500 text-sm">
                              {item.color}
                            </p>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <p className="font-semibold text-gray-900">
                              ₹{item.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      {items.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between border-b pb-4 last:border-none"
                        >
                          {/* Product Image */}
                          <div className="w-20 h-20 flex-shrink-0">
                            <Image
                              src={item.img}
                              alt={item.name}
                              width={80}
                              height={80}
                              className="rounded-md object-cover"
                            />
                          </div>

                          {/* Product Details */}
                          <div className="flex-1 px-4">
                            <p className="font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-gray-500 text-sm">
                              {item.color}
                            </p>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <p className="font-semibold text-gray-900">
                              ₹{item.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>

                  {/* Subtotal and Shipping */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-gray-700">Subtotal</p>
                      <p className="font-medium text-gray-900">
                        ₹{calculateSubtotal().toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-gray-700">Shipping</p>
                      <p className="font-medium text-gray-900">₹75</p>
                    </div>
                  </div>

                  {/* Total */}
                  <hr className="my-4 border-gray-300" />
                  <div className="flex items-center justify-between text-lg font-semibold text-gray-900">
                    <p>Total (tax excl.)</p>
                    <p>₹{calculateTotal().toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
              Place Order
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CheckoutForm;
