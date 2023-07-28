const API_URL = "https://dummyjson.com";

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    const responseJson = await response.json();

    return responseJson;
  } catch (err) {
    return console.error(err);
  }
};
