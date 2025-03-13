import type { Country } from '../types';
import CountryCard from './CountryCard';

const CountriesList = ({ countries }: { countries: Country[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {countries.map((country) => (
      <CountryCard key={country.cca3} country={country} />
    ))}
  </div>
);

export default CountriesList;
