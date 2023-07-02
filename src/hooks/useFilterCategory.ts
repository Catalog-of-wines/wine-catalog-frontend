import { useCallback, useState } from "react";
import { OnChange } from "../types/events";

type FilterBy = {
  category: string,
  categories: string[],
}

export const useFilterCategory = () => {
  const [filterBy, setFilterBy] = useState<FilterBy>({
    category: '',
    categories: [],
  });
  
  const handleOnChange = useCallback((e: OnChange) => {
    const { value, type, } = e.target;
    const { category } = e.target.dataset;

    if (type === 'checkbox') {
      if (filterBy.categories.includes(value)) {
        setFilterBy((prev) => (
          {...prev, categories: prev.categories.filter(elem => elem !== value)}
        ));

        return;
      }

      if (category !== filterBy.category) {
        setFilterBy(prev => ({...prev, categories: []}))
      }

      setFilterBy((prev) => (
        {category: category || '', categories: [...prev.categories, value]}
      ));

      return;
    }

    setFilterBy({
      category: category || '',
      categories: [value],
    });
  }, [filterBy.categories, filterBy.category])

  return {
    category: filterBy.category,
    categories: filterBy.categories,
    handleOnChange,
  };
}