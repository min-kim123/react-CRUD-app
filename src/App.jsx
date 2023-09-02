import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import { Link } from "react-router-dom";
import EditPage from "./pages/EditPage";

export const VITE_API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  return (
    <div>
      <div>
        <nav className="px-2 py-3 bg-blue-500">
          <div className="flex flex-wrap ">
            <Link
              to="/"
              className="px-2 self-center font-bold text-white text-xl"
            >
              <h1>Store Inventory</h1>
            </Link>

            <Link
              to="/create/"
              className="px-2 rounded-sm mx-8 self-center flex items-center fab fa-pinterest text-lg leading-lg text-white bg-blue-600"
            >
              Create New Product
            </Link>
          </div>
        </nav>
      </div>
      
      <div className="px-2">
        <Routes>
          {/* the different paths that can be taken  */}
          <Route index element={<HomePage />}></Route>
          <Route path="/create" element={<CreatePage />}></Route>
          <Route path="/edit/:id" element={<EditPage />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
