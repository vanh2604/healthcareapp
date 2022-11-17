import { useState } from 'react';

export const useLoadMore = () => {
  const [loadMore, setLoadMore] = useState(false);
  const handleLoadMore = () => {
    setLoadMore(true);
  };
  return {
    loadMore,
    handleLoadMore
  };
};
