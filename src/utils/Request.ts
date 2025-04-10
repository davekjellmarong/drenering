import axios from "axios";
export const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const publicUrl = process.env.NEXT_PUBLIC_URL;
export const hubspotUrl = process.env.HUBSPOT_BASE_API;

export const getPublicData = async (query: string) => {
  try {
    const url = apiUrl + query;
    const data = await axios.get(url);
    if (data?.data?.data) {
      return data.data.data;
    } else {
      return data.data;
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching data:", error);
      throw error.response?.data?.message || error.message;
    } else {
      // non-Axios errors (unexpected)
      throw new Error("An unknown error occurred");
    }
  }
};

export const getPublicDataFetch = async (query: string) => {
  try {
    const url = apiUrl + query;
    const response = await fetch(url);
    const data = await response.json();
    if (data?.data) {
      return data.data;
    } else {
      return data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getRouteHandler = async (query: string) => {
  try {
    const url = publicUrl + query;
    const response = await fetch(url);
    const data = await response.json();
    if (data?.data) {
      return data.data;
    } else {
      return data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const postData = async (data: unknown, query: string, token: string) => {
  try {
    const url = apiUrl + query;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.post(url, data, { headers });
    if (response?.data?.data) {
      return response.data.data;
    } else {
      return response.data;
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching data:", error);
      throw error.response?.data?.message || error.message;
    } else {
      // non-Axios errors (unexpected)
      throw new Error("An unknown error occurred");
    }
  }
};
export const postHubspot = async (
  data: unknown,
  query: string,
  token: string
) => {
  try {
    const url = hubspotUrl + query;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.post(url, data, { headers });
    if (response?.data?.data) {
      return response.data.data;
    } else {
      return response.data;
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching data:", error);
      throw error.response?.data?.message || error.message;
    } else {
      // non-Axios errors (unexpected)
      throw new Error("An unknown error occurred");
    }
  }
};

export const getHubspot = async (query: string, token: string) => {
  try {
    const url = query;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get(url, { headers });
    if (response?.data?.data) {
      return response.data.data;
    } else {
      return response.data;
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching data:", error);
      throw error.response?.data?.message || error.message;
    } else {
      // non-Axios errors (unexpected)
      throw new Error("An unknown error occurred");
    }
  }
};
