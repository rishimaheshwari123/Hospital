import { Slide } from "react-awesome-reveal";
import { FaClipboardCheck, FaProcedures, FaHeartbeat } from "react-icons/fa";

export default function InterventionalCardiology2() {
  return (
    <Slide direction="left">
      <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-blue-600">
          <div className="flex items-center gap-3 mb-4">
            <FaClipboardCheck className="text-3xl text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Angioplasty
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            A procedure to open narrowed or blocked blood vessels of the heart,
            often using a balloon to restore blood flow.
          </p>
        </div>

        {/* The Procedure Card */}
        <div className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-cyan-400">
          <div className="flex items-center gap-3 mb-4">
            <FaProcedures className="text-3xl text-cyan-400" />
            <h2 className="text-2xl font-semibold">Stenting</h2>
          </div>
          <p className="leading-relaxed">
            Placement of a small mesh tube (stent) to keep arteries open after
            an angioplasty, ensuring long-term blood flow improvement.
          </p>
        </div>

        {/* Recovery Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-green-500">
          <div className="flex items-center gap-3 mb-4">
            <FaHeartbeat className="text-3xl text-green-500" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Atherectomy
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            A procedure that removes plaque from arteries using a specialized
            catheter, helping to improve blood circulation.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-green-500">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Coronary Artery Bypass Grafting (CABG)
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            A surgical procedure where blood is rerouted around blocked arteries
            to improve blood flow to the heart.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-t-4 border-green-500">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Peripheral Artery Disease (PAD) Treatment
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Using interventional techniques, we treat blockages in arteries
            outside the heart, particularly in the legs.
          </p>
        </div>
      </div>
    </Slide>
  );
}
