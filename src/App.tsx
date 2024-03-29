import { lazy, Suspense } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import "./scss/App.scss";

const Cart = lazy(() => import(/* webpackChunkName: 'Cart' */ "./pages/Cart"));
const FullBurger = lazy(
  () => import(/* webpackChunkName: 'FullBurger' */ "./pages/FullBurger")
);
const NotFound = lazy(
  () => import(/* webpackChunkName: 'NotFound' */ "./pages/NotFound")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="burger/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <FullBurger />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
