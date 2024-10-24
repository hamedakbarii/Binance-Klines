import axios from "axios";

const BASE_URL = "https://api.binance.com/api/v3";

export const fetchKlineData = async (
  symbol: string = "BTCUSDT",
  interval: string = "1m",
  limit: number = 1440 // Last 24 hours with 1-minute intervals
) => {
  try {
    const response = await axios.get(`${BASE_URL}/klines`, {
      params: {
        symbol,
        interval,
        limit,
      },
    });

    // Return the OHLCV (Open, High, Low, Close, Volume) data
    return response.data;
  } catch (error) {
    console.error("Error fetching kline data:", error);
    throw error;
  }
};
