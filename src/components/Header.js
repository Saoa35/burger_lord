function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img width={55} height={50} src="../img/burger-logo.jpg" alt="Logo" />
          <div>
            <h1>Burger Lord</h1>
            <p>best burgers in the world</p>
          </div>
        </div>
        <div className="header__cart">
          <a href="/" className="button button--cart">
            <span>55 $</span>
            <div className="button__delimitier">
              {/* <svg /> */}
              <span>3</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
