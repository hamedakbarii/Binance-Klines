import React, { useRef, useEffect, useState } from "react";
import {
  createChart,
  IChartApi,
  ISeriesApi,
  CandlestickData,
  UTCTimestamp,
} from "lightweight-charts";
import { useKlineData } from "../Hooks/useKlineData";
import TimeframeSelector from "./TimeframeSelector";

// Add a prop for theme support
interface TradingViewChartProps {
  theme: "light" | "dark";
}

const TradingViewChart: React.FC<TradingViewChartProps> = ({ theme }) => {
  const [interval, setInterval] = useState<string>("1m");
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const candlestickSeriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);
  const { data } = useKlineData("BTCUSDT", interval);

  const formatData = (): CandlestickData[] => {
    return data.map((kline) => {
      return {
        time: (kline.openTime / 1000) as UTCTimestamp,
        open: parseFloat(kline.open),
        high: parseFloat(kline.high),
        low: parseFloat(kline.low),
        close: parseFloat(kline.close),
      };
    });
  };

  const chartOptions = {
    light: {
      backgroundColor: "#ffffff",
      textColor: "#000000",
      gridColor: "#eeeeee",
    },
    dark: {
      backgroundColor: "#1f1f1f",
      textColor: "#ffffff",
      gridColor: "#444444",
    },
  };

  useEffect(() => {
    if (chartContainerRef.current) {
      const { backgroundColor, textColor, gridColor } = chartOptions[theme];

      if (chartRef.current) {
        chartRef.current.remove();
      }

      chartRef.current = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: 400,
        layout: {
          background: { color: backgroundColor },
          textColor: textColor,
        },
        grid: {
          vertLines: { color: gridColor },
          horzLines: { color: gridColor },
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
  }, [theme]); // Watch for changes in theme here

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
    <div className="w-full flex flex-col justify-center items-center gap-10 px-10 pt-20">
      <TimeframeSelector
        selectedInterval={interval}
        onChangeInterval={setInterval}
      />

      {/* Chart */}
      <div
        ref={chartContainerRef}
        className="tradingview-chart w-full min-h-[30rem] max-h-[50rem]"
        style={{ position: "relative" }}
      />

      {lastUpdated && (
        <p className="text-gray-500 mt-2">Last updated: {lastUpdated}</p>
      )}
    </div>
  );
};

export default TradingViewChart;
