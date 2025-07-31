import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import s1 from "@/assets/s1.avif";
import s2 from "@/assets/s2.avif";
import s3 from "@/assets/s3.avif";
import s4 from "@/assets/s4.jpg";
import s5 from "@/assets/s5.jpg";
import s6 from "@/assets/s6.jpg";
import s7 from "@/assets/s7.jpg";
import s8 from "@/assets/s8.jpg";
import s9 from "@/assets/s9.jpg";
import s10 from "@/assets/s10.jpg";
import s11 from "@/assets/s11.png";
import s12 from "@/assets/s12.jpg";
import Link from "next/link";
const treatments = [
  {
    title: "Same Day  Cardiovascular Care and Walk-Ins",
    image: s1,
  },
  {
    title: "Non Invasive Cardiovascular Imaging",
    image: s2,
  },
  {
    title: "Cardiac and Vascular CT Scans",
    image: s3,
  },
  {
    title: "Cardiac Stress Testing",
    image: s4,
  },
  {
    title: "Cardiac Arrhythmia Detection Services",
    image: s5,
  },
  {
    title: "Advanced Cardiac Care Center",
    image: s6,
  },
  {
    title: "Venous Disease Therapies",
    image: s7,
  },
  {
    title: "Outpatient Cath Lab Services",
    image: s8,
  },
  { title: "Internal Device Placement", image: s9 },

  {
    title: "Hospital Based Procedures",
    image: s10,
  },
  {
    title: "Remote Patient Monitoring ",
    image: s11,
  },
  {
    title: "CCM & PCM ",
    image: s12,
  },
];

const ServiceHome = () => {
  return (
    <div className="bg-[#c2f6f5] py-10 px-6">
      <div className="max-w-4xl my-10 mx-auto flex flex-col md:flex-row gap-8 justify-center px-4 md:px-0">
        <p className="w-full md:w-1/2 text-4xl md:text-5xl font-bold text-center md:text-left">
          Your Health is
          <br />
          <span>Our #1 Priority</span>
        </p>
        <p className="w-full md:w-[70%] text-lg md:text-xl text-center md:text-left">
          At Orlando Heart and Vascular, we are committed to providing
          exceptional cardiovascular care, With a focus on personalized healing,
          our experienced specialists deliver compassionate care that goes
          beyond treating symptoms. Trust us to prioritize your heart and
          vascular health with expertise and dedication.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-x-6 gap-y-12">
        {treatments.map((treatment, index) => (
          <div key={index} className="relative bg-white rounded-xl shadow-lg ">
            <Image
              src={treatment.image}
              alt={treatment.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            {/* Overlay Content */}
            <div className="absolute -bottom-8 left-1/2 h-32 -translate-x-1/2 bg-white p-3 rounded-md text-center shadow-md w-[80%]">
              <h2 className="text-lg font-semibold">{treatment.title}</h2>
              <Link
                href={"/services"}
                className="mt-2 flex mx-auto items-center justify-center gap-2 bg-[#00BFB3] text-white px-4 py-2 rounded-md hover:bg-[#00a69b] transition"
              >
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ServiceHome;
