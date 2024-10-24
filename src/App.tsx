import { useRoutes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import routes from "./routes";
import ThemeContextProvider from "./context/ThemeContextProvider";

function App() {
  const router = useRoutes(routes);

  return (
    <ThemeContextProvider>
      <div>
        <Navbar />
        {router}
      </div>
    </ThemeContextProvider>
  );
}

export default App;
