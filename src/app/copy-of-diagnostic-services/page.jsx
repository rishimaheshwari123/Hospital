import Image from "next/image";
import interventionalCardiology from "@/assets/education.avif";
import { Slide } from "react-awesome-reveal";
import Diagnostic2 from "@/components/core/diagnosticservice/Diagnostic2";
import Diagnostic3 from "@/components/core/diagnosticservice/Diagnostic3";

const CopyOfdiagnosticService = () => {
  return (
    <div className="bg-[#c2f6f5]">
      <div className="bg-[#c2f6f5] h-40"></div>
      <div className="flex  flex-col max-w-7xl mx-auto md:flex-row items-center justify-between ">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <Slide direction="left">
            <h1 className="text-5xl font-extrabold text-blue-700">
              Patient Education{" "}
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              At Orlando Heart and Vascular, we believe that informed patients
              make better health decisions. Our Patient Education services are
              designed to empower you with the knowledge and resources needed to
              understand your cardiovascular health, manage your condition, and
              actively participate in your treatment journey.
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
      <br />
      <div className=" flex flex-col  w-full items-center">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 ">
          Why is Patient Education Important?
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
      </div>
      <p className="text-center">
        Understanding your heart health is crucial to making the right choices
        for your well-being. Through patient education, we provide you with:
      </p>
      <Diagnostic2 />
      <Diagnostic3 />
    </div>
  );
};

export default CopyOfdiagnosticService;
