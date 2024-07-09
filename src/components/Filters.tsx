import { ChangeEvent, useId } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters";

export const Filters = () => {
  const {filters,setFilters} = useFilters();

  const minPriceFilterId = useId()
  const categoryFilterID = useId()

  const handleChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    // @ts-ignore
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  const handleChangeMinPrice = (event: ChangeEvent<HTMLInputElement>) => {
    
    // @ts-ignore
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };
  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>{filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterID}>Category</label>
        <select name="category" id={categoryFilterID} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="smartphones">smartphones</option>
          <option value="groceries">groceries</option>
          <option value="laptops">laptops</option>
        </select>
      </div>
    </section>
  );
};
