import { motion } from "framer-motion";

interface DiagonalDividerProps {
  position: "top" | "bottom";
  colorFrom: string;
  colorTo: string;
  angle?: number;
  height?: number;
  withGlow?: boolean;
}

export default function DiagonalDivider({
  position,
  colorFrom,
  colorTo,
  angle = -3,
  height = 120,
  withGlow = false,
}: DiagonalDividerProps) {
  const skewY = `${angle}deg`;
  const marginOffset = height / 2;

  return (
    <div
      className={`absolute left-0 right-0 w-full overflow-hidden pointer-events-none z-10
        ${position === "top" ? "top-0" : "bottom-0"}`}
      style={{
        height: `${height}px`,
        marginTop: position === "top" ? -marginOffset : 0,
        marginBottom: position === "bottom" ? -marginOffset : 0,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          transform: `skewY(${skewY})`,
          background: `linear-gradient(to right, ${colorFrom}, ${colorTo})`,
        }}
      />
      {withGlow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            transform: `skewY(${skewY})`,
            background: `linear-gradient(to right, ${colorFrom}, ${colorTo})`,
            filter: "blur(20px)",
          }}
        />
      )}
    </div>
  );
}
