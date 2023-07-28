const API_URL = "https://dummyjson.com";

export const getProducts = async (search = "", limit = 10) => {
  try {
    const response = await fetch(
      `${API_URL}/products?limit=${limit}&search=${search}`
    );
    const responseJson = await response.json();

    return responseJson;
  } catch (err) {
    return console.error(err);
  }
};
