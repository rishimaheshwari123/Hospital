import { FaHeartbeat, FaStethoscope } from "react-icons/fa";

export default function Health1() {
  return (
    <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-blue-600">
        <div className="flex items-center gap-3 mb-4">
          <FaHeartbeat className="text-3xl text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-800">
            What are Telehealth Services?
          </h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Telehealth allows you to meet with your healthcare provider remotely
          through secure video calls, phone calls, or other digital platforms.
          This technology ensures that you receive high-quality medical care
          from the comfort and safety of your home, especially if you're
          managing a chronic condition, have mobility issues, or are looking to
          avoid unnecessary trips to the clinic. With telehealth, you can
          receive expert advice, treatment recommendations, and follow-up care
          without needing to step outside your door.
        </p>
      </div>

      <div className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-cyan-400">
        <div className="flex items-center gap-3 mb-4">
          <FaStethoscope className="text-3xl text-cyan-400" />
          <h2 className="text-2xl font-semibold">
            Benefits of Telehealth Services
          </h2>
        </div>
        <p className="leading-relaxed">
          Telehealth is designed to be both convenient and comprehensive, giving
          you greater flexibility and ease when managing your heart health. Some
          of the key benefits include:
        </p>
      </div>
    </div>
  );
}
