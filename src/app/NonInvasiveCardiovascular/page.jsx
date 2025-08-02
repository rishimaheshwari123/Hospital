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
      title: "Early Detection",
      desc: "Identifies issues before symptoms worsen.",
    },
    {
      title: "No Incisions",
      desc: "Procedures are painless and low risk.",
    },
    {
      title: "Time-Efficient",
      desc: "Most tests are quick and performed in-office.",
    },
    {
      title: "Ongoing Monitoring",
      desc: "Ideal for managing chronic heart conditions.",
    },
    {
      title: "Safe for Most Patients",
      desc: "No anesthesia or sedation required.",
    },
  ];

  const reasons = [
    "Chest pain, palpitations, or shortness of breath",
    "High blood pressure, diabetes, or high cholesterol",
    "Irregular heart rhythms or a family history of heart disease",
    "Symptoms that worsen with physical activity",
    "Need for pre-operative cardiac clearance",
    "Ongoing follow-up for chronic cardiovascular conditions",
  ];
  return (
    <div className="bg-[#c2f6f5] p-5">
      <div className="bg-[#c2f6f5] lg:h-40 h-20"></div>
      <div className="flex  flex-col max-w-7xl mx-auto md:flex-row items-center justify-between ">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <Slide direction="left">
            <h1 className="text-3xl lg:text-5xl font-extrabold text-blue-700">
              Non-Invasive Cardiology
            </h1>
            <h2 className="text-3xl font-semibold text-gray-800">
              Advanced Diagnostic Testing Without Surgery
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              At Orlando Heart and Vascular, our Non-Invasive Cardiology
              Department is dedicated to providing advanced cardiovascular
              testing without the need for surgical intervention. Using
              state-of-the-art imaging and diagnostic technology, our
              experienced cardiologists assess heart and vascular conditions
              with precision and care, ensuring early detection, ongoing
              monitoring, and better outcomes for our patients.
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
          Non-Invasive Cardiology
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
              What is Non-Invasive Cardiology?
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Non-Invasive Cardiology focuses on the diagnosis and monitoring of
            heart and vascular conditions using techniques that do not require
            instruments to be inserted into the body. These tests are safe,
            painless, and effective for detecting heart disease, evaluating
            symptoms, and guiding treatment decisions.
          </p>
        </div>

        <div className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-cyan-400">
          <div className="flex items-center gap-3 mb-4">
            <FaStethoscope className="text-3xl text-cyan-400" />
            <h2 className="text-2xl font-semibold">
              Why is Non-Invasive Cardiology Important?
            </h2>
          </div>
          <p className="leading-relaxed">
            Early detection is key in managing cardiovascular conditions.
            Non-invasive testing provides critical insights into heart function,
            blood flow, and structural abnormalities—without surgery or recovery
            time. This allows physicians to detect issues before symptoms appear
            and customize a treatment plan tailored to each patient.
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
              Most non-invasive tests require little to no preparation. However,
              depending on the test, you may be asked to fast, avoid caffeine,
              or stop certain medications. Our team will provide detailed
              instructions before your appointment.
            </p>
          </div>

          {/* The Procedure Card */}
          <div className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-cyan-400">
            <div className="flex items-center gap-3 mb-4">
              <FaProcedures className="text-3xl text-cyan-400" />
              <h2 className="text-2xl font-semibold">The Procedure</h2>
            </div>
            <p className="leading-relaxed">
              Depending on your condition, a variety of tests may be used,
              including an Electrocardiogram (EKG/ECG), which records the
              heart’s electrical activity; an Echocardiogram, which uses
              ultrasound imaging to visualize the heart; a Stress Test, to
              evaluate how the heart performs under physical stress; a Holter or
              Event Monitor, which tracks heart rhythm over time; and advanced
              imaging like Cardiac CT or MRI for detailed views of the heart and
              vessels. All procedures are painless and conducted by trained
              technicians in a calm, comfortable setting.
            </p>
          </div>

          {/* Recovery Card */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-green-500">
            <div className="flex items-center gap-3 mb-4">
              <FaHeartbeat className="text-3xl text-green-500" />
              <h2 className="text-2xl font-semibold text-gray-800">Recovery</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              As these are non-invasive tests, no recovery time is needed. You
              can return to your daily routine immediately after the procedure.
              Results are typically reviewed with you by your cardiologist
              during a follow-up visit.
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
                ✅ Benefits of Non-Invasive Cardiology
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
                🕒 When is Non-Invasive Cardiology Needed?
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
