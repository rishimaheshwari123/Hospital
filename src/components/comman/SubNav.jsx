export default function SubNavbar() {
  return (
    <div className="fixed top-1 left-0 right-0  z-50">
      <div className="max-w-[94%] mx-auto flex flex-wrap justify-between items-center px-4">
        <div className="flex flex-col md:flex-row gap-2 md:gap-6">
          <span className="bg-white text-black px-4 py-1 rounded-lg shadow">
            450 W. Central Parkway – Altamonte Springs, FL 32714
          </span>
          <span className="bg-white text-black px-4 py-1 rounded-lg shadow">
            33 S. Washington Avenue, Apopka, FL 32703
          </span>
        </div>
        <div className="mt-2 md:mt-0">
          <a
            href="tel:4077678554"
            className="bg-white text-black px-4 py-1 rounded-lg shadow font-semibold"
          >
            (407) 767-8554
          </a>
        </div>
      </div>
    </div>
  );
}
