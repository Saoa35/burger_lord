import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="header__container">
          <div className="header__logo">
            {/* <img width={38} src={} alt='Logo' /> */}
            <div>
              <h1>Burger Lord</h1>
              <p>best burgers in the world</p>
            </div>
          </div>
          <div className="header__cart"></div>
        </div>
      </header>
      <nav></nav>
      <main className="content"></main>
      <footer></footer>
    </div>
  );
}

export default App;
