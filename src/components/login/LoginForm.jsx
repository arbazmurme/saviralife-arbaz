"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Head from "next/head";
import Select from "react-select";
import "../../app/tailwind.css";

const countryOptions = [
  { value: "+1", label: "🇺🇸 (+1)" },
  { value: "+91", label: "🇮🇳 (+91)" },
  { value: "+44", label: "🇬🇧 (+44)" },
  { value: "+61", label: "🇦🇺 (+61)" },
  { value: "+81", label: "🇯🇵 (+81)" },
  { value: "+49", label: "🇩🇪 (+49)" },
  { value: "+33", label: "🇫🇷 (+33)" },
  { value: "+39", label: "🇮🇹 (+39)" },
  { value: "+55", label: "🇧🇷 (+55)" },
  { value: "+971", label: "🇦🇪 (+971)" },
];

export default function LoginForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState(countryOptions[1]); // Default: India (+91)
  const [step, setStep] = useState("login");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const inputRefs = useRef([]);

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhoneNumber(value);
    }
  };

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === "login") {
      setStep("otp");
    } else if (step === "otp") {
      setStep("register");
    } else {
      alert("Account Created Successfully!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Head>
        <title>Login | SaviraLife</title>
        <meta name="description" content="Login to SaviraLife" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden mt-[-300px] md:mt-[-130px]">
        <div className="hidden md:block w-1/2">
          <Image
            src="/login.jpg"
            alt="Login Illustration"
            width={500}
            height={500}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          {step === "login" && (
            <>
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                Welcome To SaviraLife
              </h2>
              <p className="text-gray-500 text-center mb-6">Login or Sign Up</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex border border-gray-300 rounded-lg p-0.5 focus-within:border-indigo-500 items-center">
                  <Select
                    options={countryOptions}
                    value={countryCode}
                    onChange={setCountryCode}
                    className="w-44"
                    styles={{
                      control: (base) => ({
                        ...base,
                        height: "48px",
                        border: "none",
                        boxShadow: "none",
                      }),
                      valueContainer: (base) => ({
                        ...base,
                        padding: "10px",
                      }),
                    }}
                  />
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    maxLength="10"
                    placeholder="Enter phone number"
                    className="w-full outline-none border-none bg-transparent text-gray-800 px-1 text-lg h-10"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold h-12 rounded-lg transition duration-300 flex items-center justify-center text-lg"
                >
                  Continue
                </button>
              </form>
            </>
          )}

          {step === "otp" && (
            <>
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                Enter OTP
              </h2>
              <p className="text-gray-500 text-center mb-4">
                We sent a one-time password to {countryCode.value} {phoneNumber}
              </p>
              <form onSubmit={handleSubmit} className="space-y-5 w-full">
                <div className="flex justify-center space-x-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      value={digit}
                      onChange={(e) => handleChange(index, e)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      maxLength="1"
                      className="w-12 h-12 border border-gray-300 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ))}
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold h-12 rounded-lg transition duration-300 flex items-center justify-center text-lg"
                >
                  Verify OTP
                </button>
              </form>
            </>
          )}

          {step === "register" && (
            <>
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                Create Account
              </h2>
              <p className="text-gray-500 text-center mb-4">
                Complete your profile to continue
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-lg p-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg p-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold h-12 rounded-lg transition duration-300 flex items-center justify-center text-lg"
                >
                  Create Account
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
