import type { Country } from '../types';

const API_URL = 'https://restcountries.com/v3.1';

export const fetchAllCountries = async (): Promise<Country[]> => {
  const response = await fetch(`${API_URL}/all`);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('No countries found');
    }
    throw new Error('Failed to fetch');
  }
  const data: Country[] = await response.json();
  return data;
};

export const fetchCountriesByCapital = async (
  capital: string
): Promise<Country[]> => {
  const response = await fetch(`${API_URL}/capital/${capital}`);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('No countries found');
    }
    throw new Error('Failed to fetch');
  }
  const data: Country[] = await response.json();
  return data;
};

export const fetchCountriesByCurrency = async (
  currency: string
): Promise<Country[]> => {
  const response = await fetch(`${API_URL}/currency/${currency}`);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('No countries found');
    }
    throw new Error('Failed to fetch');
  }
  const data: Country[] = await response.json();
  return data;
};

export const fetchCountriesByLanguage = async (
  language: string
): Promise<Country[]> => {
  const response = await fetch(`${API_URL}/lang/${language}`);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('No countries found');
    }
    throw new Error('Failed to fetch');
  }
  const data: Country[] = await response.json();
  return data;
};

export const fetchCountriesByName = async (
  name: string
): Promise<Country[]> => {
  const response = await fetch(`${API_URL}/name/${name}?fullText=false`);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('No countries found');
    }
    throw new Error('Failed to fetch');
  }
  const data: Country[] = await response.json();
  return data;
};
