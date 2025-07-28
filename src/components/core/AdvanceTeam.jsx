import Image from "next/image";
import doctor1 from "@/assets/ateam1.avif";
import doctor2 from "@/assets/ateam2.avif";
import doctor3 from "@/assets/ateam3.jpg";
import doctor4 from "@/assets/ateam4.avif"; // Fixed duplicate import

const teamMembers = [
  {
    name: "Scott Giles, PA-C",
    image: doctor1,
  },
  {
    name: "Abigail Rivera, APRN",
    image: doctor2,
  },
  {
    name: "Erika Sosa, APRN",
    image: doctor3,
  },
];

const AdvanceTeam = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      {/* Header Section */}
      <div className="flex flex-col w-full items-center">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800">
          Advanced Practice Providers
        </h2>
        <div className="flex items-center w-[75px] mt-2">
          <div className="h-0.5 bg-[#cee21a] flex-grow"></div>
          <div className="h-1 w-1 bg-[#cee21a] rounded-full mx-1"></div>
          <div className="h-1 w-1 bg-[#cee21a] rounded-full mx-1"></div>
          <div className="h-1 w-1 bg-[#cee21a] rounded-full mx-1"></div>
          <div className="h-[4px] w-[10px] rounded-full bg-[#cee21a]"></div>
        </div>
      </div>

      <p className="text-center mt-4">
        Our advanced practice providers are here to ensure your journey to heart
        health is seamless and supportive:
      </p>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={member.image}
                alt={member.name}
                className="w-full h-auto"
              />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-gray-800">
              {member.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvanceTeam;
