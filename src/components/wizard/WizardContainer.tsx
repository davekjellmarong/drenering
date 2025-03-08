"use client";

import React from "react";
import WizardForm from "../WizardForm";

const WizardContainer = ({
  title,
  description,
  backgroundImage,
}: {
  title: string;
  description: string;
  backgroundImage: string;
}) => {
  return (
    <div
      className="relative w-full min-h-[900px] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-2 lg:px-8 text-white pt-16 lg:pt-0"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Hero Text - Ensures Padding on Mobile */}
      <div className="relative z-10 max-w-2xl text-center lg:text-left mt-10 lg:mt-0">
        <h1 className="text-4xl lg:text-5xl font-bold">{title}</h1>
        <p className="text-lg mt-4">{description}</p>
      </div>

      {/* Wizard Form - Below Text on Mobile, Floating Right on Desktop */}
      <div className="relative z-10 w-full max-w-md mt-8 lg:mt-0 lg:absolute lg:top-20 lg:right-10 bg-white shadow-xl rounded-lg p-0 lg:w-[450px]">
        <WizardForm />
      </div>
    </div>
  );
};

export default WizardContainer;
