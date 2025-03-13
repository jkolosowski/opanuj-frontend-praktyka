import { useEffect, useMemo, useState } from 'react';
import type { FilterType, SortOrder } from '../types';
import Loader from '../components/Loader';
import Search from '../components/Search';
import CountriesList from '../components/CountriesList';
import Filter from '../components/Filter';
import useGetCountries from '../hooks/useGetCountries';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';

const itemsPerPage = 6;

const CountriesSearchContainer = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterType, setFilterType] = useState<FilterType>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('alphabetical');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { countries, loading, error } = useGetCountries(searchTerm, filterType);

  const sortedCountries = useMemo(() => {
    if (!countries) return [];
    const sorted = [...countries];
    if (sortOrder === 'alphabetical') {
      sorted.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } else if (sortOrder === 'population') {
      sorted.sort((a, b) => (b.population || 0) - (a.population || 0));
    }
    return sorted;
  }, [countries, sortOrder]);

  const totalPages = Math.ceil(sortedCountries.length / itemsPerPage);

  useEffect(() => {
    if (currentPage !== 1) setCurrentPage(1);
  }, [searchTerm, filterType, sortOrder]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCountries = sortedCountries.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const renderContent = () => {
    if (error) return <div className="text-red-500">{error}</div>;
    if (loading) return <Loader />;

    return (
      <>
        <CountriesList countries={currentCountries} />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </>
    );
  };

  return (
    <main className="container mx-auto py-4">
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterType={filterType}
      />
      <div className="flex flex-row gap-4">
        <Filter filterType={filterType} setFilterType={setFilterType} />
        <Sort sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>
      {renderContent()}
    </main>
  );
};

export default CountriesSearchContainer;
