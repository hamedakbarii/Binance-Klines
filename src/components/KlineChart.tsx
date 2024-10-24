// import { useEffect } from "react";
import { useKlineData } from "../Hooks/useKlineData";
// import { createChart } from "lightweight-charts";

export default function KlineChart() {
  const { data, loading, error } = useKlineData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // useEffect(() => {
  //   const firstChart = createChart(document.getElementById("binance")!);
  // }, []);

  return (
    <div>
      <h2>BTC/USDT 1-Minute Interval Data (Last 24 Hours)</h2>
      <ul>
        {data.map((kline, index) => (
          <li key={index}>
            {new Date(kline.openTime).toLocaleTimeString()} - Open: {kline.open}{" "}
            Close: {kline.close}
          </li>
        ))}
      </ul>

      {/* <div id="binance"></div> */}
    </div>
  );
}
