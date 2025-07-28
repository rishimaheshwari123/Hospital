"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFax, // Fax icon for clarity
} from "react-icons/fa";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <footer className="bg-[#004756] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src={logo}
            alt="Company Logo"
            height={80}
            className="mb-4 bg-white rounded-lg p-2"
          />
          <p className="text-sm text-gray-300">
            Dedicated to providing exceptional cardiovascular care. Our mission
            is to enhance lives through advanced medical practices and
            compassionate patient support.
          </p>
        </div>

        {/* Useful Links Section */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-white pb-2 inline-block">
            Useful Links
          </h3>
          <ul className="space-y-2 text-white">
            <li>
              <Link
                href="/about"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="/cathlab"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Cath Lab
              </Link>
            </li>
            <li>
              <Link
                href="/appointments"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Book Appointment
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Address Section */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-white pb-2 inline-block">
            Our Locations
          </h3>
          <div className="space-y-3">
            <p className="flex items-start gap-3 justify-center md:justify-start">
              450 W. Central Parkway – Altamonte Springs, FL 32714
            </p>
            <p className="flex items-start gap-3 justify-center md:justify-start">
              33 S. Washington Avenue, Apopka, FL 32703
            </p>
            <p className="flex items-start gap-3 justify-center md:justify-start">
              {/* <FaMapMarkerAlt className="mt-1 text-xl" /> */}
              Center for Cardiovascular Excellence - Cath Lab 308 E Hazel St,
              Orlando, FL 32804
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-white pb-2 inline-block">
            Contact Us
          </h3>
          <div className="space-y-3">
            <p className="flex items-center gap-3 justify-center md:justify-start">
              <FaPhoneAlt className="text-xl" /> (407) 767-8554
            </p>
            <p className="flex items-center gap-3 justify-center md:justify-start">
              <FaFax className="text-xl" /> (407)-767-9121
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-700 text-center text-gray-400">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Your Orlando Heart & Vascular. All
          rights reserved.
        </p>
        <p className="flex flex-wrap justify-center space-x-4">
          <span>Developed By Varn</span>
          <Link
            href="/terms-conditions"
            className="hover:text-white transition-colors duration-300"
          >
            Terms & Conditions
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
