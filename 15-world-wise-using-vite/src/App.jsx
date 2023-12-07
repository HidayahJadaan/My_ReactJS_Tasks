import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountriesList from "./components/CountriesList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        {/* This will always be on the page
<h1>Hello Router!!</h1> */}
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route path="*" element={<PageNotFound />} />
            {/* =============== Nested Routes  =================== */}

            {/* ============= Index Routes: The default child route if non of these routes are matches */}

            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            {/* ============================= useParams() =================================== */}
            <Route path="cities/:id" element={<City />} />
            {/* ============================================================================= */}

            <Route path="countries" element={<CountriesList />} />

            <Route path="form" element={<Form />} />
            {/* ======================= elemnt here not an component  ============================ */}
          </Route>
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}
export default App;
