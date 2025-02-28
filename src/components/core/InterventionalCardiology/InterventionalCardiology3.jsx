export default function InterventionalCardiology3() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-gradient-to-r ">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-6 text-center drop-shadow-lg">
        Our Specialized Procedures
      </h2>
      <p className="text-lg text-gray-700 mb-8 text-center italic">
        Our minimally invasive techniques offer several benefits:
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-xl rounded-lg p-8 border-l-4 border-blue-500 transform transition duration-300 hover:scale-105">
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>
              <strong>Reduced Recovery Time:</strong> Most patients return to
              normal activities sooner.
            </li>
            <li>
              <strong>Less Pain:</strong> Smaller incisions mean less discomfort
              post-procedure.
            </li>
            <li>
              <strong>Lower Risk:</strong> Reduced risk of infection and
              complications.
            </li>
            <li>
              <strong>Quick Results:</strong> Immediate improvements in symptoms
              and heart function.
            </li>
          </ul>
        </div>
        <div className="bg-white shadow-xl rounded-lg p-8 border-l-4 border-purple-500 transform transition duration-300 hover:scale-105">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4 text-center underline">
            Why Choose Us?
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>
              <strong>Expertise:</strong> Specialists trained in the latest
              cardiology techniques.
            </li>
            <li>
              <strong>Compassionate Care:</strong> Prioritizing your well-being
              from diagnosis to recovery.
            </li>
            <li>
              <strong>State-of-the-art Technology:</strong> Advanced tools for
              accurate diagnosis and effective treatment.
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-5xl font-extrabold text-gray-900 mt-12 mb-6 text-center drop-shadow-lg">
        What to Expect
      </h2>
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-3xl mx-auto border-l-4 border-green-500 transform transition duration-300 hover:scale-105">
        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>
            <strong>Initial Consultation:</strong> Evaluation and discussion of
            treatment options.
          </li>
          <li>
            <strong>Preparation:</strong> Detailed instructions for procedure
            readiness.
          </li>
          <li>
            <strong>The Procedure:</strong> Outpatient basis, allowing same-day
            discharge.
          </li>
          <li>
            <strong>Recovery:</strong> Close monitoring and guidance for a
            smooth recovery.
          </li>
        </ul>
      </div>
    </div>
  );
}
