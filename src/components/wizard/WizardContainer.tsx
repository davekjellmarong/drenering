"use client";

import SimpleQuoteForm from "./SimpleForm";

const WizardContainer = ({
  title,
  description,
  backgroundImage,
}: {
  title: string;
  description: string;
  backgroundImage: string;
}) => {
  console.log(title);
  console.log(backgroundImage);
  return (
    <div className="relative w-full py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
              #1 Sammenligningstjeneste for Dreneringstilbud
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Raske, Pålitelige{" "}
              <span className="text-blue-600">Dreneringsløsninger</span> ved
              Fingertuppene
            </h1>

            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto lg:mx-0">
              {description}
            </p>

            <ul className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-8 mb-6">
              {[
                "Gratis tilbud fra lokale fagfolk",
                "Sammenlign tjenester og priser",
                "Ingen forpliktelser",
              ].map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center sm:justify-start"
                >
                  <svg
                    className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 10L9 12L13 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form Container */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <SimpleQuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WizardContainer;
