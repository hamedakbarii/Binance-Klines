import { useEffect, useState } from "react";
import TradingViewChart from "../components/TradingViewChart";
import { useKlineData } from "../Hooks/useKlineData";

export default function Home() {
  const { loading, error, data } = useKlineData();

  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <div
      className={`bg-white dark:bg-black w-full min-h-screen ${
        theme === "dark" ? "dark" : ""
      }`}
    >
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
          <TradingViewChart theme={theme} />
        </div>
      )}
    </div>
  );
}
