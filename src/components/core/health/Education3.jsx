import React from "react";
import {
  FaHeartbeat,
  FaNotesMedical,
  FaPills,
  FaDumbbell,
  FaStethoscope,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHeartbeat className="text-red-500 text-4xl" />,
    title: "Consultations",
    description:
      "Initial consultations for new patients or ongoing care for existing patients. Our cardiologists and advanced practice providers can assess your symptoms, review medical history, and provide treatment recommendations through a secure video or phone call.",
  },
  {
    icon: <FaNotesMedical className="text-blue-500 text-4xl" />,
    title: "Follow-Up Appointments",
    description:
      "Check in with your healthcare provider about ongoing treatments or recent procedures. Follow-up appointments are essential for monitoring progress, reviewing test results, adjusting medications, and ensuring that your heart health plan is on track.",
  },
  {
    icon: <FaPills className="text-green-500 text-4xl" />,
    title: "Medication Management",
    description:
      "Ensure your medications are working effectively and adjust prescriptions as needed. We can review your current medications and make any necessary adjustments based on your condition, symptoms, or test results.",
  },
  {
    icon: <FaDumbbell className="text-yellow-500 text-4xl" />,
    title: "Lifestyle Counseling",
    description:
      "Guidance on heart-healthy habits to support your cardiovascular well-being. Our team can provide advice on diet, exercise, weight management, and other lifestyle changes to help you better manage risk factors like high cholesterol, blood pressure, and diabetes.",
  },
  {
    icon: <FaStethoscope className="text-purple-500 text-4xl" />,
    title: "Chronic Disease Management",
    description:
      "Ongoing support for managing heart conditions like hypertension, heart failure, or arrhythmias. Through regular telehealth appointments, we can monitor and manage chronic cardiovascular conditions, ensuring you stay on top of your health with expert guidance.",
  },
];

const Health3 = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Health Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
          >
            {service.icon}
            <h3 className="text-xl font-semibold text-gray-700 mt-4">
              {service.title}
            </h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Health3;
