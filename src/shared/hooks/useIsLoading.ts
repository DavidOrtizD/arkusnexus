import { useState } from 'react';
export const useIsLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  const setLoadingStatus = (loading: boolean) => {
    setIsLoading(loading);
  }

  return {
    setLoadingStatus,
    isLoading
  }
}