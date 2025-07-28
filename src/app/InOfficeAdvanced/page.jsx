import Image from "next/image";
import interventionalCardiology from "@/assets/InterventionalCardiology.avif";
import { Slide } from "react-awesome-reveal";
// import InterventionalCardiology1 from "@/components/core/InterventionalCardiology/InterventionalCardiology1";
// import InterventionalCardiology2 from "@/components/core/InterventionalCardiology/InterventionalCardiology2";
// import InterventionalCardiology3 from "@/components/core/InterventionalCardiology/InterventionalCardiology3";

import { HeartPulse } from "lucide-react"; // Use any suitable icon

const services = [
  "Echocardiograms",
  "Cardiac CT Scans - Calcium Score, Coronary CTA, PE Rule Out, Diagnostic Body",
  "Nuclear Medicine Stress Testing",
  "PET/CT Scans - Cardiac and Cancer Rule Out",
  "Holter and Event Monitoring",
  "Dedicated Device and ICD Clinic with Remote Monitoring",
  "EECP (Enhanced External Counterpulsation) - A non-invasive treatment for patients with angina or heart failure",
  "Arterial, Carotid & Venous Ultrasounds",
];

const InterventionalCardiology = () => {
  return (
    <div className="bg-[#c2f6f5]">
      <div className="bg-[#c2f6f5] h-40"></div>
      <div className="flex  flex-col max-w-7xl mx-auto md:flex-row items-center justify-between ">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <Slide direction="left">
            <h1 className="text-5xl font-extrabold text-blue-700">
              In-Office Advanced Treatments & Diagnostic Imaging
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              At Orlando Heart and Vascular, we offer a wide range of in-office
              advanced treatments and diagnostic imaging services. From
              echocardiograms and cardiac CT scans to stress testing and PET/CT
              imaging, our state-of-the-art facility ensures accurate, timely
              diagnosis and personalized care—all under one roof. Our goal is to
              deliver convenience without compromising quality.
            </p>
          </Slide>
        </div>

        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Slide direction="right">
            <div className="relative w-full max-w-md h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={interventionalCardiology}
                alt="Cath Lab Image"
                width={500}
                height={350}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </Slide>
        </div>
      </div>
      <br />
      <br />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {services.map((title, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl p-6 flex items-start gap-4 hover:shadow-2xl transition"
            >
              <HeartPulse className="text-blue-700 w-8 h-8 flex-shrink-0" />
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* <div className=" flex flex-col  w-full items-center">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 ">
          Interventional Cardiology
        </h2>
        <br />
        <div className="flex items-center w-[75px]">
          <div className="h-0.5 bg-[#cee21a]"></div>
          <div className="h-1 w-1 bg-[#cee21a] rounded-full mx-1"></div>
          <div className="h-1 w-1 bg-[#cee21a] rounded-full mx-1"></div>
          <div className="h-1 w-1 bg-[#cee21a] rounded-full mx-1"></div>
          <div
            className="h-[4px] rounded-full w-[10px] flex-grow"
            style={{ backgroundColor: "#cee21a" }}
          ></div>
        </div>
      </div> */}

      {/* <InterventionalCardiology1 />
      <InterventionalCardiology2 />
      <InterventionalCardiology3 /> */}
    </div>
  );
};

export default InterventionalCardiology;
