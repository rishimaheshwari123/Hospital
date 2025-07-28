import { Fade } from "react-awesome-reveal";

export default function CathLabDetails() {
  const benefits = [
    {
      title: "Minimally Invasive",
      desc: "Smaller incisions mean faster recovery and less pain.",
    },
    {
      title: "Faster Recovery",
      desc: "Many patients return home within 24 hours.",
    },
    {
      title: "Accurate Diagnosis",
      desc: "High-quality imaging ensures precise heart condition assessment.",
    },
    {
      title: "Life-Saving Interventions",
      desc: "Procedures like angioplasty prevent heart attacks.",
    },
  ];

  const reasons = [
    "Symptoms like chest pain, shortness of breath, or fatigue.",
    "Evidence of blocked coronary arteries.",
    "A recent heart attack requiring immediate care.",
    "Structural heart disease needing intervention.",
    "Follow-up care to monitor stents or heart conditions.",
  ];

  return (
    <div className="max-w-6xl mx-auto  py-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Section: Benefits */}
        <Fade direction="up" cascade damping={0.2}>
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
              Benefits of Cath Lab Procedures
            </h2>
            <p className="text-gray-600 mb-4">
              Cath Lab procedures provide advanced cardiac care with several
              advantages:
            </p>
            <ul className="space-y-3 text-gray-700">
              {benefits.map((item, index) => (
                <Fade key={index} direction="up" delay={index * 200}>
                  <li className="flex items-start">
                    <span className="text-blue-500 text-lg mr-2">✔</span>
                    <span>
                      <strong>{item.title}:</strong> {item.desc}
                    </span>
                  </li>
                </Fade>
              ))}
            </ul>
          </div>
        </Fade>

        {/* Right Section: When Necessary */}
        <Fade direction="up" cascade damping={0.2}>
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
              When is a Cath Lab Procedure Necessary?
            </h2>
            <p className="text-gray-600 mb-4">
              Your cardiologist may recommend a Cath Lab procedure in these
              cases:
            </p>
            <ul className="space-y-3 text-gray-700">
              {reasons.map((reason, index) => (
                <Fade key={index} direction="up" delay={index * 200}>
                  <li className="flex items-start">
                    <span className="text-blue-500 text-lg mr-2">✔</span>
                    {reason}
                  </li>
                </Fade>
              ))}
            </ul>
          </div>
        </Fade>
      </div>
    </div>
  );
}
