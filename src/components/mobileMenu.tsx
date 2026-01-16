import { useState, useEffect } from "react";
import { X } from "lucide-react";
import NavBar from "./navBar";

const MobileMenu = ({ activeSection }: { activeSection: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="mobile-menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className={`menu-icon ${isOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      <div
        className={`mobile-menu-overlay ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <nav
          className={`mobile-menu ${isOpen ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="mobile-menu-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
          <NavBar activeSection={activeSection} onLinkClick={handleLinkClick} />
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
