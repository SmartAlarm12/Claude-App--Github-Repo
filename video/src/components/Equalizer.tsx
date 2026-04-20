import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { BRAND } from "../theme";

type Props = {
  bars?: number;
  width?: number;
  height?: number;
};

export const Equalizer: React.FC<Props> = ({
  bars = 40,
  width = 900,
  height = 240,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const barWidth = width / (bars * 1.6);
  const gap = (width - bars * barWidth) / (bars - 1);

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <linearGradient id="eqGold" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor={BRAND.goldLo} />
          <stop offset="60%" stopColor={BRAND.goldMid} />
          <stop offset="100%" stopColor={BRAND.goldHi} />
        </linearGradient>
      </defs>
      {Array.from({ length: bars }).map((_, i) => {
        const phase = (frame / fps) * 4 + i * 0.45;
        const wave =
          Math.sin(phase) * 0.5 +
          Math.sin(phase * 1.7 + i * 0.3) * 0.3 +
          Math.sin(phase * 2.3 + i) * 0.2;
        const norm = (wave + 1) / 2;
        const eased = interpolate(norm, [0, 1], [0.15, 1], {
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        });
        const barH = height * eased;
        const x = i * (barWidth + gap);
        return (
          <rect
            key={i}
            x={x}
            y={height - barH}
            width={barWidth}
            height={barH}
            rx={barWidth / 2}
            fill="url(#eqGold)"
          />
        );
      })}
    </svg>
  );
};
