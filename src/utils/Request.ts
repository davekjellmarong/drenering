import axios from "axios";
export const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const publicUrl = process.env.NEXT_PUBLIC_URL;

export const getPublicData = async (query: string) => {
  try {
    const url = apiUrl + query;
    const data = await axios.get(url);
    if (data?.data?.data) {
      return data.data.data;
    } else {
      return data.data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
