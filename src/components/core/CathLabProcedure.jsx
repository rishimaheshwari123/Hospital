import { Slide } from "react-awesome-reveal";
import { FaClipboardCheck, FaProcedures, FaHeartbeat } from "react-icons/fa";

export default function CathLabProcedure() {
  return (
    <Slide direction="left">
      <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-blue-600">
          <div className="flex items-center gap-3 mb-4">
            <FaClipboardCheck className="text-3xl text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Preparation
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Before your procedure, your healthcare provider will review your
            medical history and perform any necessary pre-procedure tests. You
            may be asked to fast for several hours.
          </p>
        </div>

        {/* The Procedure Card */}
        <div className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-cyan-400">
          <div className="flex items-center gap-3 mb-4">
            <FaProcedures className="text-3xl text-cyan-400" />
            <h2 className="text-2xl font-semibold">The Procedure</h2>
          </div>
          <p className="leading-relaxed">
            You will receive a mild sedative to help you relax. The doctor will
            insert a catheter through a blood vessel (usually in the wrist or
            groin) and guide it to the heart using X-ray imaging. A dye may be
            injected, a blocked artery may be opened, or a stent may be placed.
          </p>
        </div>

        {/* Recovery Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-green-500">
          <div className="flex items-center gap-3 mb-4">
            <FaHeartbeat className="text-3xl text-green-500" />
            <h2 className="text-2xl font-semibold text-gray-800">Recovery</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            After the procedure, you will be monitored for a few hours. Most
            patients can go home the same day, but your healthcare provider will
            inform you if an overnight stay is needed.
          </p>
        </div>
      </div>
    </Slide>
  );
}
