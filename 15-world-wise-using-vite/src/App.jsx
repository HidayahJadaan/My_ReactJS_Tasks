import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
import CountriesList from "./components/CountriesList";
import City from "./components/City";
import Form from "./components/Form";

const BASE_URL = "http://localhost:9000";
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There is an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  return (
    <div>
      {/* This will always be on the page
<h1>Hello Router!!</h1> */}

      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
          <Route path="*" element={<PageNotFound />} />
            {/* =============== Nested Routes  =================== */}

            {/* ============= Index Routes: The default child route if non of these routes are matches */}

            <Route index element={<Navigate replace to='cities'/>} />

            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            {/* ============================= useParams() =================================== */}
            <Route path="cities/:id" element={<City />} />
            {/* ============================================================================= */}

            <Route
              path="countries"
              element={<CountriesList cities={cities} isLoading={isLoading} />}
            />

            <Route path="form" element={<Form />} />
            {/* ======================= elemnt here not an component  ============================ */}
          </Route>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
