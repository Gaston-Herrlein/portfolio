import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import projectsData from "../const/projects.json";

type TitleWithPopoverProps = {
  title: string;
  detail: string;
};

const TitleWithPopover = ({ title, detail }: TitleWithPopoverProps) => {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(
    null
  );
  const anchorRef = useRef<HTMLHeadingElement>(null);

  const updatePosition = () => {
    const el = anchorRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const padding = 8;
    const maxWidth = 360;
    const viewportWidth = window.innerWidth;
    const left = Math.min(
      Math.max(rect.left, 8),
      Math.max(8, viewportWidth - maxWidth - 8)
    );
    const top = rect.bottom + padding;
    setCoords({ top, left });
  };

  useEffect(() => {
    if (!open) return;
    updatePosition();
    const onScroll = () => updatePosition();
    const onResize = () => updatePosition();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <h3 ref={anchorRef} className="project-title" style={{ margin: 0 }}>
        {title}
      </h3>
      {open &&
        coords &&
        createPortal(
          <div
            role="tooltip"
            style={{
              position: "fixed",
              top: `${coords.top}px`,
              left: `${coords.left}px`,
              zIndex: 1000,
              maxWidth: "360px",
              background: "linear-gradient(180deg, #ffffff, #f8fafc)",
              color: "#0b1220",
              border: "1px solid rgba(15,20,30,0.14)",
              borderTop: "2px solid rgba(15,98,254,0.18)",
              boxShadow: "0 10px 30px rgba(2,6,23,0.10)",
              borderRadius: "10px",
              padding: "14px 16px",
              fontSize: "14px",
              lineHeight: 1.6,
              pointerEvents: "none",
              whiteSpace: "normal",
            }}
          >
            {detail}
          </div>,
          document.body
        )}
    </div>
  );
};

type ProjectItem = {
  title: string;
  tech: string;
  description: string;
  image: string;
  link: string;
  category: string;
  longDescription?: string;
};

const Project = () => {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Selected Projects</h2>
      <div className="projects-grid">
        {projectsData.featured.map((project: ProjectItem, index: number) => (
          <div key={index} className="project-card">
            <div className="project-thumb">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
            <div className="project-meta">
              <div className="project-kicker">{project.tech}</div>
              <TitleWithPopover
                title={project.title}
                detail={
                  project.longDescription ??
                  `${project.description} · Tech: ${project.tech}`
                }
              />
              <p
                style={{
                  margin: "8px 0 12px 0",
                  color: "#64748b",
                  fontSize: "14px",
                }}
              >
                {project.description}
              </p>
              <a
                href={project.link}
                className="nav-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                View project <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
