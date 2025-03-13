import { useEffect, useState } from 'react';
import type { Country, FilterType } from '../types';
import {
  fetchAllCountries,
  fetchCountriesByCapital,
  fetchCountriesByCurrency,
  fetchCountriesByLanguage,
  fetchCountriesByName,
} from '../services/fetchCountries';

const fetchStrategies = {
  name: fetchCountriesByName,
  currency: fetchCountriesByCurrency,
  capital: fetchCountriesByCapital,
  language: fetchCountriesByLanguage,
  default: fetchAllCountries,
};

const useGetCountries = (searchTerm: string, filterType: FilterType) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCountries = async () => {
    setLoading(true);
    setError(null);

    try {
      const fetchFn =
        searchTerm === ''
          ? fetchAllCountries
          : (fetchStrategies[filterType] ?? fetchStrategies.default);

      const data = await fetchFn(searchTerm);
      setCountries(data);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : 'An unexpected error occurred.'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, [searchTerm, filterType]);

  return { countries, loading, error };
};

export default useGetCountries;
