export default function Diagnostic3() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-gradient-to-r">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-6 text-center drop-shadow-lg">
        Condition-Specific Information
      </h2>
      <p className="text-lg text-gray-700 mb-8 text-center italic">
        Learn about common cardiovascular conditions, their causes, symptoms,
        and how they’re diagnosed and treated.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Condition-Specific Information */}
        <div className="bg-white shadow-xl rounded-lg p-8 border-l-4 border-blue-500 transform transition duration-300 hover:scale-105">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4 text-center underline">
            Condition-Specific Information
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>
              <strong>Heart Disease:</strong> Understand the different types of
              heart disease, risk factors, and ways to reduce your risk.
            </li>
            <li>
              <strong>High Blood Pressure:</strong> Discover how hypertension
              affects your heart and what you can do to control it.
            </li>
            <li>
              <strong>Atrial Fibrillation:</strong> Learn about this common
              arrhythmia, its symptoms, and treatment options.
            </li>
            <li>
              <strong>Cholesterol Management:</strong> Understand the importance
              of cholesterol levels and ways to manage them through diet and
              medication.
            </li>
            <li>
              <strong>Congestive Heart Failure:</strong> Gain insight into the
              symptoms of heart failure and strategies for managing it
              effectively.
            </li>
          </ul>
        </div>

        {/* Treatment and Procedure Guides */}
        <div className="bg-white shadow-xl rounded-lg p-8 border-l-4 border-purple-500 transform transition duration-300 hover:scale-105">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4 text-center underline">
            Treatment and Procedure Guides
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>
              <strong>Interventional Cardiology Procedures:</strong> Learn more
              about angioplasty, stenting, atherectomy, and other minimally
              invasive treatments.
            </li>
            <li>
              <strong>Surgical Interventions:</strong> Get information about
              more involved surgical procedures, such as coronary artery bypass
              grafting (CABG).
            </li>
            <li>
              <strong>Medication Management:</strong> Understand the medications
              prescribed for heart conditions, their effects, and how to use
              them safely.
            </li>
          </ul>
        </div>
      </div>

      {/* Healthy Lifestyle Tips */}
      <h2 className="text-5xl font-extrabold text-gray-900 mt-12 mb-6 text-center drop-shadow-lg">
        Healthy Lifestyle Tips
      </h2>
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-3xl mx-auto border-l-4 border-green-500 transform transition duration-300 hover:scale-105">
        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>
            <strong>Nutrition for Heart Health:</strong> Learn how to follow a
            heart-healthy diet by focusing on whole foods, reducing sodium, and
            managing cholesterol.
          </li>
          <li>
            <strong>Exercise Guidelines:</strong> Understand the role of
            physical activity in maintaining cardiovascular health, including
            safe exercises and how to get started.
          </li>
          <li>
            <strong>Smoking Cessation:</strong> Get tips and resources on how to
            quit smoking and reduce your risk of heart disease.
          </li>
          <li>
            <strong>Stress Management:</strong> Explore relaxation techniques,
            mindfulness practices, and ways to reduce stress for a healthier
            heart.
          </li>
        </ul>
      </div>
    </div>
  );
}
