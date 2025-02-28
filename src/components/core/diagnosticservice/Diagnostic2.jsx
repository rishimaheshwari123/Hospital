import { Slide } from "react-awesome-reveal";
import { FaClipboardCheck, FaProcedures, FaHeartbeat } from "react-icons/fa";

export default function Diagnostic2() {
  return (
    <Slide direction="left">
      <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-blue-600">
          <div className="flex items-center gap-3 mb-4">
            <FaClipboardCheck className="text-3xl text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Knowledge about your condition
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Gain a better understanding of heart-related conditions, symptoms,
            and risk factors.
          </p>
        </div>

        {/* The Procedure Card */}
        <div className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-cyan-400">
          <div className="flex items-center gap-3 mb-4">
            <FaProcedures className="text-3xl text-cyan-400" />
            <h2 className="text-2xl font-semibold">
              Clarity on treatment options
            </h2>
          </div>
          <p className="leading-relaxed">
            Learn about available treatment methods, both preventive and
            interventional, to make informed decisions.
          </p>
        </div>

        {/* Recovery Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-green-500">
          <div className="flex items-center gap-3 mb-4">
            <FaHeartbeat className="text-3xl text-green-500" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Guidance for lifestyle changes
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Discover how nutrition, exercise, and stress management can improve
            your heart health.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-green-500">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Proactive self-care
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Empower yourself to manage chronic conditions like high blood
            pressure, heart disease, and diabetes more effectively.
          </p>
        </div>
      </div>
    </Slide>
  );
}
