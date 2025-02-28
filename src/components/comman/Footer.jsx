"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
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
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Image src={logo} alt="not found" height={80} />

          <p className="text-white mt-3">
            Center for Cardiovascular Excellence - Cath Lab 308 E Hazel St,
            Orlando, FL 32804
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-white">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/cathlab" className="hover:text-white">
                Cath Lab
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
          <p className="flex items-center gap-2 text-white">
            <FaPhoneAlt /> (407)-767-9121
          </p>
          <p className="flex items-center gap-2 text-white mt-2">
            <FaPhoneAlt /> (407) 767-8554
          </p>

          <p className="flex items-start gap-2 text-white mt-4">
            <FaMapMarkerAlt className="mt-1" />
            450 W. Central Parkway – Altamonte Springs, FL 32714
          </p>
          <p className="flex items-start gap-2 text-white mt-4">
            <FaMapMarkerAlt className="mt-1" />
            33 S. Washington Avenue, Apopka, FL 32703
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-5">
        <hr />
      </div>

      <div className="mt-5 border-t border-gray-700 pt-6 text-center text-white">
        <p>Developed By Varn </p>
        <Link href="#" className="hover:text-white">
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
