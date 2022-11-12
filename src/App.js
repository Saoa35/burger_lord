import Header from "./components/Header";
import "./scss/app.scss";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { Cart } from "./pages/Cart";
import { createContext, useState } from "react";

export const SearchContext = createContext("");

function App() {
  const [serchValue, setSerchValue] = useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ serchValue, setSerchValue }}>
        <Header />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* <footer></footer> */}
      </SearchContext.Provider>
    </div>
  );
}

export default App;
