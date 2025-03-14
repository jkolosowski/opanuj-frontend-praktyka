import { useQuery } from '@tanstack/react-query';

const useUsersQuery = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/api/data/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      return response.json();
    },
  });
};

export default useUsersQuery;
