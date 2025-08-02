import Image from "next/image";
import cathlab from "@/assets/cath.avif";

import { Fade, Slide } from "react-awesome-reveal";
import CathLabInfo from "@/components/core/CathLabInfo";
import CathLabProcedure from "@/components/core/CathLabProcedure";
import CathLabDetails from "@/components/core/CathLabDetails";
import {
  FaClipboardCheck,
  FaHeartbeat,
  FaProcedures,
  FaStethoscope,
} from "react-icons/fa";
const Page = () => {
  const benefits = [
    {
      title: "Non-Invasive",
      desc: "No surgery, no pain, and no downtime.",
    },
    {
      title: "Highly Accurate",
      desc: "Detects even minor abnormalities.",
    },
    {
      title: "Quick Results",
      desc: "Most scans take under 15 minutes.",
    },
    {
      title: "Early Detection",
      desc: "Identifies heart and vessel conditions early.",
    },
    {
      title: "Safe and Effective",
      desc: "Low-risk with advanced low-dose radiation technology.",
    },
  ];

  const reasons = [
    "Chest pain or pressure",
    "Risk factors for coronary artery disease",
    "Suspected plaque buildup or blockages",
    "Known or suspected aortic aneurysm",
    "Abnormal stress test or EKG results",
    "Vascular disease symptoms (e.g., leg pain, numbness, or swelling)",
    "Need for pre-surgical cardiovascular evaluation",
  ];

  return (
    <div className="bg-[#c2f6f5] p-5">
      <div className="bg-[#c2f6f5] lg:h-40 h-20"></div>
      <div className="flex  flex-col max-w-7xl mx-auto md:flex-row items-center justify-between ">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <Slide direction="left">
            <h1 className="text-3xl lg:text-5xl font-extrabold text-blue-700">
              Cardiac and Vascular CT Scans
            </h1>
            <h2 className="text-3xl font-semibold text-gray-800">
              Advanced Imaging for Heart and Blood Vessel Health
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              At Orlando Heart and Vascular, our Cardiac and Vascular CT Scan
              services utilize cutting-edge computed tomography (CT) technology
              to capture detailed images of the heart and blood vessels. These
              non-invasive scans provide high-resolution views that help
              diagnose, monitor, and guide the treatment of cardiovascular
              conditions with speed and accuracy.
            </p>
          </Slide>
        </div>

        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Slide direction="right">
            <div className="relative w-full max-w-md h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={cathlab}
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
          Cardiac and Vascular CT Scans
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
      <br />
      {/* first */}

      <div className="max-w-7xl mx-auto  grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-blue-600">
          <div className="flex items-center gap-3 mb-4">
            <FaHeartbeat className="text-3xl text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              What is a Cardiac and Vascular CT Scan?
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            A Cardiac or Vascular CT Scan is a non-invasive imaging test that
            uses X-ray technology to produce detailed cross-sectional images of
            your heart and blood vessels. These scans help detect blockages,
            abnormalities, calcium buildup, and other structural issues that may
            not be visible through traditional methods.
          </p>
        </div>

        <div className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-cyan-400">
          <div className="flex items-center gap-3 mb-4">
            <FaStethoscope className="text-3xl text-cyan-400" />
            <h2 className="text-2xl font-semibold">Why is it Important?</h2>
          </div>
          <p className="leading-relaxed">
            Cardiac and Vascular CT Scans provide an early and accurate
            diagnosis of many cardiovascular conditions. They help detect
            life-threatening issues such as coronary artery disease, aneurysms,
            and vascular narrowing—often before symptoms occur. The speed and
            clarity of these scans make them vital tools for preventive
            cardiology and treatment planning.
          </p>
        </div>
      </div>
      {/* first */}
      <br />

      {/* second */}

      <Slide direction="left">
        <div className="max-w-7xl mx-auto  grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-blue-600">
            <div className="flex items-center gap-3 mb-4">
              <FaClipboardCheck className="text-3xl text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Preparation
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Preparation for a CT scan may vary depending on the type of test.
              You may be asked to avoid eating or drinking for a few hours
              beforehand, refrain from consuming caffeine or nicotine, inform
              your doctor about any allergies—especially to contrast dye—and
              temporarily discontinue certain medications. Our team will provide
              you with clear, personalized instructions tailored to your
              specific scan.
            </p>
          </div>

          {/* The Procedure Card */}
          <div className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-cyan-400">
            <div className="flex items-center gap-3 mb-4">
              <FaProcedures className="text-3xl text-cyan-400" />
              <h2 className="text-2xl font-semibold">The Procedure</h2>
            </div>
            <p className="leading-relaxed">
              You will lie on a table that moves through a donut-shaped CT
              scanner. If contrast dye is needed, it will be administered via IV
              to highlight blood vessels and heart structures. The scan is
              quick—usually taking only 10–15 minutes—and completely painless.
              You’ll need to remain still during the imaging process for best
              results.
            </p>
          </div>

          {/* Recovery Card */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-green-500">
            <div className="flex items-center gap-3 mb-4">
              <FaHeartbeat className="text-3xl text-green-500" />
              <h2 className="text-2xl font-semibold text-gray-800">Recovery</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Since the procedure is non-invasive, there is no recovery time. If
              contrast dye is used, we recommend drinking fluids afterward to
              help flush it from your system. You may return to normal
              activities immediately unless advised otherwise by your doctor.
            </p>
          </div>
        </div>
      </Slide>
      {/* second */}

      {/* third */}
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section: Benefits */}
          <Fade direction="up" cascade damping={0.2}>
            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                Benefits of Cardiac and Vascular CT Scans
              </h2>
              <ul className="space-y-3 text-gray-700">
                {benefits.map((item, index) => (
                  <Fade key={index} direction="up" delay={index * 200}>
                    <li className="flex items-start">
                      <span className="text-blue-500 text-lg mr-2">✔</span>
                      <span>
                        <strong>{item.title}:</strong> {item.desc}
                      </span>
                    </li>
                  </Fade>
                ))}
              </ul>
            </div>
          </Fade>

          {/* Right Section: When Needed */}
          <Fade direction="up" cascade damping={0.2}>
            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                When is a CT Scan Needed?
              </h2>

              <ul className="space-y-3 text-gray-700">
                {reasons.map((reason, index) => (
                  <Fade key={index} direction="up" delay={index * 200}>
                    <li className="flex items-start">
                      <span className="text-blue-500 text-lg mr-2">✔</span>
                      {reason}
                    </li>
                  </Fade>
                ))}
              </ul>
            </div>
          </Fade>
        </div>
      </div>
      {/* third */}
    </div>
  );
};

export default Page;
