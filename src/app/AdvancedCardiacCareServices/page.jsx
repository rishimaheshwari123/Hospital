import Image from "next/image";
import interventionalCardiology from "@/assets/InterventionalCardiology.avif";
import { Slide } from "react-awesome-reveal";
// import InterventionalCardiology1 from "@/components/core/InterventionalCardiology/InterventionalCardiology1";
// import InterventionalCardiology2 from "@/components/core/InterventionalCardiology/InterventionalCardiology2";
// import InterventionalCardiology3 from "@/components/core/InterventionalCardiology/InterventionalCardiology3";

import { HeartPulse, Stethoscope } from "lucide-react"; // Use any suitable icon

const services = [
  "STAT Care - Chest Pain, EKGs, Syncope, DVT, HTN Urgencies, Pre-Op Clearance",
  "Congenital Heart Defects in Adults",
  "Acute Coronary Syndromes (ACS)",
  "Diseases of the Aorta",
  "Advanced Heart Failure",
  "Pacemaker & AICD Implants",
  "Amyloidosis",
  "Pulmonary Hypertension",
  "Arrhythmia & Heart Rhythm Disorders",
  "Valvular Heart Disease",
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
              Advanced Cardiac Care Services
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              At Orlando Heart and Vascular, our Advanced Cardiac Care Services
              offer comprehensive and innovative treatments for a wide range of
              heart conditions. Using the latest technologies and minimally
              invasive methods, we focus on improving heart health, enhancing
              patient outcomes, and reducing recovery time—ensuring personalized
              care for every patient.
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
