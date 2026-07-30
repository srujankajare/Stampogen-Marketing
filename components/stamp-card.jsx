"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { QrCode, Check } from "lucide-react";

const TOTAL = 8;

// Each stamp lands a little differently — real ink never sits perfectly straight.
// Pre-rolled so the wobble is consistent per slot instead of jittering on re-render.
const WOBBLE = [-11, 6, -8, 4, -13, 3, -7, 9];

export function StampCard() {
  const [filled, setFilled] = useState(0);
  const markRefs = useRef([]);
  const cardRef = useRef(null);

  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const springX = useSpring(rotX, { stiffness: 150, damping: 18 });
  const springY = useSpring(rotY, { stiffness: 150, damping: 18 });

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotY.set(px * 6);
    rotX.set(py * -6);
  }

  function handleMouseLeave() {
    rotX.set(0);
    rotY.set(0);
  }

  function stamp() {
    if (filled >= TOTAL) return;
    const i = filled;
    setFilled(filled + 1);

    // Wait a tick for the DOM node to exist, then let GSAP do the "thump."
    requestAnimationFrame(() => {
      const el = markRefs.current[i];
      if (!el) return;
      const wob = WOBBLE[i % WOBBLE.length];
      gsap.fromTo(
        el,
        { opacity: 0, scale: 2.4, rotate: wob - 20 },
        {
          opacity: 1,
          scale: 1,
          rotate: wob,
          duration: 0.32,
          ease: "back.out(2.2)",
        }
      );
    });
  }

  const isFull = filled >= TOTAL;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 900 }}
      className="relative w-full max-w-[400px] rounded-[10px] border border-line bg-card p-6 pb-6 shadow-panel"
    >
      <div className="mb-4 flex items-baseline justify-between">
        <span className="font-display text-xl font-extrabold">Café Milaan</span>
        <span className="font-mono text-[11px] text-[#78716a]">CARD #A192-K</span>
      </div>

      <div className="mb-4 grid grid-cols-4 gap-3">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <div
            key={i}
            className={`relative flex aspect-square items-center justify-center rounded-full font-mono text-[11px] text-[#a39c8f] ${
              i < filled ? "border-[2px] border-ink-navy" : "border-2 border-dashed border-charcoal/30"
            }`}
          >
            {i >= filled && i + 1}
            {i < filled && (
              <span
                ref={(el) => (markRefs.current[i] = el)}
                className="absolute inset-0 flex items-center justify-center opacity-0"
              >
                <svg viewBox="0 0 40 40" className="h-[76%] w-[76%]" fill="none">
                  <circle cx="20" cy="20" r="17" stroke="#1E3350" strokeWidth="2.3" />
                  <path
                    d="M13 21l4.5 4.5L28 15"
                    stroke="#1E3350"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-dashed border-line pt-3.5">
        <span className="text-[13px] text-[#57514a]">
          <strong className="text-charcoal">{filled} / {TOTAL}</strong> — free coffee at 8
        </span>
        <button
          onClick={stamp}
          disabled={isFull}
          className="flex items-center gap-2 rounded-[4px] bg-ink-navy px-3.5 py-2.5 font-mono text-[12.5px] font-medium text-paper disabled:bg-brass"
        >
          {isFull ? <Check className="h-4 w-4" /> : <QrCode className="h-4 w-4" />}
          {isFull ? "Card full" : "Tap to scan"}
        </button>
      </div>

      {isFull && (
        <motion.div
          initial={{ opacity: 0, rotate: -3, scale: 1.3 }}
          animate={{ opacity: 1, rotate: -3, scale: 1 }}
          className="mt-3.5 text-center font-hand text-lg text-ink-red"
        >
          reward unlocked — go grab it!
        </motion.div>
      )}
    </motion.div>
  );
}
