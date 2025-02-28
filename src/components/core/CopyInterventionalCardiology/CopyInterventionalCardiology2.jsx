import { Slide } from "react-awesome-reveal";
import { FaClipboardCheck, FaProcedures, FaHeartbeat } from "react-icons/fa";

export default function CopyInterventionalCardiology2() {
  return (
    <Slide direction="left">
      <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-blue-600">
          <div className="flex items-center gap-3 mb-4">
            <FaClipboardCheck className="text-3xl text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Electrocardiogram (ECG/EKG)
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            A test that measures the electrical activity of your heart, helping
            us identify irregular heart rhythms, heart attacks, and other heart
            conditions.
          </p>
        </div>

        {/* The Procedure Card */}
        <div className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-cyan-400">
          <div className="flex items-center gap-3 mb-4">
            <FaProcedures className="text-3xl text-cyan-400" />
            <h2 className="text-2xl font-semibold">Echocardiogram</h2>
          </div>
          <p className="leading-relaxed">
            A non-invasive ultrasound of the heart provides detailed images of
            your heart’s structure and function, helping to diagnose heart
            disease or evaluate the effectiveness of treatments.
          </p>
        </div>

        {/* Recovery Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-green-500">
          <div className="flex items-center gap-3 mb-4">
            <FaHeartbeat className="text-3xl text-green-500" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Stress Testing (Exercise or Chemical)
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            A test that evaluates how well your heart functions during physical
            stress or under the influence of medications, helping to detect
            heart disease and determine safe levels of exercise.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-green-500">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Holter Monitoring
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            A portable device worn by the patient to continuously monitor heart
            activity over 24 to 48 hours, helping detect irregular heartbeats or
            arrhythmias.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-green-500">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Nuclear Cardiology
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            A diagnostic imaging method that uses small amounts of radioactive
            material to assess blood flow to the heart, often used to evaluate
            heart damage or detect coronary artery disease.
          </p>
        </div>
      </div>
    </Slide>
  );
}
