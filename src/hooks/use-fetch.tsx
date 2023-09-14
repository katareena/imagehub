import { useState, useCallback } from 'react';
import toCamelCase from '../utils/to-camel-case';
import { IImage } from '../interfaces/image';

function useFetch() {
  const [ items, setItems ] = useState<IImage[] | []>([]);
  const [ error, setError ] = useState<null | object>(null);
  const [ total, setTotal ] = useState<number>(0);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ currentPage, setCurrentPage ] = useState<number>(1);
  const [ isNextPage, setIsNextPage ] = useState<boolean>(true);

  const fetchData = useCallback(async (url: string, options: object) => {
    setIsLoading(true);

    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new Error('Request failed!');

      const json = await res.json();
      const cameliseData = toCamelCase(json.photos);
      const nextPage = !!json.next_page;
      const totalItems = json.total_results;
      setItems((prevState) => [...prevState, ...cameliseData]);
      setCurrentPage((prevState) => prevState + 1);
      setIsNextPage(nextPage);
      setTotal(totalItems);

    } catch (error: any) {
      setError(error.message || 'Something went wrong!');
    }

    setIsLoading(false);
  }, [])

  return { fetchData, items, error, total, isLoading, currentPage, isNextPage };  
}

export default useFetch;
