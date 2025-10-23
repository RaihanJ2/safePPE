import { useState, useEffect } from 'react';

// Mock data fetch simulation
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export function useBigQueryData<T>(query: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate BigQuery delay
        await delay(2000);
        
        if (!mounted) return;
        
        // Mock data - replace with actual BigQuery implementation
        setData({} as T);
        setLoading(false);
      } catch (err) {
        if (!mounted) return;
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [query]);

  return { data, loading, error };
}