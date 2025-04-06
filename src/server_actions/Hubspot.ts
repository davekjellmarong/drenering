"use server";

import { QuoteFormData } from "../components/features/tilbud/NewSmallForm";
import { HubSpotMethods } from "../queryFactory/HubSpot";

const hubspotApiKey = String(process.env.HUBSPOT_TOKEN);
export const addCompanyToHubspot = async (formdata: FormData) => {
  const payload = {
    properties: {
      name: formdata.get("companyName"),
      phone: formdata.get("phone"),
      address: formdata.get("address"),
      city: formdata.get("city"),
      zip: formdata.get("postalCode"),
      country: "Norway",
      website: formdata.get("website"),
    },
  };
  const response = await HubSpotMethods.addCompany(payload, hubspotApiKey);
  return response;
};

export const addContactToHubspot = async (formdata: QuoteFormData) => {
  const payload = {
    properties: { ...formdata },
  };
  // console.log(payload);
  const response = await HubSpotMethods.addContact(payload, hubspotApiKey);
  return response;
};
