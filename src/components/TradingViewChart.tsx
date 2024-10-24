import React, { useRef, useEffect, useState } from "react";
import {
  createChart,
  IChartApi,
  ISeriesApi,
  CandlestickData,
} from "lightweight-charts";
import { useKlineData } from "../Hooks/useKlineData";
import TimeframeSelector from "./TimeframeSelector";

const TradingViewChart: React.FC = () => {
  const [interval, setInterval] = useState<string>("1m");
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const candlestickSeriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);
  const { data } = useKlineData("BTCUSDT", interval);

  const formatData = (): CandlestickData[] => {
    return data.map((kline) => ({
      time: kline.openTime / 1000,
      open: parseFloat(kline.open),
      high: parseFloat(kline.high),
      low: parseFloat(kline.low),
      close: parseFloat(kline.close),
    }));
  };

  useEffect(() => {
    if (chartContainerRef.current) {
      chartRef.current = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: 400,
        layout: {
          backgroundColor: "#ffffff",
          textColor: "#000",
        },
        grid: {
          vertLines: { color: "#eeeeee" },
          horzLines: { color: "#eeeeee" },
        },
      });

      candlestickSeriesRef.current = chartRef.current.addCandlestickSeries();

      const resizeObserver = new ResizeObserver(() => {
        if (chartContainerRef.current && chartRef.current) {
          chartRef.current.resize(chartContainerRef.current.clientWidth, 400);
        }
      });

      resizeObserver.observe(chartContainerRef.current);

      return () => resizeObserver.disconnect();
    }
  }, []);

  useEffect(() => {
    if (candlestickSeriesRef.current && data.length > 0) {
      const formattedData = formatData();
      candlestickSeriesRef.current.setData(formattedData);

      // Update the "Last Updated" timestamp
      const lastUpdateTime = new Date().toLocaleTimeString();
      setLastUpdated(lastUpdateTime);
    }
  }, [data]);

  return (
    <div>
      <TimeframeSelector
        selectedInterval={interval}
        onChangeInterval={setInterval}
      />
      <div
        ref={chartContainerRef}
        className="tradingview-chart"
        style={{ position: "relative" }}
      />
      {lastUpdated && (
        <p className="text-gray-500 mt-2">Last updated: {lastUpdated}</p>
      )}
    </div>
  );
};

export default TradingViewChart;
