import Image from "next/image";
import interventionalCardiology from "@/assets/InterventionalCardiology.avif";
import { Slide } from "react-awesome-reveal";

const InterventionalCardiology = () => {
  return (
    <div className="bg-[#c2f6f5] p-5">
      <div className="bg-[#c2f6f5] h-20 lg:h-40"></div>
      <div className="flex  flex-col max-w-7xl mx-auto md:flex-row items-center justify-between ">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <Slide direction="left">
            <h1 className="text-3xl lg:text-5xl font-extrabold text-blue-700">
              In-Office Advanced Treatments & Diagnostic Imaging
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              At Orlando Heart and Vascular, we offer a wide range of in-office
              advanced treatments and diagnostic imaging services. From
              echocardiograms and cardiac CT scans to stress testing and PET/CT
              imaging, our state-of-the-art facility ensures accurate, timely
              diagnosis and personalized care—all under one roof. Our goal is to
              deliver convenience without compromising quality.
            </p>
          </Slide>
        </div>

        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Slide direction="right">
            <div className="relative w-full max-w-md h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={interventionalCardiology}
                alt="Cath Lab Image"
                width={500}
                height={350}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </Slide>
        </div>
      </div>

      <br />
      <br />
      <br />
      <div className=" flex flex-col  w-full items-center">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 ">
          In-Office Advanced Treatments & Diagnostic Imaging
        </h2>
        <br />
        <div className="flex items-center w-[75px]">
          <div className="h-0.5 bg-[#cee21a]"></div>
          <div className="h-1 w-1 bg-[#cee21a] rounded-full mx-1"></div>
          <div className="h-1 w-1 bg-[#cee21a] rounded-full mx-1"></div>
          <div className="h-1 w-1 bg-[#cee21a] rounded-full mx-1"></div>
          <div
            className="h-[4px] rounded-full w-[10px] flex-grow"
            style={{ backgroundColor: "#cee21a" }}
          ></div>
        </div>
      </div>
      <br />
      <br />

      <div className="max-w-6xl mx-auto  grid md:grid-cols-2 gap-6">
        {/* Echocardiograms */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-blue-600">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Echocardiograms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Non-invasive heart ultrasound used to assess heart structure and
            function. We offer:
            <br />
            <br />
            Transthoracic and transesophageal echocardiograms (TTE & TEE)
            <br />
            Stress echocardiograms (exercise/medication-induced)
            <br />
            Real-time valve and chamber evaluations
            <br />
            <br />
            Advanced imaging for accurate diagnosis and personalized care.
          </p>
        </div>

        {/* Cardiac CT Scans */}
        <div className="bg-blue-600 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-white">
          <h2 className="text-2xl font-semibold mb-2">Cardiac CT Scans</h2>
          <p className="leading-relaxed">
            Coming soon: advanced CT imaging services including:
            <br />
            <br />
            Calcium Scoring
            <br />
            Coronary CT Angiography (CTA)
            <br />
            Pulmonary Embolism (PE) Rule Out
            <br />
            Diagnostic Body CT Imaging
            <br />
            <br />
            These tools support preventive and diagnostic cardiovascular care.
          </p>
        </div>

        {/* Nuclear Medicine Stress Testing */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-blue-600">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Nuclear Medicine Stress Testing
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Non-invasive test evaluating blood flow to the heart during rest and
            stress. We provide:
            <br />
            <br />
            Use of safe radioactive tracer
            <br />
            Tailored exercise or medication-induced testing
            <br />
            Assessment of blockages and heart performance
            <br />
            <br />A critical tool for diagnosing coronary artery disease and
            guiding treatment.
          </p>
        </div>

        {/* Holter and Event Monitoring */}
        <div className="bg-blue-600 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-white">
          <h2 className="text-2xl font-semibold mb-2">
            Holter and Event Monitoring
          </h2>
          <p className="leading-relaxed">
            Portable monitors track heart rhythms to detect irregularities. We
            offer:
            <br />
            <br />
            Holter Monitoring (24–48 hour continuous tracking)
            <br />
            Event Monitoring (patient-activated over days/weeks)
            <br />
            Expert analysis for accurate diagnosis
            <br />
            <br />
            These tools reveal arrhythmias missed during routine exams.
          </p>
        </div>

        {/* Dedicated Device & ICD Clinic */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-blue-600">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Dedicated Device & ICD Clinic
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Specialized care for patients with cardiac devices. We provide:
            <br />
            <br />
            Remote and in-person monitoring
            <br />
            Routine checks and performance analysis
            <br />
            Timely response to device alerts
            <br />
            <br />
            Ensuring safe, effective function of pacemakers, ICDs, and loop
            recorders.
          </p>
        </div>

        {/* EECP Therapy */}
        <div className="bg-blue-600 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-white">
          <h2 className="text-2xl font-semibold mb-2">
            EECP (Enhanced External Counterpulsation)
          </h2>
          <p className="leading-relaxed">
            A non-invasive treatment for chronic angina or heart failure. It
            works by:
            <br />
            <br />
            Inflating cuffs to boost heart blood flow
            <br />
            Promoting collateral circulation
            <br />
            Reducing symptoms and improving endurance
            <br />
            <br />
            EECP improves quality of life without surgery or downtime.
          </p>
        </div>

        {/* Vascular Ultrasounds */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-blue-600">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Arterial, Carotid & Venous Ultrasounds
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Painless, non-invasive imaging to evaluate circulation. We offer:
            <br />
            <br />
            Arterial studies for blockages in limbs
            <br />
            Carotid studies to assess stroke risk
            <br />
            Venous scans for DVT or insufficiency
            <br />
            <br />
            Accurate diagnostics to guide timely vascular treatment.
          </p>
        </div>

        {/* PET/CT Scans */}
        <div className="bg-blue-600 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-white">
          <h2 className="text-2xl font-semibold mb-2">
            PET/CT Scans – Cardiac & Cancer Evaluation
          </h2>
          <p className="leading-relaxed">
            Combines functional and anatomical imaging for precise diagnosis. We
            provide:
            <br />
            <br />
            Cardiac PET/CT for heart perfusion and viability
            <br />
            Oncology PET/CT for cancer detection and monitoring
            <br />
            Whole-body scans for early detection
            <br />
            <br />
            Cutting-edge PET/CT for informed, personalized treatment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InterventionalCardiology;
