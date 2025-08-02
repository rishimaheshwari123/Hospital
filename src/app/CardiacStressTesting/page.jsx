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
      desc: "Identifies coronary artery disease before serious symptoms develop.",
    },
    {
      title: "Symptom Evaluation",
      desc: "Helps diagnose the cause of chest pain, dizziness, or breathlessness.",
    },
    {
      title: "Treatment Guidance",
      desc: "Assesses response to medications or surgical interventions.",
    },
    {
      title: "Safe and Controlled",
      desc: "Performed under medical supervision with emergency protocols in place.",
    },
    {
      title: "Non-Invasive",
      desc: "No surgery or downtime required.",
    },
  ];

  const reasons = [
    "Chest pain or discomfort during physical activity",
    "Shortness of breath or unexplained fatigue",
    "Known heart conditions needing monitoring",
    "Abnormal EKG or echocardiogram results",
    "A history of heart attack or blocked arteries",
    "Pre-operative evaluation before major surgery",
    "Family history of heart disease with risk factors",
  ];

  return (
    <div className="bg-[#c2f6f5] p-5">
      <div className="bg-[#c2f6f5] lg:h-40 h-20"></div>
      <div className="flex  flex-col max-w-7xl mx-auto md:flex-row items-center justify-between ">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <Slide direction="left">
            <h1 className="text-3xl lg:text-5xl font-extrabold text-blue-700">
              Cardiac Stress Testing
            </h1>
            <h2 className="text-3xl font-semibold text-gray-800">
              Evaluating Heart Function Under Physical and Medical Stress
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              At Orlando Heart and Vascular, our Cardiac Stress Testing services
              are designed to assess how well your heart performs during
              physical activity or controlled stress. These tests help diagnose
              various heart conditions, evaluate symptoms, and guide
              treatment—especially in patients with chest pain, shortness of
              breath, or known cardiovascular disease.
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
          Cardiac Stress Testing
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
              What is a Cardiac Stress Test?
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            A Cardiac Stress Test measures how your heart functions during
            physical exertion or under pharmacological stress. It helps detect
            issues like blocked arteries, abnormal heart rhythms, or reduced
            blood flow. The test may involve walking on a treadmill or receiving
            medication to mimic the effects of exercise while your heart is
            monitored.
          </p>
        </div>

        <div className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-cyan-400">
          <div className="flex items-center gap-3 mb-4">
            <FaStethoscope className="text-3xl text-cyan-400" />
            <h2 className="text-2xl font-semibold">Why is it Important?</h2>
          </div>
          <p className="leading-relaxed">
            Some heart problems only become noticeable when the heart is working
            harder. A stress test allows your doctor to observe how your heart
            responds under pressure, revealing signs of coronary artery disease,
            arrhythmias, or exercise-induced symptoms. It’s a critical tool for
            early diagnosis, risk assessment, and follow-up care.
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
              Before your test, you should wear comfortable clothing and walking
              shoes. It's recommended to avoid caffeine, nicotine, or heavy
              meals for a few hours beforehand. You may also need to stop
              certain medications as instructed by your doctor. Be sure to
              inform us of any symptoms or health concerns prior to testing. Our
              care team will provide complete instructions tailored to your
              specific health needs.
            </p>
          </div>

          {/* The Procedure Card */}
          <div className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-cyan-400">
            <div className="flex items-center gap-3 mb-4">
              <FaProcedures className="text-3xl text-cyan-400" />
              <h2 className="text-2xl font-semibold">The Procedure</h2>
            </div>
            <p className="leading-relaxed">
              Depending on your condition, the stress test may involve different
              approaches. An Exercise Stress Test requires you to walk on a
              treadmill while your heart rate, rhythm, and blood pressure are
              monitored. A Nuclear Stress Test involves the injection of a small
              amount of radioactive tracer to produce images of blood flow to
              the heart, both at rest and under stress. If you are unable to
              exercise, a Pharmacologic Stress Test may be used, where
              medication stimulates your heart to mimic the effects of exercise.
              The entire procedure typically takes between 30 to 60 minutes,
              during which a cardiologist will closely monitor your responses.
            </p>
          </div>

          {/* Recovery Card */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-green-500">
            <div className="flex items-center gap-3 mb-4">
              <FaHeartbeat className="text-3xl text-green-500" />
              <h2 className="text-2xl font-semibold text-gray-800">Recovery</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              You may resume your normal activities shortly after the test
              unless otherwise instructed. If you received medication or
              contrast dye, drink plenty of water to flush it out. Your doctor
              will review the results with you during a follow-up.
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
                Benefits of Cardiac Stress Testing
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
                When is a Stress Test Needed
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
