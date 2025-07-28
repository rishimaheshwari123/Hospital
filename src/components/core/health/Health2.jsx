import { Slide } from "react-awesome-reveal";
import { FaClipboardCheck, FaProcedures, FaHeartbeat } from "react-icons/fa";

export default function Health2() {
  return (
    <Slide direction="left">
      <div className="max-w-6xl mx-auto pt-5 grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-blue-600">
          <div className="flex items-center gap-3 mb-4">
            <FaClipboardCheck className="text-3xl text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Convenience
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Schedule and attend appointments from home, work, or any location
            with internet access.
          </p>
        </div>

        {/* The Procedure Card */}
        <div className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-cyan-400">
          <div className="flex items-center gap-3 mb-4">
            <FaProcedures className="text-3xl text-cyan-400" />
            <h2 className="text-2xl font-semibold">Reduced Travel Time</h2>
          </div>
          <p className="leading-relaxed">
            Avoid long commutes or waiting in a clinic by connecting virtually
            with your healthcare provider.
          </p>
        </div>

        {/* Recovery Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-green-500">
          <div className="flex items-center gap-3 mb-4">
            <FaHeartbeat className="text-3xl text-green-500" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Enhanced Accessibility
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Telehealth services are especially beneficial for patients who have
            difficulty traveling, live in remote areas, or need frequent
            follow-ups.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-green-500">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Continuity of Care
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            You can maintain regular communication with your care team, ensuring
            your heart health is monitored consistently.
          </p>
        </div>
      </div>
    </Slide>
  );
}
