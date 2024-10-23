import { useRoutes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import routes from "./routes";

function App() {
  const router = useRoutes(routes);

  return (
    <div>
      <Navbar />
      {router}
    </div>
  );
}

export default App;
