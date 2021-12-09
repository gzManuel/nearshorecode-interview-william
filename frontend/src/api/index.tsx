import axios from "axios";

const backendDomain = "http://localhost:3333";

export const getBooks = async () => {
  try {
    const response = await axios.get(`${backendDomain}/books`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getBook = async (slug: string) => {
  try {
    const response = await axios.get(`${backendDomain}/books/${slug}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
