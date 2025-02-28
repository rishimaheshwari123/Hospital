import { Slide } from "react-awesome-reveal";
import { FaClipboardCheck, FaProcedures, FaHeartbeat } from "react-icons/fa";

export default function Education2() {
  return (
    <Slide direction="left">
      <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-blue-600">
          <div className="flex items-center gap-3 mb-4">
            <FaClipboardCheck className="text-3xl text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Reduced Risk
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Preventive care helps you address risk factors before they develop
            into serious conditions like heart attacks or strokes.
          </p>
        </div>

        {/* The Procedure Card */}
        <div className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-cyan-400">
          <div className="flex items-center gap-3 mb-4">
            <FaProcedures className="text-3xl text-cyan-400" />
            <h2 className="text-2xl font-semibold">Long-Term Health</h2>
          </div>
          <p className="leading-relaxed">
            By following personalized preventive strategies, you can improve
            your overall cardiovascular health and longevity.
          </p>
        </div>

        {/* Recovery Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-green-500">
          <div className="flex items-center gap-3 mb-4">
            <FaHeartbeat className="text-3xl text-green-500" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Cost Savings
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Early detection and management of risk factors reduce the need for
            costly emergency interventions or treatments later on.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-green-500">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Improved Quality of Life
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            A heart-healthy lifestyle helps you feel better, stay active, and
            enjoy life to the fullest.
          </p>
        </div>
      </div>
    </Slide>
  );
}
