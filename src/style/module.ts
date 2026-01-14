export const styles = `
  :root {
    --container-width: 1200px;
    --section-padding: clamp(32px, 5vw, 64px);
    --header-padding: clamp(16px, 3vw, 24px) clamp(20px, 4vw, 32px);
    --gap-sm: 12px;
    --gap-md: 24px;
    --gap-lg: 48px;
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
  }

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
    font-size: clamp(14px, 2vw, 16px);
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
    padding: var(--header-padding);
    backdrop-filter: blur(6px);
    background-color: rgba(255,255,255,0.8);
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
    font-size: clamp(16px, 2.5vw, 20px);
    letter-spacing: 0.01em;
  }
  
  .site-nav {
    display: flex;
    gap: var(--gap-md);
    align-items: center;
    flex-wrap: wrap;
  }
  
  .nav-link {
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    font-size: clamp(13px, 2vw, 14px);
    padding: 8px 12px;
    border-radius: var(--radius-sm);
    transition: color 0.16s ease, background-color 0.16s ease;
  }
  
  .nav-link:hover {
    color: #0f62fe;
    background-color: rgba(15,98,254,0.04);
  }
  
  .nav-link.active {
    color: #0f62fe;
    background-color: rgba(15,98,254,0.08);
  }
  
  .cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border-radius: var(--radius-sm);
    background-color: #0f62fe;
    color: #ffffff;
    font-weight: 600;
    font-size: clamp(13px, 2vw, 14px);
    text-decoration: none;
    box-shadow: 0 4px 12px rgba(15,98,254,0.15);
    transition: transform 0.16s ease, box-shadow 0.16s ease;
    border: none;
    cursor: pointer;
  }
  
  .cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(15,98,254,0.2);
  }
  
  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--gap-lg);
    align-items: center;
    padding: var(--section-padding);
    max-width: var(--container-width);
    margin: 0 auto;
  }
  
  .intro {
    max-width: 100%;
  }
  
  .eyebrow {
    text-transform: uppercase;
    font-size: clamp(11px, 1.5vw, 12px);
    letter-spacing: 0.18em;
    color: #6b7280;
    margin-bottom: clamp(8px, 2vw, 12px);
  }
  
  .hero-title {
    font-size: clamp(32px, 5vw, 52px);
    line-height: 1.05;
    margin: 0 0 clamp(12px, 2.5vw, 18px) 0;
    font-weight: 800;
    color: #091024;
  }
  
  .lead {
    font-size: clamp(15px, 2vw, 18px);
    color: #334155;
    margin-bottom: clamp(16px, 3vw, 24px);
    max-width: 100%;
    line-height: 1.6;
  }
  
  .actions {
    display: flex;
    gap: var(--gap-sm);
    align-items: center;
    flex-wrap: wrap;
  }
  
  .profile-card {
    width: 100%;
    max-width: clamp(280px, 40vw, 400px);
    padding: clamp(20px, 4vw, 28px);
    border-radius: var(--radius-lg);
    background: linear-gradient(180deg, #fff, #f8fafc);
    box-shadow: 0 8px 24px rgba(2,6,23,0.06);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(8px, 2vw, 12px);
  }
  
  .profile-avatar {
    width: clamp(100px, 20vw, 140px);
    height: clamp(100px, 20vw, 140px);
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid rgba(15,98,254,0.08);
  }
  
  .profile-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .section {
    padding: var(--section-padding);
    max-width: var(--container-width);
    margin: 0 auto;
  }
  
  .section-title {
    font-size: clamp(24px, 4vw, 32px);
    font-weight: 700;
    margin-bottom: clamp(24px, 4vw, 32px);
    color: #091024;
  }
  
  .about {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--gap-lg);
    align-items: start;
  }
  
  .about-text {
    font-size: clamp(15px, 2vw, 17px);
    color: #334155;
    line-height: 1.7;
    margin: 0;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: var(--gap-sm);
    margin-top: clamp(16px, 3vw, 24px);
  }
  
  .skill-chip {
    padding: 8px 14px;
    border-radius: 999px;
    background: rgba(15,98,254,0.06);
    display: inline-block;
    font-size: clamp(12px, 1.8vw, 14px);
    font-weight: 600;
    color: #0f62fe;
    text-align: center;
    transition: background-color 0.16s ease;
  }
  
  .skill-chip:hover {
    background: rgba(15,98,254,0.12);
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--gap-md);
  }
  
  .project-card {
    border-radius: var(--radius-md);
    overflow: hidden;
    background: #fff;
    box-shadow: 0 4px 16px rgba(2,6,23,0.05);
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(2,6,23,0.08);
  }
  
  .project-thumb {
    aspect-ratio: 16/10;
    background-color: #f1f5f9;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .project-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  .project-meta {
    padding: clamp(12px, 2.5vw, 16px);
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;
  }
  
  .project-kicker {
    font-size: clamp(11px, 1.5vw, 12px);
    text-transform: uppercase;
    color: #64748b;
    letter-spacing: 0.12em;
  }
  
  .project-title {
    margin: 0;
    font-size: clamp(16px, 2.2vw, 18px);
    font-weight: 700;
    color: #091024;
  }
  
  .project-description {
    font-size: clamp(13px, 1.8vw, 14px);
    color: #64748b;
    line-height: 1.5;
    margin: 4px 0 0 0;
  }
  
  .blog-list {
    display: grid;
    gap: var(--gap-sm);
    grid-template-columns: 1fr;
  }
  
  .blog-item {
    padding: clamp(14px, 2.5vw, 16px);
    border-radius: var(--radius-sm);
    border: 1px solid rgba(15,20,30,0.04);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--gap-sm);
    transition: border-color 0.16s ease, background-color 0.16s ease;
  }
  
  .blog-item:hover {
    border-color: rgba(15,98,254,0.15);
    background-color: rgba(15,98,254,0.02);
  }
  
  .blog-content {
    flex: 1;
    min-width: 0;
  }
  
  .blog-title {
    font-weight: 600;
    margin: 0 0 2px 0;
    font-size: clamp(14px, 2vw, 16px);
    color: #091024;
  }
  
  .blog-excerpt {
    color: #64748b;
    font-size: clamp(12px, 1.8vw, 14px);
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .blog-date {
    color: #9ca3af;
    font-size: clamp(11px, 1.5vw, 12px);
    white-space: nowrap;
  }
  
  .contact {
    text-align: center;
  }
  
  .contact-content {
    max-width: clamp(300px, 80%, 600px);
    margin: 0 auto;
  }
  
  .contact-text {
    font-size: clamp(15px, 2.2vw, 18px);
    color: #334155;
    margin-bottom: clamp(20px, 4vw, 28px);
    line-height: 1.6;
  }
  
  .site-footer {
    padding: clamp(24px, 4vw, 36px) var(--section-padding);
    border-top: 1px solid rgba(15,20,30,0.04);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--gap-md);
    max-width: var(--container-width);
    margin: 0 auto;
  }
  
  .footer-text {
    font-size: clamp(12px, 1.8vw, 14px);
    color: #64748b;
  }
  
  .socials {
    display: flex;
    gap: var(--gap-sm);
    align-items: center;
  }
  
  .social-link {
    display: flex;
    align-items: center;
    gap: 4px;
    text-decoration: none;
    color: #64748b;
    font-size: clamp(12px, 1.8vw, 14px);
    padding: 6px 10px;
    border-radius: var(--radius-sm);
    transition: color 0.16s ease, background-color 0.16s ease;
  }
  
  .social-link:hover {
    color: #0f62fe;
    background-color: rgba(15,98,254,0.04);
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
  
  @media (max-width: 1024px) {
    .hero {
      grid-template-columns: 1fr 1fr;
      gap: var(--gap-md);
    }
    
    .about {
      grid-template-columns: 1fr;
      gap: var(--gap-md);
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
  @media (max-width: 768px) {
    .hero {
      grid-template-columns: 1fr;
      text-align: center;
      gap: var(--gap-lg);
    }
    
    .intro {
      order: 2;
    }
    
    .profile-card {
      order: 1;
      margin: 0 auto;
    }
    
    .actions {
      justify-content: center;
    }
    
    .site-nav {
      justify-content: center;
    }
    
    .site-footer {
      flex-direction: column;
      text-align: center;
    }
    
    .blog-item {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .blog-date {
      margin-left: 0;
      margin-top: 4px;
    }
  }
  
  @media (max-width: 480px) {
    :root {
      --section-padding: 24px 16px;
      --header-padding: 12px 16px;
    }
    
    .site-nav {
      gap: 8px;
    }
    
    .nav-link {
      padding: 6px 10px;
      font-size: 13px;
    }
    
    .cta-btn {
      padding: 8px 12px;
    }
    
    .profile-card {
      padding: 20px;
    }
    
    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
  
  :focus-visible {
    outline: 2px solid rgba(15,98,254,0.3);
    outline-offset: 2px;
  }
  
  @media (prefers-reduced-motion: reduce) {
    * {
      transition: none !important;
      animation: none !important;
    }
  }
`;
