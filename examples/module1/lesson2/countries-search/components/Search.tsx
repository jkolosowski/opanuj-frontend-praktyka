import type { FilterType } from '../types';

interface SearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterType: FilterType;
}

const Search = ({ searchTerm, setSearchTerm, filterType }: SearchProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder={`Search by country's ${filterType}...`}
        className="w-full p-2 border"
      />
    </div>
  );
};

export default Search;
