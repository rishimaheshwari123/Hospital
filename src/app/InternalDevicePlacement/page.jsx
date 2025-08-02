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
      title: "Heart Rhythm Regulation",
      desc: "Regulates slow or fast heart rhythms for optimal function.",
    },
    {
      title: "Cardiac Arrest Prevention",
      desc: "Reduces the risk of sudden cardiac arrest.",
    },
    {
      title: "Enhanced Quality of Life",
      desc: "Improves exercise tolerance and daily functioning.",
    },
    {
      title: "Continuous Monitoring",
      desc: "Keeps track of heart function in real-time.",
    },
    {
      title: "Remote Monitoring",
      desc: "Enables remote follow-ups to ensure patient safety.",
    },
  ];

  const reasons = [
    "Bradycardia (slow heart rate)",
    "Tachycardia or arrhythmias",
    "History of sudden cardiac arrest",
    "Heart failure requiring synchronization therapy",
    "Frequent fainting or syncope episodes",
  ];

  return (
    <div className="bg-[#c2f6f5] p-5">
      <div className="bg-[#c2f6f5] lg:h-40 h-20"></div>
      <div className="flex  flex-col max-w-7xl mx-auto md:flex-row items-center justify-between ">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <Slide direction="left">
            <h1 className="text-3xl lg:text-5xl font-extrabold text-blue-700">
              Internal Device Placement
            </h1>
            <h2 className="text-3xl font-semibold text-gray-800">
              Advanced Solutions for Managing Irregular Heart Rhythms and
              Cardiac Health
            </h2>
            {/* <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              At Orlando Heart and Vascular, our Cardiac Stress Testing services
              are designed to assess how well your heart performs during
              physical activity or controlled stress. These tests help diagnose
              various heart conditions, evaluate symptoms, and guide
              treatment—especially in patients with chest pain, shortness of
              breath, or known cardiovascular disease.
            </p> */}
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
          Internal Device Placement
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
              What is Internal Device Placement?
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Internal Device Placement involves inserting small electronic
            devices, such as pacemakers or implantable cardioverter
            defibrillators (ICDs), into the chest to regulate abnormal heart
            rhythms or support heart function. These devices continuously
            monitor and correct irregular heart activity.
          </p>
        </div>

        <div className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-cyan-400">
          <div className="flex items-center gap-3 mb-4">
            <FaStethoscope className="text-3xl text-cyan-400" />
            <h2 className="text-2xl font-semibold">Why is it Important?</h2>
          </div>
          <p className="leading-relaxed">
            For patients with life-threatening arrhythmias, heart failure, or
            heart block, internal cardiac devices can be life-saving. They
            ensure proper rhythm and prevent cardiac arrest, helping patients
            lead more active, stable lives.
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
              Before the procedure, you may need to fast, stop certain
              medications, and undergo blood tests or imaging. Our team will
              provide detailed pre-op instructions tailored to your condition.
            </p>
          </div>

          {/* The Procedure Card */}
          <div className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-cyan-400">
            <div className="flex items-center gap-3 mb-4">
              <FaProcedures className="text-3xl text-cyan-400" />
              <h2 className="text-2xl font-semibold">The Procedure</h2>
            </div>
            <p className="leading-relaxed">
              Performed in a specialized lab under local anesthesia, a small
              incision is made in the chest to insert the device and connect
              leads to the heart. The procedure usually takes 1–2 hours and is
              performed by an electrophysiologist.
            </p>
          </div>

          {/* Recovery Card */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-green-500">
            <div className="flex items-center gap-3 mb-4">
              <FaHeartbeat className="text-3xl text-green-500" />
              <h2 className="text-2xl font-semibold text-gray-800">Recovery</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Most patients are observed overnight and discharged the next day.
              You may need to limit arm movement and avoid strenuous activity
              for a few weeks. Follow-up visits are scheduled to monitor device
              performance.
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
                Benefits of Internal Device Placement
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
                When is Internal Device Placement Needed?
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
