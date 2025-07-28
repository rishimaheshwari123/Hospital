import Link from "next/link";
import React from "react";
import { FiPhone } from "react-icons/fi";

const HeroSection = () => {
  return (
    <div className="relative bg-[#00a0aa]/30 ">
      <div className=" w-[98vw] top-0 lg:rounded-br-[250px] overflow-hidden -z-50 ">
        <video autoPlay muted loop className="w-full h-[90vh] object-cover">
          <source src="/slider.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 w-[98vw] lg:rounded-br-[250px] bg-black bg-opacity-65"></div>

        <div
          className="absolute inset-0 flex flex-col justify-center mt-20 px-6 lg:px-16 text-white  
        lg:items-start lg:text-left sm:items-center sm:text-center"
        >
          <h1 className="text-4xl lg:text-6xl font-bold max-w-5xl">
            Orlando's Trusted Heart Health Experts
          </h1>
          <p className="text-lg lg:text-xl mt-10 max-w-lg">
            At Orlando Heart & Vascular Institute, our mission is to deliver
            top-tier cardiovascular care with innovative treatments and
            personalized attention, ensuring better heart health for every
            patient
          </p>
          <div className="mt-14 flex flex-col lg:flex-row gap-2">
            <Link
              href={"/appointment"}
              className="bg-[#00BFB3] text-white text-center px-6 py-2.5 rounded-md hover:bg-[#00a69b] transition-colors font-medium"
            >
              Schedule an Appointment
            </Link>
            <a
              href="tel:4077678554"
              className="bg-[#00BFB3] text-center text-white px-6 py-2.5 rounded-md hover:bg-[#00a69b] transition-colors font-medium flex items-center justify-center gap-2"
            >
              <FiPhone className="text-lg mt-[2px]" />
              (407) 767-8554
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
