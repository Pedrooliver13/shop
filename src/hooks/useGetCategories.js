// Packages
import { useState, useEffect } from "react";

// Services
import { getAllCategories } from "services/categories";

export const useGetCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllCategories()
      .then(setCategories)
      .finally(() => setIsLoading(false));
  }, []);

  return { categories, isLoading };
};
