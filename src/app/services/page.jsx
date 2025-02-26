import InsurancePlans from "@/components/core/InsurancePlans";
import Service from "@/components/core/Service";
import React from "react";

const ServicePage = () => {
  return (
    <div>
      <div className="bg-[#c2f6f5] h-32"></div>
      <Service />
      <InsurancePlans />
    </div>
  );
};

export default ServicePage;
