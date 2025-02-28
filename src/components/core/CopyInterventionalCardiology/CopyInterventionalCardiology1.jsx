import { FaHeartbeat, FaStethoscope } from "react-icons/fa";

export default function CopyInterventionalCardiology1() {
  return (
    <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-blue-600">
        <div className="flex items-center gap-3 mb-4">
          <FaHeartbeat className="text-3xl text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-800">
            What are Diagnostic Services?
          </h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Diagnostic services in cardiology involve non-invasive and minimally
          invasive tests that allow us to evaluate your heart's condition. These
          tests help our physicians detect any abnormalities, assess heart
          function, and identify potential risks early on. With precise
          diagnostics, we can offer better, more targeted treatments to improve
          your heart health and overall well-being.
        </p>
      </div>

      <div className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-cyan-400">
        <div className="flex items-center gap-3 mb-4">
          <FaStethoscope className="text-3xl text-cyan-400" />
          <h2 className="text-2xl font-semibold">
            Our Comprehensive Diagnostic Tests
          </h2>
        </div>
        <p className="leading-relaxed">
          We offer a wide range of diagnostic tests to assess heart function and
          detect cardiovascular diseases. Here are some of the key services
          available at Orlando Heart and Vascular:
        </p>
      </div>
    </div>
  );
}
