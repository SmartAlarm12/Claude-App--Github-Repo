import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { BRAND } from "../theme";

type Props = {
  intensity?: number;
};

export const CircuitBackground: React.FC<Props> = ({ intensity = 1 }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const drift = (frame / fps) * 8;
  const pulse = interpolate(
    frame % (fps * 4),
    [0, fps * 2, fps * 4],
    [0.4, 1, 0.4],
    { easing: Easing.bezier(0.42, 0, 0.58, 1) }
  );

  const lines = Array.from({ length: 14 }, (_, i) => i);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{
        position: "absolute",
        inset: 0,
        opacity: 0.18 * intensity,
      }}
    >
      <defs>
        <linearGradient id="cbgGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={BRAND.goldHi} />
          <stop offset="100%" stopColor={BRAND.goldLo} />
        </linearGradient>
      </defs>
      {lines.map((i) => {
        const y = ((i * 137 + drift * 30) % (height + 200)) - 100;
        const x1 = (i * 211) % width;
        const x2 = x1 + 220 + (i % 4) * 80;
        const x3 = x2 + 60;
        const y2 = y + 120;
        return (
          <g key={i} stroke="url(#cbgGold)" strokeWidth={2} fill="none">
            <path d={`M ${x1} ${y} L ${x2} ${y} L ${x2} ${y2} L ${x3} ${y2}`} />
            <circle cx={x1} cy={y} r={5} fill={BRAND.goldHi} opacity={pulse} />
            <circle cx={x3} cy={y2} r={5} fill={BRAND.goldHi} opacity={pulse} />
          </g>
        );
      })}
    </svg>
  );
};
