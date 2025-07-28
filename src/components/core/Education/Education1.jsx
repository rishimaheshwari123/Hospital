import { FaHeartbeat, FaStethoscope } from "react-icons/fa";

export default function Education1() {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-blue-600">
        <div className="flex items-center gap-3 mb-4">
          <FaHeartbeat className="text-3xl text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-800">
            What is Preventive Cardiology Care?
          </h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Preventive care focuses on identifying and managing risk factors
          before they lead to serious heart conditions. This proactive approach
          helps you maintain optimal heart health and avoid potentially
          life-threatening events such as heart attacks, strokes, and heart
          failure. By addressing risk factors such as high blood pressure, high
          cholesterol, obesity, and lifestyle habits like smoking, preventive
          care empowers you to take control of your health and minimize future
          cardiovascular risks.
        </p>
      </div>

      <div className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-cyan-400">
        <div className="flex items-center gap-3 mb-4">
          <FaStethoscope className="text-3xl text-cyan-400" />
          <h2 className="text-2xl font-semibold">Benefits</h2>
        </div>
        <p className="leading-relaxed">
          By focusing on prevention, you can significantly lower your risk of
          heart disease and enjoy a healthier, more active life. Benefits of our
          preventive care services include
        </p>
      </div>
    </div>
  );
}
