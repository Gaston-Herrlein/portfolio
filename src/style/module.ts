export const styles = `
  :root {
    --container-width: 1100px;
    --section-padding: clamp(24px, 4vw, 48px);
    --header-padding: clamp(12px, 2.5vw, 20px) clamp(16px, 3vw, 28px);
    --gap-sm: 10px;
    --gap-md: 20px;
    --gap-lg: 36px;
    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 14px;
    --primary-color: #0f62fe;
    --text-primary: #091024;
    --text-secondary: #334155;
    --text-muted: #64748b;
    --bg-card: #ffffff;
    --border-subtle: rgba(15,20,30,0.08);
  }

  * {
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
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

  .skip-link {
    position: absolute;
    top: -100%;
    left: 16px;
    z-index: 10000;
    padding: 8px 16px;
    background: #0f62fe;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
    border-radius: 0 0 8px 8px;
    transition: top 0.2s ease;
  }

  .skip-link:focus {
    top: 0;
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

  .nav-link.hidden {
    display: none;
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
    position: relative;
  }
  
  .hero::before {
    content: "";
    position: absolute;
    top: -20%;
    right: -10%;
    width: 50%;
    height: 140%;
    background: radial-gradient(ellipse at center, rgba(15,98,254,0.03) 0%, transparent 70%);
    pointer-events: none;
    z-index: -1;
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
  
  @media (max-width: 480px) {
    .cta-secondary {
      width: 100%;
      justify-content: center;
    }
  }
  
  .profile-card {
    position: relative;
    width: 100%;
    max-width: clamp(280px, 40vw, 400px);
    padding: clamp(28px, 5vw, 40px);
    border-radius: var(--radius-lg);
    background: linear-gradient(135deg, #fff 0%, #f8fafc 100%);
    box-shadow: 
      0 8px 32px rgba(2,6,23,0.08),
      0 0 0 1px rgba(15,98,254,0.06),
      inset 0 1px 0 rgba(255,255,255,0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(10px, 2vw, 16px);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .profile-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, #0f62fe, transparent);
    opacity: 0.6;
    animation: shimmer 3s linear infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(200%); }
  }
  
  .profile-glow {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(15,98,254,0.03) 0%, transparent 50%);
    pointer-events: none;
    animation: pulse 8s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
  
  .profile-card:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 12px 40px rgba(2,6,23,0.12),
      0 0 0 1px rgba(15,98,254,0.12),
      0 0 24px rgba(15,98,254,0.08),
      inset 0 1px 0 rgba(255,255,255,0.8);
  }
  
  .profile-avatar {
    position: relative;
    width: clamp(100px, 20vw, 140px);
    height: clamp(100px, 20vw, 140px);
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid rgba(15,98,254,0.15);
    box-shadow: 
      0 0 0 6px rgba(15,98,254,0.06),
      0 4px 20px rgba(2,6,23,0.1);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }
  
  .profile-card:hover .profile-avatar {
    box-shadow: 
      0 0 0 6px rgba(15,98,254,0.1),
      0 0 0 10px rgba(15,98,254,0.04),
      0 8px 24px rgba(2,6,23,0.12);
    transform: scale(1.02);
  }
  
  @media (max-width: 400px) {
    .profile-avatar {
      width: 90px;
      height: 90px;
    }
  }
  
  .profile-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .profile-role {
    position: relative;
    font-weight: 600;
    font-size: clamp(15px, 2vw, 18px);
    color: #0b1220;
    letter-spacing: 0.02em;
  }
  
  .profile-location {
    position: relative;
    color: #64748b;
    font-size: clamp(12px, 1.8vw, 14px);
  }
  
  .cta-secondary {
    background-color: transparent;
    color: #0f62fe;
    border: 1.5px solid rgba(15,98,254,0.25);
    box-shadow: none;
  }
  
  .cta-secondary:hover {
    background-color: rgba(15,98,254,0.06);
    box-shadow: 0 4px 12px rgba(15,98,254,0.1);
  }
  
  .tech-summary {
    display: flex;
    flex-wrap: wrap;
    gap: clamp(8px, 2vw, 12px);
    margin-bottom: clamp(16px, 3vw, 24px);
  }
  
  .tech-item {
    display: flex;
    align-items: center;
    gap: clamp(6px, 1.5vw, 8px);
    padding: clamp(4px, 1vw, 6px) clamp(8px, 1.5vw, 12px);
    background-color: rgba(15,98,254,0.04);
    border-radius: var(--radius-sm);
    border: 1px solid rgba(15,98,254,0.08);
    transition: background-color 0.2s ease, transform 0.2s ease;
  }
  
  .tech-item:hover {
    background-color: rgba(15,98,254,0.08);
    transform: translateY(-1px);
  }
  
  .tech-icon {
    width: clamp(18px, 3vw, 22px);
    height: clamp(18px, 3vw, 22px);
    opacity: 0.85;
  }
  
  .tech-name {
    font-size: clamp(12px, 1.5vw, 14px);
    color: #0b1220;
    font-weight: 500;
  }
  
  .section {
    padding: var(--section-padding);
    max-width: var(--container-width);
    margin: 0 auto;
    border-top: 1px solid var(--border-subtle);
    scroll-margin-top: 80px;
  }
  
  .section:first-of-type {
    border-top: none;
  }
  
  .section-title {
    font-size: clamp(24px, 4vw, 28px);
    font-weight: 700;
    margin-bottom: clamp(20px, 3vw, 28px);
    color: var(--text-primary);
  }
  
  .about-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .about-text {
    font-size: clamp(15px, 2vw, 17px);
    color: var(--text-secondary);
    line-height: 1.7;
    margin: 0;
  }
  
  .skills-container {
    display: flex;
    flex-direction: column;
    gap: clamp(20px, 3vw, 28px);
  }
  
  .skill-category {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .skill-category-title {
    font-size: clamp(15px, 2vw, 17px);
    font-weight: 600;
    margin: 0;
    color: #475569;
    text-transform: capitalize;
  }
   
  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-sm);
  }

  .skill-category-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    width: 100%;
  }
    
  .skill-chip {
    position: relative;
    padding: clamp(10px, 2vw, 14px) clamp(14px, 2.5vw, 27px);
    border-radius: var(--radius-md);
    background: linear-gradient(135deg, rgba(15,98,254,0.06) 0%, rgba(15,98,254,0.03) 100%);
    border: 1px solid rgba(15,98,254,0.12);
    box-shadow: 
      0 2px 8px rgba(2,6,23,0.06),
      0 4px 12px rgba(2,6,23,0.04);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(13px, 1.6vw, 15px);
    font-weight: 600;
    color: #0f62fe;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
  }

  .skill-chip::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: var(--radius-md);
    padding: 1px;
    background: linear-gradient(135deg, rgba(15,98,254,0.18) 0%, rgba(15,98,254,0.06) 50%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .skill-chip:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, rgba(15,98,254,0.1) 0%, rgba(15,98,254,0.05) 100%);
    border-color: rgba(15,98,254,0.25);
    box-shadow: 
      0 6px 16px rgba(2,6,23,0.08),
      0 0 20px rgba(15,98,254,0.1);
  }

  .skill-chip:hover::before {
    opacity: 1;
  }

  .skill-chip-text {
    position: relative;
    z-index: 1;
  }

  .skill-popover-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .skill-popover-item {
    font-size: 13px;
    color: #0b1220;
    font-weight: 500;
    padding: 4px 0;
    border-bottom: 1px solid rgba(15,20,30,0.06);
  }

  .skill-popover-item:last-child {
    border-bottom: none;
  }

  .skill-popover-empty {
    font-size: 13px;
    color: #64748b;
    font-style: italic;
  }
  
  @media (max-width: 640px) {
    .skill-category-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    
    .skill-category-title {
      font-size: clamp(14px, 2vw, 16px);
    }
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--gap-md);
  }

  .projects-group {
    margin-bottom: clamp(28px, 4vw, 40px);
  }

  .projects-group:last-child {
    margin-bottom: 0;
  }

  .projects-group-title {
    font-size: clamp(18px, 3vw, 22px);
    font-weight: 600;
    margin: 0 0 clamp(16px, 2vw, 20px) 0;
    color: var(--text-secondary);
  }

  .project-card {
    position: relative;
    border-radius: var(--radius-md);
    overflow: hidden;
    background: #fff;
    border: 1px solid rgba(15,98,254,0.08);
    box-shadow: 
      0 4px 16px rgba(2,6,23,0.05),
      0 0 0 1px rgba(15,98,254,0.03) inset;
    display: flex;
    flex-direction: column;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  }

  .project-card::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: var(--radius-md);
    padding: 1px;
    background: linear-gradient(135deg, rgba(15,98,254,0.12) 0%, rgba(15,98,254,0.03) 50%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.25s ease;
  }
  
  .project-card:hover {
    transform: translateY(-3px);
    border-color: rgba(15,98,254,0.18);
    box-shadow: 
      0 8px 28px rgba(2,6,23,0.08),
      0 0 20px rgba(15,98,254,0.08);
  }

  .project-card:hover::before {
    opacity: 1;
  }
  
  .project-thumb {
    aspect-ratio: 16/10;
    background-color: #f1f5f9;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }
  
  .project-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }
  
  .project-thumb-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(15,98,254,0.65) 0%, rgba(15,98,254,0.5) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.25s ease;
  }
  
  .project-thumb:hover .project-thumb-overlay {
    opacity: 1;
  }
  
  .project-thumb:hover img {
    transform: scale(1.03);
  }
  
  .project-thumb-link {
    color: #fff;
    font-weight: 600;
    font-size: clamp(13px, 2vw, 15px);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 16px;
    border-radius: var(--radius-sm);
    background: rgba(255,255,255,0.2);
    backdrop-filter: blur(4px);
    transition: background-color 0.16s ease;
  }
  
  .project-thumb-link:hover {
    background: rgba(255,255,255,0.3);
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

  .project-year-role {
    font-size: clamp(12px, 1.5vw, 13px);
    color: var(--color-primary);
    font-weight: 500;
    margin-bottom: 4px;
  }

  .project-tech-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    margin-bottom: 8px;
  }

  .project-tech-tag {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 3px 6px;
    border-radius: var(--radius-sm);
    background-color: rgba(15,98,254,0.05);
    border: 1px solid rgba(15,98,254,0.08);
    transition: background-color 0.16s ease, border-color 0.16s ease;
  }

  .project-tech-tag:hover {
    background-color: rgba(15,98,254,0.1);
    border-color: rgba(15,98,254,0.15);
  }

  .project-tech-tag-icon {
    width: 14px;
    height: 14px;
    opacity: 0.8;
    flex-shrink: 0;
  }

  .project-tech-tag-text {
    font-size: 11px;
    font-weight: 500;
    color: #475569;
    white-space: nowrap;
    letter-spacing: 0.01em;
  }

  .project-tech-tag-more {
    cursor: pointer;
    color: var(--primary-color);
    font-weight: 500;
  }

  .project-tech-tag-more:hover {
    background-color: rgba(15,98,254,0.12);
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
  
  .contact-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(12px, 2.5vw, 16px);
    margin-bottom: clamp(20px, 4vw, 28px);
  }
  
  .contact-email-btn {
    font-size: clamp(14px, 2vw, 16px);
    padding: 12px 20px;
  }
  
  .contact-phone {
    font-size: clamp(14px, 2vw, 16px);
    color: #0f62fe;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.16s ease;
  }
  
  .contact-phone:hover {
    color: #0a4acc;
  }
  
  .contact-socials {
    display: flex;
    justify-content: center;
    gap: var(--gap-md);
  }
  
  .social-link-large {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(15,98,254,0.06);
    color: #0f62fe;
    transition: background-color 0.16s ease, transform 0.16s ease;
  }
  
  .social-link-large:hover {
    background: rgba(15,98,254,0.12);
    transform: translateY(-2px);
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
  }
  
  .menu-icon span {
    display: block;
    height: 2px;
    width: 100%;
    background: #0b1220;
    border-radius: 2px;
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
    padding: 72px 24px 24px;
  }
  
  .mobile-menu.open {
    transform: translateX(0);
  }
  
  .mobile-menu-close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
    border: none;
    background: rgba(15,20,30,0.04);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.16s ease;
  }
  
  .mobile-menu-close:hover {
    background: rgba(15,98,254,0.1);
  }
  
  .mobile-menu-close svg {
    width: 20px;
    height: 20px;
    stroke: #0b1220;
    stroke-width: 2;
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
    opacity: 0;
    transform: translateX(20px);
  }
  
  .mobile-menu.open .nav-link {
    animation: slideIn 0.3s ease forwards;
  }
  
  .mobile-menu.open .nav-link:nth-child(1) { animation-delay: 0.05s; }
  .mobile-menu.open .nav-link:nth-child(2) { animation-delay: 0.1s; }
  .mobile-menu.open .nav-link:nth-child(3) { animation-delay: 0.15s; }
  .mobile-menu.open .nav-link:nth-child(4) { animation-delay: 0.2s; }
  .mobile-menu.open .cta-btn {
    animation: slideIn 0.3s ease forwards;
    animation-delay: 0.25s;
    opacity: 0;
    transform: translateX(20px);
  }
  
  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
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
    
    .desktop-nav {
      display: none;
    }
    
    .mobile-nav {
      display: block;
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

  /*
 * ProjectCard — Futuristic Minimal Redesign
 *
 * Estrategia visual:
 *  - Fondo con micro-gradiente para romper el blanco plano
 *  - Borde iluminado vía gradient border (pseudo-elemento ::before)
 *  - Sombra de color para dar profundidad "lumínica" sin agresividad
 *  - Hover: elevación suave + destello de borde + zoom-in delicado de imagen
 *  - Tech tags con glow propio
 *  - Overlay del thumb más atmosférico (oscuro → acento)
 *  - Todas las transiciones ≤ 300 ms, curva ease-out para sensación fluida
 */

/* ─── Card container ──────────────────────────────────────────────────── */

.project-card {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: linear-gradient(145deg, #ffffff 0%, #f7f9fc 100%);
  display: flex;
  flex-direction: column;

  /* Borde base: semitransparente, casi invisible */
  border: 1px solid rgba(15, 98, 254, 0.10);

  /* Sombra suave con tinte azul para "glow ambiental" */
  box-shadow:
    0 2px 8px  rgba(2, 6, 23, 0.04),
    0 6px 20px rgba(2, 6, 23, 0.06),
    0 0  0 1px rgba(15, 98, 254, 0.04) inset;

  transition:
    transform        0.28s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow       0.28s cubic-bezier(0.22, 1, 0.36, 1),
    border-color     0.28s ease;
}

/* Borde iluminado: gradient border pintado como anillo
   usando mask-composite para no tapar el contenido */
.project-card::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: var(--radius-md);
  padding: 1px;                         /* grosor del borde */
  background: linear-gradient(
    135deg,
    rgba(15, 98, 254, 0.30) 0%,
    rgba(15, 98, 254, 0.06) 40%,
    rgba(15, 98, 254, 0.18) 100%
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;

  opacity: 0;
  transition: opacity 0.28s ease;
}

/* Línea de acento superior — siempre visible, muy sutil */
.project-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(15, 98, 254, 0.40),
    transparent
  );
  pointer-events: none;
  opacity: 0.6;
  transition: opacity 0.28s ease, left 0.28s ease, right 0.28s ease;
}

/* ─── Hover state ─────────────────────────────────────────────────────── */

.project-card:hover {
  transform: translateY(-4px) scale(1.005);
  border-color: rgba(15, 98, 254, 0.22);
  box-shadow:
    0 4px 12px  rgba(2, 6, 23, 0.06),
    0 12px 32px rgba(2, 6, 23, 0.10),
    0 0  28px   rgba(15, 98, 254, 0.09);
}

.project-card:hover::before {
  opacity: 1;
}

.project-card:hover::after {
  opacity: 1;
  left: 4%;
  right: 4%;
}

/* ─── Thumbnail ───────────────────────────────────────────────────────── */

.project-thumb {
  aspect-ratio: 16 / 10;
  background-color: #eef2f7;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.project-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
              filter  0.35s ease;
  filter: saturate(0.92) brightness(0.98);
}

.project-card:hover .project-thumb img {
  transform: scale(1.04);
  filter: saturate(1.05) brightness(1.01);
}

/* Overlay atmosférico: negro → acento en lugar de azul plano */
.project-thumb-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    160deg,
    rgba(5, 10, 30, 0.72) 0%,
    rgba(15, 98, 254, 0.52) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  backdrop-filter: blur(2px);
  transition: opacity 0.25s ease;
}

.project-thumb:hover .project-thumb-overlay {
  opacity: 1;
}

/* Botón "View project" dentro del overlay */
.project-thumb-link {
  color: #fff;
  font-weight: 600;
  font-size: clamp(13px, 2vw, 15px);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 18px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(6px);
  letter-spacing: 0.02em;
  transition: background-color 0.18s ease,
              border-color      0.18s ease,
              transform         0.18s ease;
}

.project-thumb-link:hover {
  background: rgba(255, 255, 255, 0.24);
  border-color: rgba(255, 255, 255, 0.44);
  transform: translateY(-1px);
}

/* ─── Meta / content area ─────────────────────────────────────────────── */

.project-meta {
  padding: clamp(12px, 2.5vw, 18px);
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  position: relative;
  z-index: 1;          /* queda sobre el ::before */
}

/* ─── Tech tags ───────────────────────────────────────────────────────── */

.project-tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 4px;
}

.project-tech-tag {
  font-size: 10px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 4px;
  background: rgba(15, 98, 254, 0.08);
  color: var(--primary-color);
  letter-spacing: 0.04em;
  border: 1px solid rgba(15, 98, 254, 0.14);
  transition: background-color 0.18s ease,
              box-shadow       0.18s ease;
}

.project-card:hover .project-tech-tag {
  background: rgba(15, 98, 254, 0.13);
  box-shadow: 0 0 6px rgba(15, 98, 254, 0.18);
}

/* ─── Year / role ─────────────────────────────────────────────────────── */

.project-year-role {
  font-size: clamp(11px, 1.5vw, 12px);
  color: var(--primary-color);
  font-weight: 500;
  opacity: 0.75;
  letter-spacing: 0.03em;
  display: flex;
  gap: 4px;
}

/* ─── Title ───────────────────────────────────────────────────────────── */

.project-title {
  margin: 2px 0 0;
  font-size: clamp(16px, 2.2vw, 18px);
  font-weight: 700;
  color: #091024;
  letter-spacing: -0.01em;
  transition: color 0.18s ease;
}

.project-card:hover .project-title {
  color: #0f62fe;
}

/* ─── Description ─────────────────────────────────────────────────────── */

.project-description {
  font-size: clamp(13px, 1.8vw, 14px);
  color: #64748b;
  line-height: 1.55;
  margin: 2px 0 0;
}

/* ─── Reduced motion ─────────────────────────────────────────────────── */

@media (prefers-reduced-motion: reduce) {
  .project-card,
  .project-card::before,
  .project-card::after,
  .project-thumb img,
  .project-thumb-overlay,
  .project-thumb-link,
  .project-tech-tag,
  .project-title {
    transition: none !important;
    animation: none !important;
  }
}
`;
