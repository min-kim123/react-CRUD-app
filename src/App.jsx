import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";

const App = () => {
  return (
    <div>
      <nav className="bg-gray-800">
        <div>
          <Link to="/"><h1>Product CRUD</h1></Link>
        </div>
      </nav>
      <Routes>
        <Route index element={<HomePage/>}></Route>
        <Route path="/create" element={<CreatePage/>}></Route>
        <Route path="/edit/:id" element={<EditPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;