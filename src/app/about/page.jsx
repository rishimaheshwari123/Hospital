import Image from "next/image";
import aboutImg from "@/assets/about.jpg";
import Team from "@/components/core/Team";

const AboutPage = () => {
  return (
    <div>
      <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
        <Image
          src={aboutImg}
          alt="About Orlando Heart and Vascular"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />

        {/* Overlay Text */}
        <div className="absolute text-center text-white px-6 md:px-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Your Expert Cardiology Team.
          </h1>
          <p className="text-lg hidden lg:block md:text-2xl max-w-3xl mx-auto">
            At Orlando Heart and Vascular, we are committed to providing
            exceptional cardiovascular care with a patient-centered approach.
            Our team of experienced physicians and advanced practice providers
            are dedicated to offering the highest level of care for every
            patient, ensuring individualized treatment plans that promote heart
            health and overall well-being.
          </p>
        </div>
      </div>
      <Team />
    </div>
  );
};

export default AboutPage;
