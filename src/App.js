import Header from "./components/Header";
import "./scss/app.scss";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
