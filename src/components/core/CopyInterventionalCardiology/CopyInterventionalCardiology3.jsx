export default function InterventionalCardiology3() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-gradient-to-r ">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-6 text-center drop-shadow-lg">
        Why Early Diagnosis Matters
      </h2>
      <p className="text-lg text-gray-700 mb-8 text-center italic">
        Early detection is crucial when it comes to cardiovascular health.
        Timely diagnosis can help prevent the progression of heart disease and
        reduce the risk of serious complications such as heart attacks, strokes,
        or heart failure. Our diagnostic services aim to:
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-xl rounded-lg p-8 border-l-4 border-blue-500 transform transition duration-300 hover:scale-105">
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>
              <strong>Identify Risks Early:</strong> With advanced testing, we
              can detect heart disease at its earliest stages.
            </li>
            <li>
              <strong>Prevent Serious Conditions:</strong> Early diagnosis
              allows for preventive measures to avoid life-threatening
              complications.
            </li>
            <li>
              <strong>Tailor Treatment Plans:</strong> Accurate diagnostics help
              us create personalized treatment plans that meet your specific
              needs.
            </li>
            <li>
              <strong>Monitor Progress:</strong> Ongoing diagnostic tests allow
              us to track the effectiveness of treatments and make adjustments
              as necessary.
            </li>
          </ul>
        </div>
        <div className="bg-white shadow-xl rounded-lg p-8 border-l-4 border-purple-500 transform transition duration-300 hover:scale-105">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4 text-center underline">
            Our Approach
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>
              <strong>Cutting-Edge Technology:</strong> We utilize the latest
              diagnostic equipment for precise and efficient testing.
            </li>
            <li>
              <strong>Expert Team:</strong> Our highly trained cardiologists and
              staff are dedicated to delivering clear and detailed assessments
              of your heart health.
            </li>
            <li>
              <strong>Personalized Care:</strong> We ensure that each diagnostic
              service is tailored to your individual condition, with a focus on
              your unique health needs.
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
            <strong>Consultation:</strong> You will meet with one of our
            cardiologists who will determine which diagnostic tests are needed
            based on your symptoms, medical history, and risk factors.
          </li>
          <li>
            <strong>Testing:</strong> Most of our diagnostic tests are
            non-invasive or minimally invasive and can be performed on an
            outpatient basis, ensuring convenience and comfort.
          </li>
          <li>
            <strong>Results and Follow-Up:</strong> Once your test results are
            available, our physicians will explain them in detail and work with
            you to develop a customized care plan.
          </li>
        </ul>
      </div>
    </div>
  );
}
