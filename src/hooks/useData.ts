import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoing: string) => {
  const [data, setGenres] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoing)
      .then((res) => {
        setIsLoading(false);
        setGenres(res.data.results);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  return { data, error, isLoading };
};

export default useData;
