import NavBar from "./navBar";

const Header = ({ activeSection }: { activeSection: string }) => {
  return (
    <header className="site-header">
      <div className="brand">Gastón Herrlein</div>
      <NavBar activeSection={activeSection} />
    </header>
  );
};

export default Header;
