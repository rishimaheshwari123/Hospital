"use client";
import React, { useEffect, useState } from "react";
import { FaLocationDot, FaPhone, FaPaperPlane } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    dob: "",
    message: "",
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Sending...",
      text: "Please wait while we process your request.",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const response = await axios.post(
        "https://hospital-5z8n.onrender.com/api/v1/user/contact",
        formData
      );
      if (response?.data) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
      }
      setFormData({
        name: "",
        email: "",
        contact: "",
        subject: "",
        dob: "",
        message: "",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to send message. Try again later.",
        icon: "error",
      });
    }
  };

  if (!isClient) return null;
  return (
    <div className="mt-40 w-11/12 mx-auto">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.3538007121183!2d-81.376453324713!3d28.578329175694382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77a84bb122e1d%3A0x2e68bdabdbc58acc!2s308%20E%20Hazel%20St%2C%20Orlando%2C%20FL%2032804%2C%20USA!5e1!3m2!1sen!2sin!4v1740653106999!5m2!1sen!2sin"
        allowFullScreen
        className="w-full h-96 rounded-lg shadow-lg"
        loading="lazy"
      ></iframe>

      <div className="grid lg:grid-cols-2 gap-10 my-20 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="p-3 bg-[#00BFB3] text-white rounded-full text-xl">
              <FaLocationDot />
            </span>
            <span className="text-gray-700">
              450 W. Central Parkway – Altamonte Springs, FL 32714
              <br />
              33 S. Washington Avenue, Apopka, FL 32703
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="p-3 bg-[#00BFB3] text-white rounded-full text-xl">
              <MdEmail />
            </span>
            <span className="text-gray-700">info.inextets@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="p-3 bg-[#00BFB3] text-white rounded-full text-xl">
              <FaPhone />
            </span>
            <span className="text-gray-700">
              (407) 767-8554
              <br />
              407-767-9121
            </span>
          </div>
        </div>

        <form
          className="bg-white p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border rounded-md outline-none focus:border-[#00BFB3]"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border rounded-md outline-none focus:border-[#00BFB3]"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              placeholder="Phone"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="p-3 border rounded-md outline-none focus:border-[#00BFB3]"
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="p-3 border rounded-md outline-none focus:border-[#00BFB3]"
            />
          </div>
          <input
            type="date"
            placeholder="Date of Birth"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="p-3 border rounded-md outline-none focus:border-[#00BFB3] w-full mt-4"
          />
          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border rounded-md outline-none focus:border-[#00BFB3] w-full mt-4 h-28"
          ></textarea>
          <button
            type="submit"
            className="flex items-center gap-2 bg-[#00BFB3] text-white px-5 py-3 rounded-md mt-4 w-full justify-center hover:bg-teal-600 transition-all"
          >
            <FaPaperPlane /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
