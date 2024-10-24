import React from "react";

interface TimeframeSelectorProps {
  selectedInterval: string;
  onChangeInterval: (interval: string) => void;
}

const TimeframeSelector: React.FC<TimeframeSelectorProps> = ({
  selectedInterval,
  onChangeInterval,
}) => {
  const timeframes = ["1m", "5m", "15m", "1h", "1d"];

  return (
    <div className="flex space-x-4 my-4">
      {timeframes.map((interval) => (
        <button
          key={interval}
          onClick={() => onChangeInterval(interval)}
          className={`md:px-4 px-2 py-2 rounded  ${
            selectedInterval === interval
              ? "!bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          {interval}
        </button>
      ))}
    </div>
  );
};

export default TimeframeSelector;
