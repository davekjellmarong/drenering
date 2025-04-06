import { postHubspot } from "../utils/Request";

export const HubSpotMethods = {
  addContact: async (data: unknown, token: string) => {
    return postHubspot(data, "contacts", token);
  },
  addCompany: async (data: unknown, token: string) => {
    return postHubspot(data, "companies", token);
  },
};
