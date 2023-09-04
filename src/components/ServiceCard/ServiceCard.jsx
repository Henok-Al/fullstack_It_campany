import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMobile, faCloud } from "@fortawesome/free-solid-svg-icons";

const iconMapping = {
  web: faCode,
  mobile: faMobile,
  cloud: faCloud,
};

const ServiceCard = ({ service }) => {
  return (
    <div className=" p-6 rounded-lg shadow-md opacity-75 shadow-slate-700">
      <div className="flex items-center justify-center bg-blue-500 text-white rounded-full w-12 h-12">
        <FontAwesomeIcon icon={iconMapping[service.icon]} />
      </div>
      <h2 className="text-xl font-semibold mt-4">{service.title}</h2>
      <p className="mt-2">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
