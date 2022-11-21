import "./scss/app.scss";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { Cart } from "./pages/Cart";
import FullBurger from "./pages/FullBurger";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="burger/:id" element={<FullBurger />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
