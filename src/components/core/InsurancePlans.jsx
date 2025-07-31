"use client";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const InsurancePlans = () => {
  const [active, setIsActive] = useState("shop");

  const handleChangeTab = (tabName) => {
    setIsActive(tabName);
  };

  return (
    <div className="p-6 py-20 bg-gray-100  flex flex-col items-center">
      <div className="max-w-3xl text-center">
        <p className="text-4xl lg:text-5xl font-bold lg:leading-tight">
          Accepting Major <br />
          <span className=" inline-block">Insurance Plans</span>
        </p>

        <p className="mt-4 text-gray-600">
          Orlando Heart and Vascular's goal is to ensure that our patients are
          taken care of. That's why we accept ALL forms of insurance, and even
          offer flexible payment plan options for patients who do not have
          insurance.
        </p>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mt-6">
          <button
            className={`px-6 py-2 rounded-full text-lg font-semibold transition ${
              active === "shop"
                ? "bg-teal-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleChangeTab("shop")}
          >
            One-Stop Shop
          </button>
          <button
            className={`px-6 py-2 rounded-full text-lg font-semibold transition ${
              active === "services"
                ? "bg-teal-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleChangeTab("services")}
          >
            Our Services
          </button>
          <button
            className={`px-6 py-2 rounded-full text-lg font-semibold transition ${
              active === "process"
                ? "bg-teal-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleChangeTab("process")}
          >
            Our Process
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md text-left">
          {active === "shop" && (
            <>
              <h3 className="text-2xl font-semibold text-teal-600">
                We Can Treat All Heart and Vascular Needs Under One Roof
              </h3>
              <p className="mt-2 text-gray-700">
                Say goodbye to bouncing around from doctor-to-doctor in order to
                get treated.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-2" /> Diagnosis
                  and Treatments
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-2" /> Skilled
                  Specialist in One Location
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-2" /> Streamlined
                  Coordination
                </li>
              </ul>
            </>
          )}

          {active === "services" && (
            <>
              <h3 className="text-2xl font-semibold text-teal-600">
                Comprehensive Cardiovascular Services
              </h3>
              <p className="mt-2 text-gray-700">
                We specialize in treating coronary diseases, peripheral artery
                diseases, and vein diseases.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-2" /> Diagnosis
                  and Testing
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-2" /> Ultrasounds
                  and Imaging
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-2" /> Minimally
                  Invasive Procedures
                </li>
              </ul>
            </>
          )}

          {active === "process" && (
            <>
              <h3 className="text-2xl font-semibold text-teal-600">
                A Streamlined Care For All Your Needs
              </h3>
              <p className="mt-2 text-gray-700">
                From booking an appointment to getting your procedure, we ensure
                a smooth patient experience.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-2" /> Online
                  Appointment with Reminders
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-2" />{" "}
                  Comprehensive Diagnostics
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-2" /> Cutting-edge
                  Treatments
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsurancePlans;
