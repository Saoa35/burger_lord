import { lazy, Suspense } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
// import { Cart } from "./pages/Cart";
import FullBurger from "./pages/FullBurger";
import MainLayout from "./layouts/MainLayout";
import "./scss/app.scss";

const Cart = lazy(() => import("./pages/Cart"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense>
              <Cart />
            </Suspense>
          }
        />
        <Route path="burger/:id" element={<FullBurger />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
