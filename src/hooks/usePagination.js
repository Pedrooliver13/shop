// Packages
import { useCallback, useMemo } from "react";

export const usePagination = (page = 1, setPage, totalResults = 40) => {
  const limit = 10;
  const currentPage = Math.floor(page / 10 + 1);
  const lastPage = useMemo(
    () => Math.trunc(totalResults / limit),
    [totalResults]
  );

  const handleNextPage = useCallback(() => {
    return setPage((state) => state + 10);
  }, [page]);

  const handlePrevPage = useCallback(() => {
    return setPage((state) => state - 10);
  }, [page]);

  const handlePageChange = useCallback((page) => {
    return setPage(page);
  }, []);

  return {
    page,
    lastPage,
    currentPage,
    handleNextPage,
    handlePrevPage,
    handlePageChange,
  };
};
