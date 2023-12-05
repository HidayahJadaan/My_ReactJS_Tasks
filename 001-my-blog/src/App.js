import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound"

function App() {
  return (
    <div className="app">
      <Navbar />
      <BrowserRouter>
        <div className="content">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/create" element={<Create />} />

              <Route path="/blogs/:id" element={<BlogDetails />} />
           
              <Route path="*" element={<NotFound />} />

            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
