import { useState, useEffect } from "react";
import { fetchKlineData } from "../services/binanceService";

interface KlineData {
  openTime: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  closeTime: number;
}

export const useKlineData = (
  symbol: string = "BTCUSDT",
  interval: string = "1m"
) => {
  const [data, setData] = useState<KlineData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchKlineData(symbol, interval);
        setData(
          result.map((item: any) => ({
            openTime: item[0],
            open: item[1],
            high: item[2],
            low: item[3],
            close: item[4],
            volume: item[5],
            closeTime: item[6],
          }))
        );
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // timer to fetch data every 60 seconds
    const intervalId = setInterval(fetchData, 60000);

    return () => clearInterval(intervalId);
  }, [symbol, interval]);

  return { data, loading, error };
};
