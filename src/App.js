import Header from "./components/Header";
import "./scss/app.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <main className="content">
        <div className="container">
          <Home />
          {/* <NotFound /> */}
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
