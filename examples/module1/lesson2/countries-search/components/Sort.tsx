import type { SortOrder } from '../types';

interface SortProps {
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
}

const Sort = ({ sortOrder, setSortOrder }: SortProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value as SortOrder);
  };

  return (
    <div className="mb-4">
      <label className="mr-2">
        Sort By:
        <select
          value={sortOrder}
          onChange={handleChange}
          className="border p-2"
        >
          <option value="alphabetical">Alphabetical</option>
          <option value="population">Population</option>
        </select>
      </label>
    </div>
  );
};

export default Sort;
