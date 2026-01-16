import MobileMenu from "./mobileMenu";
import NavBar from "./navBar";

const Header = ({ activeSection }: { activeSection: string }) => {
  return (
    <header className="site-header">
      <div className="brand">Gastón Herrlein</div>
      <div className="header-controls">
        <div className="desktop-nav">
          <NavBar activeSection={activeSection} />
        </div>
        <div className="mobile-nav">
          <MobileMenu activeSection={activeSection} />
        </div>
      </div>
    </header>
  );
};

export default Header;
