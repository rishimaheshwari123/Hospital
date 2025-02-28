import { FaHeartbeat, FaStethoscope } from "react-icons/fa";

export default function InterventionalCardiology1() {
  return (
    <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-blue-600">
        <div className="flex items-center gap-3 mb-4">
          <FaHeartbeat className="text-3xl text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-800">
            What is Interventional Cardiology?
          </h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Interventional Cardiology is a branch of cardiology that focuses on
          diagnosing and treating cardiovascular diseases using catheter-based
          techniques. These procedures are minimally invasive, meaning they
          often require only a small incision or no incision at all. This
          approach results in faster recovery, less discomfort, and lower risk
          compared to traditional surgery.
        </p>
      </div>

      <div className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-cyan-400">
        <div className="flex items-center gap-3 mb-4">
          <FaStethoscope className="text-3xl text-cyan-400" />
          <h2 className="text-2xl font-semibold">Our Specialized Procedures</h2>
        </div>
        <p className="leading-relaxed">
          At Orlando Heart and Vascular, our interventional cardiologists are
          skilled in performing a wide range of procedures to treat heart
          conditions. Some of the key services we offer include:
        </p>
      </div>
    </div>
  );
}
