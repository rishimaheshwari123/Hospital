import { FaHeartbeat, FaStethoscope, FaLaptopMedical } from "react-icons/fa";

const services = [
  {
    title: "Comprehensive Cardiac Testing",
    description:
      "We offer a wide array of cardiac tests, including stress tests, echocardiograms, and nuclear stress tests to ensure thorough assessment and diagnosis of heart conditions.",
    icon: (
      <FaHeartbeat className="text-red-500 group-hover:text-red-700 text-5xl transition-all duration-300" />
    ),
    bg: "from-red-100 to-red-300",
  },
  {
    title: "Advanced Cardiac Imaging",
    description:
      "Using cutting-edge technology, we provide cardiac CT, PET scans, and calcium scoring to deliver detailed insights into heart health and detect potential issues early.",
    icon: (
      <FaStethoscope className="text-blue-500 group-hover:text-blue-700 text-5xl transition-all duration-300" />
    ),
    bg: "from-blue-100 to-blue-300",
  },
  {
    title: "Specialized Device Clinics",
    description:
      "We specialize in continuous monitoring with Holter monitoring and mobile cardiac telemetry, ensuring precise detection and management of irregular heart rhythms.",
    icon: (
      <FaLaptopMedical className="text-green-500 group-hover:text-green-700 text-5xl transition-all duration-300" />
    ),
    bg: "from-green-100 to-green-300",
  },
];

const CardSection = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className={`group relative bg-gradient-to-br ${service.bg} p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
        >
          <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mt-10">
            {service.title}
          </h3>
          <p className="text-gray-600 mt-3">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
