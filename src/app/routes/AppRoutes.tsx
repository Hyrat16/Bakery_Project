import { Routes, Route } from "react-router-dom";
import { MainLoyout } from "../layout/mainLayout/MainLoyout";
import { Home } from "../pages/dashboard/dashboard";
import { ProductStock } from "../pages/productStock/ProductStock";
import { NotFound } from "../pages/notFound/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLoyout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/estoque" element={<ProductStock />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
