import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type PopoverProps = {
  trigger: React.ReactNode;
  content: React.ReactNode;
};

const Popover = ({ trigger, content }: PopoverProps) => {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(
    null
  );
  const anchorRef = useRef<HTMLDivElement>(null);

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
      <div ref={anchorRef}>{trigger}</div>
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
            {content}
          </div>,
          document.body
        )}
    </div>
  );
};

export default Popover;
