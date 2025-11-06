export const styles = `
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #FFFFFF;
    color: #0b1220;
    line-height: 1.5;
    font-size: 16px;
  }
  
  img {
    max-width: 100%;
    display: block;
    height: auto;
  }
  
  .app-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .site-header {
    position: sticky;
    top: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 32px;
    backdrop-filter: blur(6px);
    background-color: rgba(255,255,255,0.6);
    border-bottom: 1px solid rgba(15,20,30,0.04);
  }
  
  .header-controls {
    display: flex;
    gap: 12px;
    align-items: center;
  }
  
  .desktop-nav {
    display: block;
  }
  
  .mobile-nav {
    display: none;
  }
  
  .brand {
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.01em;
  }
  
  .site-nav {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  
  .nav-link {
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    font-size: 14px;
    padding: 8px;
    transition: color 0.16s ease;
  }
  
  .nav-link:hover {
    color: #0f62fe;
  }
  
  .nav-link.active {
    color: #0f62fe;
  }
  
  .cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    border-radius: 10px;
    background-color: #0f62fe;
    color: #ffffff;
    font-weight: 600;
    text-decoration: none;
    box-shadow: 0 6px 18px rgba(15,98,254,0.12);
    transition: transform .16s ease, box-shadow .16s ease;
    border: none;
    cursor: pointer;
  }
  
  .cta-btn:hover {
    transform: translateY(-2px);
  }
  
  .hero {
    display: grid;
    grid-template-columns: 1fr 460px;
    gap: 48px;
    align-items: center;
    padding: 96px 32px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .intro {
    max-width: 720px;
  }
  
  .eyebrow {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.18em;
    color: #6b7280;
    margin-bottom: 12px;
  }
  
  .hero-title {
    font-size: clamp(36px, 6.2vw, 56px);
    line-height: 1.02;
    margin: 0 0 18px 0;
    font-weight: 800;
    color: #091024;
  }
  
  .lead {
    font-size: 18px;
    color: #334155;
    margin-bottom: 22px;
    margin-right: 60px;
    text-align: justify;
}
  }
  
  .actions {
    display: flex;
    gap: 12px;
    align-items: center;
  }
  
  .profile-card {
    width: 100%;
    max-width: 420px;
    padding: 26px;
    border-radius: 16px;
    background: linear-gradient(180deg, #fff, #f8fafc);
    box-shadow: 0 10px 30px rgba(2,6,23,0.06);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
  
  .profile-avatar {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    overflow: hidden;
    border: 6px solid rgba(15,98,254,0.08);
  }
  
  .profile-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .section {
    padding: 48px 32px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .section-title {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 32px;
    color: #091024;
  }
  
  .about {
    display: grid;
    grid-template-columns: 1fr 500px;
    gap: 32px;
    align-items: start;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 12px;
    margin-top: 20px;
  }
  
  .skill-chip {
    padding: 10px 12px;
    border-radius: 999px;
    background: rgba(15,98,254,0.08);
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    color: #0f62fe;
    text-align: center;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 22px;
  }
  
  .project-card {
    border-radius: 12px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 8px 24px rgba(2,6,23,0.06);
    display: flex;
    flex-direction: column;
    transition: transform 0.16s ease;
  }
  
  .project-card:hover {
    transform: translateY(-4px);
  }
  
  .project-thumb {
    height: 160px;
    background-size: cover;
    background-position: center;
  }
  
  .project-meta {
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .project-kicker {
    font-size: 12px;
    text-transform: uppercase;
    color: #64748b;
    letter-spacing: 0.14em;
  }
  
  .project-title {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: #091024;
  }
  
  .blog-list {
    display: grid;
    gap: 14px;
    grid-template-columns: 1fr;
  }
  
  .blog-item {
    padding: 16px;
    border-radius: 10px;
    border: 1px solid rgba(15,20,30,0.04);
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: border-color 0.16s ease;
  }
  
  .blog-item:hover {
    border-color: rgba(15,98,254,0.2);
  }
  
  .blog-content {
    flex: 1;
  }
  
  .blog-title {
    font-weight: 600;
    margin: 0 0 4px 0;
    color: #091024;
  }
  
  .blog-excerpt {
    color: #64748b;
    font-size: 14px;
    margin: 0;
  }
  
  .blog-date {
    color: #9ca3af;
    font-size: 12px;
    white-space: nowrap;
    margin-left: 16px;
  }
  
  .contact {
    text-align: center;
  }
  
  .contact-content {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .site-footer {
    padding: 36px 32px;
    border-top: 1px solid rgba(15,20,30,0.04);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .socials {
    display: flex;
    gap: 12px;
    align-items: center;
  }
  
  .social-link {
    display: flex;
    align-items: center;
    gap: 4px;
    text-decoration: none;
    color: #64748b;
    font-size: 14px;
    transition: color 0.16s ease;
  }
  
  .social-link:hover {
    color: #0f62fe;
  }

  /* language switch */
  .lang-switch {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(15,98,254,0.06);
    border: 1px solid rgba(15,20,30,0.06);
  }

  .lang-option {
    appearance: none;
    background: transparent;
    border: none;
    color: #0b1220;
    font-weight: 600;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 999px;
    cursor: pointer;
    opacity: 0.7;
  }

  .lang-option.active {
    background: #0f62fe;
    color: #ffffff;
    opacity: 1;
  }

  .lang-sep { color: #475569; opacity: 0.6; }

  /* Mobile menu */
  .mobile-menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    border-radius: 8px;
    transition: background-color 0.16s ease;
  }
  
  .mobile-menu-toggle:hover {
    background: rgba(15,20,30,0.04);
  }
  
  .menu-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 20px;
    height: 16px;
    position: relative;
  }
  
  .menu-icon span {
    display: block;
    height: 2px;
    width: 100%;
    background: #0b1220;
    border-radius: 2px;
    transition: all 0.2s ease;
  }
  
  .menu-icon.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .menu-icon.open span:nth-child(2) {
    opacity: 0;
  }
  
  .menu-icon.open span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
  
  .dark .menu-icon span {
    background: #e5e7eb;
  }
  
  .mobile-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, visibility 0.2s ease;
  }
  
  .mobile-menu-overlay.open {
    opacity: 1;
    visibility: visible;
  }
  
  .mobile-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    max-width: 85vw;
    height: 100vh;
    background: #ffffff;
    box-shadow: -4px 0 24px rgba(2,6,23,0.12);
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 1000;
    overflow-y: auto;
    padding: 80px 24px 24px;
  }
  
  .mobile-menu.open {
    transform: translateX(0);
  }
  
  .mobile-menu .site-nav {
    flex-direction: column;
    gap: 8px;
    align-items: stretch;
  }
  
  .mobile-menu .nav-link {
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 15px;
    transition: background-color 0.16s ease, color 0.16s ease;
  }
  
  .mobile-menu .nav-link:hover {
    background: rgba(15,98,254,0.08);
    color: #0f62fe;
  }
  
  .mobile-menu .nav-link.active {
    background: rgba(15,98,254,0.12);
    color: #0f62fe;
  }
  
  .mobile-menu .cta-btn {
    width: 100%;
    justify-content: center;
    margin-top: 8px;
  }
  
  .dark .mobile-menu {
    background: #0f172a;
    box-shadow: -4px 0 24px rgba(0,0,0,0.4);
  }
  
  .dark .mobile-menu-overlay {
    background: rgba(0, 0, 0, 0.7);
  }
  
  @media (max-width: 980px) {
    .hero {
      grid-template-columns: 1fr;
      padding: 56px 20px;
    }
    
    .about {
      grid-template-columns: 1fr;
    }
    
    .site-header {
      padding: 16px 20px;
    }
    
    .site-nav {
      gap: 12px;
    }
    
    .section {
      padding: 48px 20px;
    }
  }
  
  @media (max-width: 660px) {
    .desktop-nav {
      display: none;
    }
    
    .mobile-nav {
      display: block;
    }
  }
  
  @media (max-width: 640px) {
    .actions {
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }
    
    .site-nav {
      flex-wrap: wrap;
    }
    
    .site-footer {
      flex-direction: column;
      text-align: center;
    }
  }
  
  :focus-visible {
    outline: 3px solid rgba(15,98,254,0.18);
    outline-offset: 3px;
  }
  
  @media (prefers-reduced-motion: reduce) {
    * {
      transition: none !important;
      animation: none !important;
    }
  }
`;
