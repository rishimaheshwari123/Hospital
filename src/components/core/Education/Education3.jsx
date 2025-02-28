import React from "react";

const Education3 = () => {
  return (
    <div className="bg-blue-800 text-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        {/* Who Can Benefit Section */}
        <h2 className="text-4xl font-bold mb-6">
          Who Can Benefit from Preventive Care?
        </h2>
        <p className="text-lg mb-4">
          Preventive care is important for everyone, but it’s especially crucial
          for individuals who have:
        </p>
        <ul className="list-none space-y-2 text-lg">
          <li className="flex items-center gap-2">
            <span className="text-blue-300">✔</span> A family history of heart
            disease
          </li>
          <li className="flex items-center gap-2">
            <span className="text-blue-300">✔</span> High blood pressure or high
            cholesterol
          </li>
          <li className="flex items-center gap-2">
            <span className="text-blue-300">✔</span> Diabetes or pre-diabetes
          </li>
          <li className="flex items-center gap-2">
            <span className="text-blue-300">✔</span> Obesity or are overweight
          </li>
          <li className="flex items-center gap-2">
            <span className="text-blue-300">✔</span> A history of smoking
          </li>
          <li className="flex items-center gap-2">
            <span className="text-blue-300">✔</span> Sedentary lifestyle
          </li>
        </ul>
        <p className="text-lg mt-6">
          Whether you’re currently at risk or simply want to maintain good heart
          health, our preventive care services are designed to help you stay
          ahead of potential problems.
        </p>

        {/* Preventive Care Team Section */}
        <h2 className="text-4xl font-bold mt-12 mb-6">
          Our Preventive Care Team
        </h2>
        <p className="text-lg">
          At Orlando Heart and Vascular, our experienced cardiologists and
          healthcare professionals are dedicated to providing you with
          personalized, comprehensive preventive care. We take the time to
          understand your health concerns and develop a plan that’s tailored to
          your specific needs.
        </p>
      </div>
    </div>
  );
};

export default Education3;
