import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing"
import HomePage from "./pages/HomePage"
import PageNotFound from "./pages/PageNotFound";

 function App() {
  return (
   <div>
{/* This will always be on the page
<h1>Hello Router!!</h1> */}


<BrowserRouter>
    <Routes>

      <Route path="" element={<HomePage />} />
      <Route path="product" element={<Product/>} />
      <Route path="pricing" element={<Pricing /> } />
      <Route path="*" element={<PageNotFound /> } />

    </Routes>
    </BrowserRouter>
   </div>

  );
}
export default App;
