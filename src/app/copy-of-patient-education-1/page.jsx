import Image from "next/image";
import interventionalCardiology from "@/assets/health.avif";
import { Slide } from "react-awesome-reveal";
import Health1 from "@/components/core/health/Health1";
import Health2 from "@/components/core/health/Health2";
import Health3 from "@/components/core/health/Education3";

const Health = () => {
  return (
    <div className="bg-[#c2f6f5]">
      <div className="bg-[#c2f6f5] h-40"></div>
      <div className="flex  flex-col max-w-7xl mx-auto md:flex-row items-center justify-between ">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <Slide direction="left">
            <h1 className="text-5xl font-extrabold text-blue-700">
              Telehealth Services{" "}
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              At Orlando Heart and Vascular, we are committed to providing
              convenient, accessible care for our patients. Our Telehealth
              Services bring expert cardiovascular care directly to your home,
              allowing you to connect with our physicians and advanced practice
              providers for consultations, follow-ups, and ongoing care without
              having to visit our office in person.
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
          What are Telehealth Services?
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
      <Health1 />
      <Health2 />

      <div className=" flex flex-col  w-full items-center">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 ">
          What Services Can Be Delivered via Telehealth?{" "}
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
        Our telehealth services allow you to access a range of cardiovascular
        care options, including:
      </p>
      <br />
      <br />
      <br />
      <Health3 />
    </div>
  );
};

export default Health;
