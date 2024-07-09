import { useFiltersContext } from "../context/filters";
import { Product, ProductsProps } from "../types/products";

export const useFilters = () => {
    const { filters, setFilters } = useFiltersContext();
  const filterProducts = (products: ProductsProps): Product[] => {
    return products.products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };
  return {
    filters,
    filterProducts,
    setFilters,
  };
};
