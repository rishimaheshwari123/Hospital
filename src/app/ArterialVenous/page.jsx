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
              Arterial, Venous & Lymphatic Disease Care & Treatments{" "}
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              At Orlando Heart and Vascular, we provide specialized care for
              arterial, venous, and lymphatic diseases. Our expert team uses
              advanced diagnostics and minimally invasive treatments to manage
              conditions like peripheral artery disease, varicose veins, deep
              vein thrombosis, and lymphedema. We are committed to restoring
              vascular health and improving your overall well-being.
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
      <br />
      <br />
      <div className=" flex flex-col  w-full items-center">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 ">
          Arterial, Venous & Lymphatic Disease Care & Treatments{" "}
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
        {/* Chronic Venous Insufficiency */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-blue-600">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Chronic Venous Insufficiency (CVI)
          </h2>
          <p className="text-gray-700 leading-relaxed">
            When leg veins fail to return blood efficiently to the heart, it can
            cause swelling, discomfort, and skin changes. We offer:
            <br />
            <br />
            Comprehensive ultrasound evaluations
            <br />
            Compression therapy and lifestyle guidance
            <br />
            Minimally invasive treatments
            <br />
            <br />
            Our compassionate team restores comfort and circulation to improve
            leg health.
          </p>
        </div>

        {/* Limb Ischemia */}
        <div className="bg-blue-600 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-white">
          <h2 className="text-2xl font-semibold mb-2">
            Critical, Chronic & Acute Limb Ischemia
          </h2>
          <p className="leading-relaxed">
            Blocked arteries can severely limit blood flow to limbs, causing
            pain or tissue damage. We provide:
            <br />
            <br />
            ABI, ultrasound, and angiography diagnostics
            <br />
            Urgent and long-term treatment options
            <br />
            Surgical and minimally invasive revascularization
            <br />
            <br />
            Early detection and treatment help preserve mobility and limb
            function.
          </p>
        </div>

        {/* Deep Vein Thrombosis */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-blue-600">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Deep Vein Thrombosis (DVT)
          </h2>
          <p className="text-gray-700 leading-relaxed">
            DVT occurs when a clot forms in deep leg veins, posing risks like
            pulmonary embolism. We offer:
            <br />
            <br />
            Timely ultrasound diagnostics
            <br />
            Evidence-based anticoagulation therapy
            <br />
            Preventive care and follow-up plans
            <br />
            <br />
            Prompt treatment is essential to protect your health and mobility.
          </p>
        </div>

        {/* Iliac Vein Compression Syndrome */}
        <div className="bg-blue-600 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-white">
          <h2 className="text-2xl font-semibold mb-2">
            Iliac Vein Compression Syndrome
          </h2>
          <p className="leading-relaxed">
            Also called May-Thurner Syndrome, this condition can lead to DVT due
            to vein compression. We provide:
            <br />
            <br />
            Imaging via ultrasound, CT, or venography
            <br />
            Angioplasty and stenting procedures
            <br />
            Long-term care to manage symptoms and risks
            <br />
            <br />
            Our specialists ensure effective treatment for optimal venous flow.
          </p>
        </div>

        {/* Renal Artery Stenosis */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-blue-600">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Renal Artery Stenosis
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Narrowed kidney arteries can lead to high blood pressure and
            dysfunction. We offer:
            <br />
            <br />
            Imaging with ultrasound, CTA, and MRA
            <br />
            Blood pressure control and kidney preservation
            <br />
            Angioplasty and stenting when indicated
            <br />
            <br />
            Individualized care to protect both kidney and heart health.
          </p>
        </div>

        {/* Varicose Veins */}
        <div className="bg-blue-600 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-white">
          <h2 className="text-2xl font-semibold mb-2">Varicose Veins</h2>
          <p className="leading-relaxed">
            These enlarged leg veins may be cosmetic or painful. Our care
            includes:
            <br />
            <br />
            Diagnostic ultrasound
            <br />
            Compression therapy
            <br />
            Sclerotherapy, radiofrequency ablation, and laser options
            <br />
            <br />
            We provide personalized, effective treatment for comfort and
            aesthetics.
          </p>
        </div>

        {/* Carotid Artery Stenting */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-blue-600">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Carotid Artery Stenting
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A minimally invasive procedure to prevent strokes in narrowed
            carotid arteries. Our services include:
            <br />
            <br />
            Ultrasound, CTA, and MRA evaluations
            <br />
            Precision stent placement
            <br />
            Stroke prevention and long-term monitoring
            <br />
            Trust our team for safe, expert brain health protection.
          </p>
        </div>

        {/* Radiofrequency Venous Ablation */}
        <div className="bg-blue-600 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-white">
          <h2 className="text-2xl font-semibold mb-2">
            Radiofrequency Venous Ablation
          </h2>
          <p className="leading-relaxed">
            This in-office procedure treats varicose veins using heat to close
            damaged veins. Benefits include:
            <br />
            <br />
            Ultrasound-guided treatment
            <br />
            Quick recovery and minimal discomfort
            <br />
            Long-lasting relief from pain and swelling
            <br />
            <br />A modern, safe approach to improving both leg health and
            appearance.
          </p>
        </div>

        {/* Peripheral Angioplasty & Stenting */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-blue-600">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Peripheral Angioplasty & Stenting
          </h2>
          <p className="text-gray-700 leading-relaxed">
            These procedures restore blood flow in narrowed peripheral arteries.
            We provide:
            <br />
            <br />
            Image-guided evaluations
            <br />
            Balloon angioplasty and stent placement
            <br />
            Individualized plans to relieve pain and improve mobility
            <br />
            Our targeted interventions support long-term circulation and
            function.
          </p>
        </div>

        {/* Renal Artery Stenting */}
        <div className="bg-blue-600 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-white">
          <h2 className="text-2xl font-semibold mb-2">Renal Artery Stenting</h2>
          <p className="leading-relaxed">
            For treating narrowed kidney arteries due to atherosclerosis, we
            offer:
            <br />
            <br />
            Detailed imaging diagnostics
            <br />
            Minimally invasive stent procedures
            <br />
            Blood pressure and kidney function management
            <br />
            Expert care designed to preserve overall health and prevent
            complications.
          </p>
        </div>

        {/* Thrombectomy */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-blue-600">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Thrombectomy: DVT & Pulmonary Embolism
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Urgent removal of clots in deep veins or lungs. We provide:
            <br />
            <br />
            Fast, advanced imaging and diagnosis
            <br />
            Catheter-based or mechanical clot removal
            <br />
            Post-care to prevent recurrence
            <br />
            Life-saving interventions for high-risk clot-related events.
          </p>
        </div>

        <div className="bg-blue-600 text-white shadow-lg rounded-2xl p-6 flex flex-col items-start border-l-4 border-white">
          <h2 className="text-2xl font-semibold mb-2">
            Peripheral Artery Disease (PAD)
          </h2>
          <p className="leading-relaxed">
            Peripheral Artery Disease occurs when plaque builds up in the
            arteries of the legs or arms, reducing blood flow and causing pain,
            cramping, or slow-healing wounds. We offer:
            <br />
            <br />
            Comprehensive diagnostics – including ABI, Doppler ultrasound, and
            imaging
            <br />
            Medical and lifestyle management – to slow disease progression
            <br />
            Advanced treatments – such as angioplasty, stenting, or atherectomy
            to restore circulation
            <br />
            Early detection and treatment are crucial to preventing
            complications and maintaining mobility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InterventionalCardiology;
