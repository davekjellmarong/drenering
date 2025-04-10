import { getHubspot, postHubspot } from "../utils/Request";

export const HubSpotMethods = {
  addContact: async (data: unknown, token: string) => {
    return postHubspot(data, "contacts", token);
  },
  addCompany: async (data: unknown, token: string) => {
    return postHubspot(data, "companies", token);
  },
  getPostById: async (id: string, token: string) => {
    return getHubspot("https://api.hubapi.com/cms/v3/blogs/posts/" + id, token);
  },
};
