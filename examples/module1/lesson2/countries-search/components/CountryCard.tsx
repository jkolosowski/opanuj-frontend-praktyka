import type { Country } from '../types';

const CountryCard = ({ country }: { country: Country }) => (
  <article
    className="bg-white shadow-md rounded-lg overflow-hidden"
    data-testid="country-card"
  >
    <img
      src={country.flags?.png}
      alt={`${country.name.common} flag`}
      className="w-full h-40 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2" data-testid="country-name">
        {country.name.common}
      </h2>
      {country.population && (
        <p className="text-gray-600">
          Population: {country.population.toLocaleString()}
        </p>
      )}
      {country.currencies && (
        <p className="text-gray-600">
          Currency: {Object.values(country.currencies)[0].name} (
          {Object.keys(country.currencies)[0]})
        </p>
      )}
      {country.languages && (
        <p className="text-gray-600">
          Language: {Object.values(country.languages)[0]}
        </p>
      )}
      {country.capital && (
        <p className="text-gray-600">Capital: {country.capital[0]}</p>
      )}
    </div>
  </article>
);

export default CountryCard;
