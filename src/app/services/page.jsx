// pages/services.js

import React from "react";
// import ServiceCard from "../components/ServiceCard";
import ServiceCard from "../../components/ServiceCard/ServiceCard"

const services = [
  {
    title: "Web Development",
    description:
      "We design and develop beautiful, responsive, and high-performance websites tailored to your business needs.",
    icon: "web",
  },
  {
    title: "Mobile App Development",
    description:
      "From iOS to Android, we build mobile apps that deliver seamless user experiences and drive business growth.",
    icon: "mobile",
  },
  {
    title: "Cloud Solutions",
    description:
      "Leverage the power of cloud computing for scalability, security, and efficiency with our cloud solutions.",
    icon: "cloud",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen  p-6">
      <h1 className="text-3xl font-semibold text-center mb-12">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
