import Image from "next/image";
import doctor1 from "@/assets/team1.avif"; // Replace with actual image paths
import doctor2 from "@/assets/team2.avif";
import doctor3 from "@/assets/team3.avif";

const teamMembers = [
  {
    name: "Dr. Kishore Ranadive MD, FACC, FASCI",
    role: "Founder & Chief Medical Officer",
    certifications: [
      "Board Certified in Cardiovascular Disease",
      "Board Certified in Vascular and Interventional Radiology",
      "Board Certified in Nuclear Cardiology",
      "Board Certified in Interventional Cardiology",
    ],
    image: doctor1,
  },
  {
    name: "Dr. Barry Weinstock MD, FACC, FSCAI",
    role: "",
    certifications: [
      "Board Certified in Cardiovascular Disease",
      "Board Certified in Internal Medicine",
      "Board Certified in Interventional Cardiology",
    ],
    image: doctor2,
  },
  {
    name: "Dr. Udit Joshi, MD, FAC",
    role: "",
    certifications: [
      "Board Certified in Interventional Cardiology",
      "Board Certified in Cardiovascular Disease",
      "Board Certified in Echocardiography",
      "Board Certified in Nuclear Cardiology",
      "Board Certified in Internal Medicine",
    ],
    image: doctor3,
  },
];

const Team = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Meet Our Expert Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative group">
            {/* Doctor Image */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={member.image}
                alt={member.name}
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Hover Effect - Details */}
            <div className="absolute inset-0 bg-blue-700 bg-opacity-90 text-white p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <h3 className="text-xl font-bold text-center">{member.name}</h3>
              {member.role && (
                <p className="text-sm italic text-center">{member.role}</p>
              )}
              <ul className="mt-3 text-sm space-y-1 text-center">
                {member.certifications.map((cert, i) => (
                  <li key={i}>• {cert}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
