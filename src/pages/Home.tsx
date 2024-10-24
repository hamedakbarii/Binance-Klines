import TradingViewChart from "../components/TradingViewChart";
import { useKlineData } from "../Hooks/useKlineData";

export default function Home() {
  const { loading, error, data } = useKlineData();

  return (
    <div className="bg-white dark:bg-black w-full min-h-screen ">
      {loading && (
        <div className="text-black dark:text-white text-center">Loading...</div>
      )}

      {error && (
        <div className="text-black dark:text-white text-center">
          error : {error}
        </div>
      )}

      {data && !loading && !error && (
        <div>
          <TradingViewChart />
        </div>
      )}
    </div>
  );
}
