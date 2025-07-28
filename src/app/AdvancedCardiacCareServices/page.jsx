import Image from "next/image";
import interventionalCardiology from "@/assets/InterventionalCardiology.avif";
import { Slide } from "react-awesome-reveal";
// import InterventionalCardiology1 from "@/components/core/InterventionalCardiology/InterventionalCardiology1";
// import InterventionalCardiology2 from "@/components/core/InterventionalCardiology/InterventionalCardiology2";
// import InterventionalCardiology3 from "@/components/core/InterventionalCardiology/InterventionalCardiology3";
import {
  FaHeartbeat,
  FaStethoscope,
  FaProcedures,
  FaLungs,
  FaNotesMedical,
  FaMicroscope,
  FaBrain,
  FaRegHeart,
  FaHospitalUser,
} from "react-icons/fa";

const services = [
  "STAT Care - Chest Pain, EKGs, Syncope, DVT, HTN Urgencies, Pre-Op Clearance",
  "Congenital Heart Defects in Adults",
  "Acute Coronary Syndromes (ACS)",
  "Diseases of the Aorta",
  "Advanced Heart Failure",
  "Pacemaker & AICD Implants",
  "Amyloidosis",
  "Pulmonary Hypertension",
  "Arrhythmia & Heart Rhythm Disorders",
  "Valvular Heart Disease",
];
const InterventionalCardiology = () => {
  return (
    <div className="bg-[#c2f6f5] p-5">
      <div className="bg-[#c2f6f5] h-20 lg:h-40"></div>
      <div className="flex  flex-col max-w-7xl mx-auto md:flex-row items-center justify-between ">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <Slide direction="left">
            <h1 className="text-3xl lg:text-5xl font-extrabold text-blue-700">
              Advanced Cardiac Care Services
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              At Orlando Heart and Vascular, our Advanced Cardiac Care Services
              offer comprehensive and innovative treatments for a wide range of
              heart conditions. Using the latest technologies and minimally
              invasive methods, we focus on improving heart health, enhancing
              patient outcomes, and reducing recovery time—ensuring personalized
              care for every patient.
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
      {/* <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {services.map((title, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl p-6 flex items-start gap-4 hover:shadow-2xl transition"
            >
              <HeartPulse className="text-blue-700 w-8 h-8 flex-shrink-0" />
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            </div>
          ))}
        </div>
      </div> */}
      <br />
      <br />
      <br />
      <div className=" flex flex-col  w-full items-center">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 ">
          Advanced Cardiac Care Services
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
        {/* STAT Care Services */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-blue-600">
          <div className="flex items-center gap-3 mb-4">
            <FaStethoscope className="text-3xl text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              STAT Care Services
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Our STAT Care team is equipped to handle urgent yet
            non-life-threatening conditions quickly and efficiently. We
            specialize in:
            <br />
            <br />
            <strong>Chest Pain Evaluation</strong>
            <br />
            <strong>EKGs (Electrocardiograms)</strong>
            <br />
            <strong>Syncope (Fainting) Assessment</strong>
            <br />
            <strong>DVT (Deep Vein Thrombosis) Screening</strong>
            <br />
            <strong>Hypertension Urgencies</strong>
            <br />
            <strong>Pre-Operative Clearance Exams</strong>
          </p>
        </div>

        {/* Congenital Heart Defects in Adults */}
        <div className="bg-blue-600 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-white">
          <div className="flex items-center gap-3 mb-4">
            <FaHospitalUser className="text-3xl text-white" />
            <h2 className="text-2xl font-semibold">
              Congenital Heart Defects in Adults
            </h2>
          </div>
          <p className="leading-relaxed">
            Many individuals born with heart defects now live well into
            adulthood—but ongoing care is essential. Our cardiology team
            provides specialized evaluation and long-term management for adults
            with congenital heart conditions, including:
            <br />
            <br />
            Regular monitoring with imaging and diagnostic tools
            <br />
            Personalized treatment plans
            <br />
            Coordination with cardiac surgeons when needed
            <br />
            <br />
            We help adult patients stay heart-healthy with expert, lifelong
            cardiac care.
          </p>
        </div>

        {/* Acute Coronary Syndromes */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-blue-600">
          <div className="flex items-center gap-3 mb-4">
            <FaHeartbeat className="text-3xl text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Acute Coronary Syndromes (ACS)
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Acute Coronary Syndromes are serious, potentially life-threatening
            conditions that include heart attacks and unstable angina. Our
            expert team provides rapid diagnosis and evidence-based care for:
            <br />
            <br />
            Chest pain and related symptoms
            <br />
            ECG and cardiac enzyme evaluation
            <br />
            Immediate medical management and referrals
            <br />
            <br />
            Early intervention saves lives—trust our cardiology team for timely
            and effective ACS care.
          </p>
        </div>

        {/* Diseases of the Aorta */}
        <div className="bg-blue-600 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-white">
          <div className="flex items-center gap-3 mb-4">
            <FaNotesMedical className="text-3xl text-cyan-400" />
            <h2 className="text-2xl font-semibold">Diseases of the Aorta</h2>
          </div>
          <p className="leading-relaxed">
            The aorta is the body’s main artery, and diseases affecting it can
            be life-threatening if not managed properly. Our specialists
            diagnose and treat a wide range of aortic conditions, including:
            <br />
            <br />
            Aortic aneurysms
            <br />
            Aortic dissections
            <br />
            Aortic stenosis and insufficiency
            <br />
            Genetic and connective tissue disorders (e.g., Marfan syndrome)
            <br />
            <br />
            We use advanced imaging, monitoring, and treatment plans tailored to
            each patient’s condition and risk profile.
          </p>
        </div>

        {/* Advanced Heart Failure */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-blue-600">
          <div className="flex items-center gap-3 mb-4">
            <FaRegHeart className="text-3xl text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Advanced Heart Failure
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Advanced heart failure requires specialized, ongoing care to manage
            symptoms and improve quality of life. Our cardiology team offers:
            <br />
            <br />
            Comprehensive evaluation and diagnostics
            <br />
            Medication optimization and device therapy
            <br />
            Coordination for advanced therapies, including LVAD and transplant
            referral
            <br />
            <br />
            We provide compassionate, expert care to help patients live better
            with heart failure.
          </p>
        </div>

        {/* Pacemaker & AICD Implants */}
        <div className="bg-blue-600 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-white">
          <div className="flex items-center gap-3 mb-4">
            <FaMicroscope className="text-3xl text-cyan-400" />
            <h2 className="text-2xl font-semibold">
              Pacemaker & AICD Implants
            </h2>
          </div>
          <p className="leading-relaxed">
            We offer expert evaluation and implantation of cardiac devices to
            treat abnormal heart rhythms:
            <br />
            <br />
            <strong>Pacemakers</strong> – help regulate slow or irregular
            heartbeats
            <br />
            <strong>AICDs (Implantable Cardioverter Defibrillators)</strong> –
            monitor and correct life-threatening arrhythmias
            <br />
            <br />
            Our team ensures personalized device selection, precise
            implantation, and ongoing monitoring for optimal heart rhythm
            management.
          </p>
        </div>

        {/* Amyloidosis */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-blue-600">
          <div className="flex items-center gap-3 mb-4">
            <FaBrain className="text-3xl text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Amyloidosis
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Amyloidosis is a rare condition where abnormal protein deposits
            (amyloid) build up in organs like the heart, affecting their
            function. Our team provides:
            <br />
            <br />
            Early detection with advanced imaging and lab testing
            <br />
            Expert management of cardiac amyloidosis
            <br />
            Personalized treatment plans, including medication and
            multidisciplinary care
            <br />
            <br />
            Timely diagnosis and specialized care are key to improving outcomes
            in amyloidosis.
          </p>
        </div>

        {/* Pulmonary Hypertension */}
        <div className="bg-blue-600 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-white">
          <div className="flex items-center gap-3 mb-4">
            <FaLungs className="text-3xl text-cyan-400" />
            <h2 className="text-2xl font-semibold">Pulmonary Hypertension</h2>
          </div>
          <p className="leading-relaxed">
            Pulmonary Hypertension (PH) is high blood pressure in the lungs that
            can strain the heart and lead to serious complications. Our
            cardiology team provides:
            <br />
            <br />
            Comprehensive diagnostic testing (echocardiogram, right heart
            catheterization)
            <br />
            Identification of underlying causes
            <br />
            Advanced medical therapy and long-term management
            <br />
            <br />
            We deliver specialized care to improve symptoms, enhance quality of
            life, and slow disease progression.
          </p>
        </div>

        {/* Arrhythmia & Heart Rhythm Disorders */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-blue-600">
          <div className="flex items-center gap-3 mb-4">
            <FaProcedures className="text-3xl text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Arrhythmia & Heart Rhythm Disorders
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Irregular heart rhythms (arrhythmias) can range from harmless to
            life-threatening. Our specialists diagnose and treat a wide range of
            rhythm disorders, including:
            <br />
            <br />
            Atrial fibrillation (AFib)
            <br />
            Supraventricular tachycardia (SVT)
            <br />
            Ventricular tachycardia (VT)
            <br />
            Bradycardia and heart block
            <br />
            <br />
            We offer advanced diagnostics, medication management, ablation
            procedures, and device therapy to help restore and maintain a
            healthy heart rhythm.
          </p>
        </div>

        {/* Valvular Heart Disease */}
        <div className="bg-blue-600 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-white">
          <div className="flex items-center gap-3 mb-4">
            <FaHeartbeat className="text-3xl text-cyan-400" />
            <h2 className="text-2xl font-semibold">Valvular Heart Disease</h2>
          </div>
          <p className="leading-relaxed">
            Valvular heart disease occurs when one or more of the heart’s valves
            do not open or close properly, affecting blood flow. Our cardiology
            team offers:
            <br />
            <br />
            Comprehensive evaluation with echocardiography and imaging
            <br />
            Management of conditions like aortic stenosis, mitral regurgitation,
            and more
            <br />
            Collaboration with cardiac surgeons for valve repair or replacement
            when needed
            <br />
            <br />
            We provide personalized care to manage symptoms, prevent
            complications, and improve heart function.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InterventionalCardiology;
