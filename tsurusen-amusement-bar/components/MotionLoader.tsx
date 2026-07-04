"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";

const motionEase = [0.22, 1, 0.36, 1] as const;

export function MotionLoader() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      className="loader-curtain"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.65, duration: 0.52, ease: motionEase }}
      aria-hidden="true"
    >
      <div className="loader-ticket">
        <Sparkles size={28} />
        <span>NOW OPENING ...</span>
      </div>
    </motion.div>
  );
}
