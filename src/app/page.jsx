import CardSection from "@/components/core/CardSection";
import Client from "@/components/core/Client";
import HeroSection from "@/components/core/HeroSection";
import InsurancePlans from "@/components/core/InsurancePlans";
import Service from "@/components/core/Service";
import ServiceHome from "@/components/core/ServiceHome";
import Symtomps from "@/components/core/Symtomps";
import WhyChooseUs from "@/components/core/WhyChooseUs";
import Review from "@/components/Review";
import React from "react";

const page = () => {
  return (
    <div className="">
      <HeroSection />
      <ServiceHome />
      <Symtomps />
      <WhyChooseUs />
      <Review />
      <InsurancePlans />
      <CardSection />
      <Client />
    </div>
  );
};

export default page;
