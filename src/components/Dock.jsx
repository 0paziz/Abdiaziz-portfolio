import React, { createContext, useContext, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../lib/utils";

const DockContext = createContext({
  mousex: null,
  magnification: 60,
  distance: 140,
});

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

export function Dock({
  className,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  children,
  ...props
}) {
  const mousex = useMotionValue(Infinity);

  return (
    <DockContext.Provider value={{ mousex, magnification, distance }}>
      <motion.div
        onMouseMove={(e) => mousex.set(e.pageX)}
        onMouseLeave={() => mousex.set(Infinity)}
        {...props}
        className={cn(
          "mx-auto flex h-[58px] w-max gap-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 p-2 backdrop-blur-md shadow-sm",
          className
        )}
      >
        {children}
      </motion.div>
    </DockContext.Provider>
  );
}

export function DockIcon({
  className,
  children,
  ...props
}) {
  const ref = useRef(null);
  const context = useContext(DockContext);
  
  // Use local fallback if context is missing (prevents crash)
  const defaultMouseX = useMotionValue(Infinity);
  const mousex = context.mousex || defaultMouseX;
  const magnification = context.magnification || DEFAULT_MAGNIFICATION;
  const distance = context.distance || DEFAULT_DISTANCE;

  const distanceCalc = useTransform(mousex, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full bg-transparent",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
