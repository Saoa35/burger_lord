import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="content">{children}</main>
    </div>
  );
};

export default MainLayout;
