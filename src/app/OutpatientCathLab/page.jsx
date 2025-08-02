import Image from "next/image";
import cathlab from "@/assets/cath.avif";
import { Slide } from "react-awesome-reveal";
import { FaHeartbeat, FaStethoscope } from "react-icons/fa";

const Page = () => {
  const procedures = [
    "Outpatient Cath Lab Services",
    "Angiographies",
    "Cardiac Catheterization and Coronary Angiography (including Right Heart Catheterization - RHC)",
    "Carotid Artery Angiography",
    "Abdominal Aortography with Angiogram of Bilateral Leg Arteries",
    "Includes PTA (Percutaneous Transluminal Angioplasty), Atherectomy, and Stenting of Renal and Lower Extremity Stenosis",
    "CO₂ Angiography of Renal and Lower Extremities",
    "Venous and Intravascular Ultrasound of Iliac Veins with Stenting",
    "Pulmonary Artery Angiography and Thrombectomy",
    "Radiofrequency Renal Denervation for Severe Hypertension",
    "Internal Device Placement",
    "Loop Recorder Implantation",
    "Hospital-Based Procedures",
    "Inpatient Consults",
    "Initial Consultations and Follow-Up Visits for Hospitalized Patients",
    "Advanced Interventions",
    "Complex Diagnostic Catheterizations including:",
    "Percutaneous Coronary Intervention (PCI)",
    "Laser Atherectomy",
    "Rotational/Orbital Atherectomy",
    "Shockwave Lithotripsy",
    "Pulmonary Angiography and Thrombectomy for Extensive Pulmonary Embolism",
    "PTA, Stenting, or Atherectomy of Bilateral Upper and Lower Extremities, including Renal Arteries",
    "Carotid Artery Stenting",
    "Inferior Vena Cava (IVC) Filter Placement and Removal",
    "Impella Device and Intra-Aortic Balloon Pump Placement",
    "Cardiac Device Management",
    "Loop Recorder Implantation",
    "Pacemaker and ICD:",
    "New Implantation",
    "Device Removal",
    "Generator Changes",
    "Other Hospital Services",
    "Interpretation of Non-Invasive Cardiac and Vascular Studies",
    "Transesophageal Echocardiography (TEE)",
    "Electrical Cardioversion Procedures",
    "CardioMEMS Implantation for Heart Failure Monitoring",
    "Renal Denervation for Uncontrolled Hypertension",
    "Barostim “Batwire” Implant for Blood Pressure Control",
  ];

  const midIndex = Math.ceil(procedures.length / 2);
  const proceduresLeft = procedures.slice(0, midIndex);
  const proceduresRight = procedures.slice(midIndex);

  return (
    <div className="bg-[#c2f6f5] p-5">
      <div className="bg-[#c2f6f5] lg:h-40 h-20" />

      {/* Top section */}
      <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <Slide direction="left">
            <h1 className="text-3xl lg:text-5xl font-extrabold text-blue-700">
              Outpatient Cath Lab Services
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              We offer comprehensive, advanced diagnostic and interventional
              cardiac care services in a state-of-the-art outpatient setting.
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

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 mt-10">
        {/* LEFT CARD */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-blue-600">
          <div className="flex items-center gap-3 mb-4">
            <FaHeartbeat className="text-3xl text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              🩺 Cath Lab Services
            </h2>
          </div>
          <ul className="text-gray-700 leading-relaxed list-disc pl-5 space-y-1">
            {proceduresLeft.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-blue-600">
          <div className="flex items-center gap-3 mb-4">
            <FaStethoscope className="text-3xl text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              🔬 Advanced Capabilities
            </h2>
          </div>
          <ul className="text-gray-700 leading-relaxed list-disc pl-5 space-y-1">
            {proceduresRight.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
