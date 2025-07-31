import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import s1 from "@/assets/service1.avif";
import s2 from "@/assets/service2.avif";
import s3 from "@/assets/service3.avif";
import s4 from "@/assets/service4.avif";
import s5 from "@/assets/service5.avif";
import s6 from "@/assets/rpm.jpg";
import Link from "next/link";

const treatments = [
  {
    title: "Advanced Cardiac Care Services",
    desc: "Comprehensive, state-of-the-art treatments for heart conditions, including interventional procedures, heart failure management, and preventive cardiac care.",
    image: s1,
    link: "AdvancedCardiacCareServices",
  },
  {
    title: "Arterial, Venous & Lymphatic Disease Care & Treatments",
    desc: "Expert diagnosis and treatment of artery, vein, and lymphatic system disorders, including varicose veins, DVT, and peripheral artery disease.",
    image: s2,
    link: "ArterialVenous",
  },
  {
    title: "In-Office Advanced Treatments & Diagnostic Imaging",
    desc: "Convenient access to advanced diagnostic imaging and minimally invasive procedures performed right in our office for faster, more accurate care.",
    image: s3,
    link: "InOfficeAdvanced",
  },
  {
    title: "Preventive Cardiology",
    desc: "Preventive care focuses on identifying and managing risk factors before they lead to serious heart conditions. This proactive approach helps you maintain optimal heart health.",
    image: s4,
    link: "copy-of-patient-education",
  },
  // {
  //   title: "Telehealth Services",
  //   desc: "Telehealth allows you to meet with your healthcare provider remotely through secure video calls, phone calls, or other digital platforms.",
  //   image: s5,
  //   link: "copy-of-patient-education-1",
  // },
  {
    title: "RPM, PCM Services",
    desc: "Personalized remote care plans including Remote Patient Monitoring (RPM) and Principal Care Management (PCM) to proactively manage chronic conditions and improve outcomes.",
    image: s6, // Make sure to define or import s6
    link: "rpm-ccm-pcm",
  },
];

const Service = () => {
  return (
    <div className="bg-[#c2f6f5] py-12 px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
        <p className="text-gray-700 mt-2">
          At Orlando Heart and Vascular, we offer a comprehensive range of
          services designed to meet your cardiovascular needs. Hover over each
          service to learn more.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        <Fade direction="up" cascade damping={0.2}>
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Hidden Content - Visible on Hover */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <h3 className="text-lg font-semibold text-white">
                  {treatment.title}
                </h3>
                <p className="text-gray-200 text-sm mt-2">{treatment.desc}</p>
                <Link
                  href={treatment?.link}
                  className="mt-3 flex items-center justify-center gap-2 bg-[#00BFB3] text-white px-4 py-2 rounded-md hover:bg-[#00a69b] transition"
                >
                  Learn More <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Service;
