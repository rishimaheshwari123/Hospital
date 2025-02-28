import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import s1 from "@/assets/service1.avif";
import s2 from "@/assets/service2.avif";
import s3 from "@/assets/service3.avif";
import s4 from "@/assets/service4.avif";
import s5 from "@/assets/service5.avif";
import Link from "next/link";

const treatments = [
  {
    title: "Interventional Cardiology",
    desc: "Explore our advanced procedures designed to treat heart conditions effectively and improve your quality of life.",
    image: s1,
    link: "interventional-cardiology",
  },
  {
    title: "Diagnostic Services",
    desc: "Discover our state-of-the-art diagnostic tools that help us accurately assess your heart health and tailor your treatment plan.",
    image: s2,
    link: "copy-of-interventional-cardiology",
  },
  {
    title: "Patient Education",
    desc: "Empower yourself with knowledge! Our resources and programs provide valuable information to help you understand your condition and make informed decisions.",
    image: s3,
    link: "copy-of-diagnostic-services",
  },
  {
    title: "Preventive Care",
    desc: "Learn about our preventive strategies that focus on maintaining heart health and reducing the risk of cardiovascular diseases through lifestyle changes and regular check-ups.",
    image: s4,
    link: "copy-of-patient-education",
  },
  {
    title: "Telehealth Services",
    desc: "Access your care from the comfort of home! Our telehealth services offer virtual consultations for your convenience and safety.",
    image: s5,
    link: "copy-of-patient-education-1",
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
