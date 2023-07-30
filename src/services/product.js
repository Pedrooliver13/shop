const API_URL = "https://dummyjson.com";

export const getProducts = async (search = "", skip = 0, limit = 10) => {
  try {
    const response = await fetch(
      `${API_URL}/products/search?q=${search}&skip=${skip}&limit=${limit}`
    );
    const responseJson = await response.json();

    return responseJson;
  } catch (err) {
    return console.error(err);
  }
};

export const getProductsByCategories = async (
  category = "smartphones",
  skip = 0,
  limit = 10
) => {
  try {
    const response = await fetch(
      `${API_URL}/products/category/${category}?skip=${skip}&limit=${limit}`
    );
    const responseJson = await response.json();

    return responseJson;
  } catch (err) {
    return console.error(err);
  }
};
