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
      title: "Proactive, Real-Time Care",
      desc: "Receive timely care and monitoring directly from home.",
    },
    {
      title: "Stronger Engagement",
      desc: "Enhances patient involvement and accountability.",
    },
    {
      title: "Reduced Hospitalizations",
      desc: "Lowers risk of hospital readmissions and emergency visits.",
    },
    {
      title: "Streamlined Communication",
      desc: "Improves coordination between patient and care team.",
    },
    {
      title: "Improved Outcomes",
      desc: "Supports better long-term health and quality of life.",
    },
  ];

  const reasons = [
    "RPM: Patients with hypertension, diabetes, CHF, COPD, post-acute discharge, or at-risk elderly",
    "PCM: Patients with one serious chronic condition requiring active clinical management",
    "Patients not currently enrolled in other care coordination programs (e.g., CCM for PCM eligibility)",
  ];

  return (
    <div className="bg-[#c2f6f5] p-5">
      <div className="bg-[#c2f6f5] lg:h-40 h-20"></div>
      <div className="flex  flex-col max-w-7xl mx-auto md:flex-row items-center justify-between ">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <Slide direction="left">
            <h1 className="text-3xl lg:text-5xl font-extrabold text-blue-700">
              Remote Patient Monitoring (RPM) & Principal Care Management (PCM)
            </h1>
            <h2 className="text-3xl font-semibold text-gray-800">
              Continuous, Personalized Care Beyond the Clinic
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
          Remote Patient Monitoring (RPM) & Principal Care Management (PCM)
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
              What is Remote Patient Monitoring (RPM)?
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Remote Patient Monitoring enables real-time tracking of a patient’s
            vital health metrics from the comfort of their home using
            FDA-approved devices. This includes monitoring blood pressure,
            glucose, oxygen levels, heart rate, and more. Data is securely
            transmitted to the clinical team for review and proactive care
            decisions.
          </p>
        </div>

        <div className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-cyan-400">
          <div className="flex items-center gap-3 mb-4">
            <FaStethoscope className="text-3xl text-cyan-400" />
            <h2 className="text-2xl font-semibold">
              What is Principal Care Management (PCM)?
            </h2>
          </div>
          <p className="leading-relaxed">
            Principal Care Management supports patients who have one serious
            chronic condition expected to last at least 3 months. The program
            focuses on personalized management of that single condition—such as
            diabetes, COPD, or heart failure—through regular follow-up, care
            coordination, and medication oversight.
          </p>
        </div>
      </div>
      {/* first */}
      <br />

      {/* second */}

      <Slide direction="left">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {/* RPM and PCM Importance */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-blue-600">
            <div className="flex items-center gap-3 mb-4">
              <FaClipboardCheck className="text-3xl text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Why are RPM and PCM Important?
              </h2>
            </div>
            <ul className="text-gray-700 list-disc pl-5 space-y-2">
              <li>Detect health changes early and avoid complications</li>
              <li>Provide tailored care plans and ongoing education</li>
              <li>Reduce unnecessary ER visits and hospital admissions</li>
              <li>Improve medication compliance and lifestyle habits</li>
              <li>
                Maintain a continuous connection between patient and provider
              </li>
            </ul>
          </div>

          {/* Included Services */}
          <div className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-cyan-400">
            <div className="flex items-center gap-3 mb-4">
              <FaProcedures className="text-3xl text-cyan-400" />
              <h2 className="text-2xl font-semibold">Included Services</h2>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Daily remote monitoring of vitals (via Bluetooth devices)</li>
              <li>24/7 alert-based triaging and clinical follow-up</li>
              <li>Monthly care coordination and care plan review</li>
              <li>Telehealth and phone check-ins</li>
              <li>Symptom tracking and patient-reported outcomes</li>
              <li>Personalized goal-setting and medication management</li>
            </ul>
          </div>

          {/* Eligibility */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-green-500">
            <div className="flex items-center gap-3 mb-4">
              <FaHeartbeat className="text-3xl text-green-500" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Who is Eligible?
              </h2>
            </div>
            <ul className="text-gray-700 list-disc pl-5 space-y-2">
              <li>
                RPM: Patients with hypertension, diabetes, CHF, COPD, post-acute
                discharge, or at-risk elderly
              </li>
              <li>
                PCM: Patients with one serious chronic condition requiring
                active clinical management
              </li>
              <li>
                Patients not currently enrolled in other care coordination
                programs (e.g., CCM for PCM eligibility)
              </li>
            </ul>
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
                Benefits of RPM + PCM
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
                Who is Eligible?
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
