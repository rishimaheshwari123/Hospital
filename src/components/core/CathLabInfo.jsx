import { FaHeartbeat, FaStethoscope } from "react-icons/fa";

export default function CathLabInfo() {
  return (
    <div className="max-w-6xl mx-auto  grid md:grid-cols-2 gap-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-blue-600">
        <div className="flex items-center gap-3 mb-4">
          <FaHeartbeat className="text-3xl text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-800">
            What is a Cath Lab?
          </h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          A Cath Lab is a specialized area in the hospital where cardiologists
          perform minimally invasive diagnostic and interventional procedures on
          the heart and blood vessels. These procedures involve using a thin,
          flexible catheter inserted through blood vessels to examine heart
          functionality.
        </p>
      </div>

      <div className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-cyan-400">
        <div className="flex items-center gap-3 mb-4">
          <FaStethoscope className="text-3xl text-cyan-400" />
          <h2 className="text-2xl font-semibold">
            Why is the Cath Lab Important?
          </h2>
        </div>
        <p className="leading-relaxed">
          The Cath Lab is essential for diagnosing and treating heart diseases
          without open-heart surgery. These procedures help cardiologists gather
          critical information about the heart’s blood supply, valves, and
          chambers, enabling life-saving interventions like opening blocked
          arteries, repairing damaged valves, or placing stents.
        </p>
      </div>
    </div>
  );
}
