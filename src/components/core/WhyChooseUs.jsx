const WhyChooseUs = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20"
      style={{ backgroundImage: "url('/s1.avif')" }}
    >
      <div className="absolute inset-0 bg-[#E04100] bg-opacity-70"></div>
      <div className="relative z-10 container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center">
        {/* Left Side - Why Choose Us */}
        <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-lg lg:mr-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="space-y-4">
            {[
              "One Stop Shop",
              "Personalized Approach",
              "Flexible Payments",
              "Cutting-Edge Technology",
              "Same Day Appointments",
              "Healing - Not Just Treating",
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-3">
                <span className="text-green-500 text-xl">✔</span>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-xl text-center lg:text-left mt-10 lg:mt-0">
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <div className="bg-teal-500 text-white text-3xl font-bold rounded-full p-2">
              ❝
            </div>
          </div>
          <p className="text-lg font-light">
            I would recommend anyone that has a vascular problem to Dr. Rajeev.
            I'm lucky to be alive, and if it wasn't for him, I probably would've
            died.
          </p>
          <div className="flex items-center mt-6">
            <img
              src="/s1.avif"
              alt="Kirk"
              className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
            />
            <div className="ml-4">
              <h3 className="text-xl font-bold">Kirk</h3>
              <p className="text-sm">Patient</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
