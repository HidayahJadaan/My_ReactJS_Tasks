import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      {/* This will always be on the page
<h1>Hello Router!!</h1> */}

      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="app" element={<AppLayout />}>
          {/* =============== Nested Routes  =================== */}

          {/* ============= Index Routes: The default child route if non of these routes are matches */}

<Route index element={<p>LIST</p>} />

            <Route path="cities" element={<p>List of Cities</p>} />

            <Route path="countries" element={<p>List of Countries</p>} />

            <Route path="form" element={<p>Form</p>} />
          {/* ======================= elemnt here not an component  ============================ */}
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
