import { FaFax, FaPhoneAlt } from "react-icons/fa";

export default function SubNavbar() {
  return (
    <div className="fixed bg-white/90 backdrop-blur-sm top-0 left-0 right-0 z-50">
      <div className="max-w-[99%] mx-auto flex flex-wrap justify-between items-center px-4 py-1">
        {/* Addresses */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-3">
          <a
            href="https://www.google.com/maps/search/?api=1&query=450+W+Central+Parkway+Altamonte+Springs+FL+32714"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black text-sm px-2 py-1 rounded-lg shadow cursor-pointer"
          >
            450 W. Central Parkway – Altamonte Springs, FL 32714
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=33+S+Washington+Avenue+Apopka+FL+32703"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black text-sm px-2 py-1 rounded-lg shadow cursor-pointer"
          >
            33 S. Washington Avenue, Apopka, FL 32703
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Cath+Lab+308+E+Hazel+St,+Orlando,+FL+32804"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-2 text-sm py-1 rounded-lg shadow cursor-pointer"
          >
            Cath Lab 308 E Hazel St, Orlando, FL 32804
          </a>
        </div>

        {/* Contact & Buttons */}
        <div className="mt-2 md:mt-0 flex items-center gap-2">
          <a
            href="tel:4077678554"
            className="flex items-center space-x-2 bg-white text-black px-4 py-1 rounded-lg shadow font-semibold"
          >
            <FaPhoneAlt className="text-[#00BFB3]" />
            <span>(407) 767-8554</span>
          </a>

          {/* Fax */}
          <div className="flex items-center space-x-2 bg-white text-black px-4 py-1 rounded-lg shadow font-semibold">
            <FaFax className="text-[#00BFB3]" />
            <span>(407)-767-9121</span>
          </div>
          <a
            href="https://mycw240.ecwcloud.com/portal28068/jsp/100mp/login_otp.jsp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00BFB3] text-white px-4 py-1 rounded-lg shadow font-semibold"
          >
            Patient Portal
          </a>
          <a
            href="https://vm.providesupport.com/0gyxfx3vgu2kl0r8e1e9c0m5kz"
            className="bg-[#00BFB3] text-white px-4 py-1 rounded-lg shadow font-semibold"
          >
            Live Chat
          </a>
        </div>
      </div>
    </div>
  );
}
