import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { BRAND, FONT_STACK } from "../theme";

type Props = {
  startFrame?: number;
};

export const LogoShield: React.FC<Props> = ({ startFrame = 0 }) => {
  const frame = useCurrentFrame() - startFrame;
  const { fps } = useVideoConfig();

  const drawIn = interpolate(frame, [0, fps * 0.8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const wordmarkOpacity = interpolate(frame, [fps * 0.6, fps * 1.1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const wordmarkY = interpolate(frame, [fps * 0.6, fps * 1.1], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const shieldPath =
    "M 200 30 L 600 30 L 760 120 L 760 460 L 400 770 L 40 460 L 40 120 Z";
  const shieldLength = 2400;

  return (
    <div
      style={{
        position: "relative",
        width: 800,
        height: 800,
      }}
    >
      <svg width={800} height={800} viewBox="0 0 800 800">
        <defs>
          <linearGradient id="shieldFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={BRAND.goldHi} />
            <stop offset="50%" stopColor={BRAND.goldMid} />
            <stop offset="100%" stopColor={BRAND.goldLo} />
          </linearGradient>
          <linearGradient id="shieldStroke" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={BRAND.goldHi} />
            <stop offset="100%" stopColor={BRAND.goldLo} />
          </linearGradient>
        </defs>

        <path d={shieldPath} fill={BRAND.black} />

        <path
          d={shieldPath}
          fill="none"
          stroke="url(#shieldStroke)"
          strokeWidth={10}
          strokeLinejoin="round"
          strokeDasharray={shieldLength}
          strokeDashoffset={shieldLength * (1 - drawIn)}
        />

        {[
          "M 120 180 L 250 180 L 250 240 L 380 240",
          "M 680 180 L 540 180 L 540 260 L 420 260",
          "M 120 360 L 200 360 L 200 320 L 320 320",
          "M 680 360 L 600 360 L 600 320 L 480 320",
          "M 160 600 L 280 600 L 280 540 L 400 540 L 400 580 L 520 580",
          "M 640 620 L 540 620 L 540 660 L 420 660",
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            stroke={BRAND.white}
            strokeWidth={3}
            fill="none"
            opacity={interpolate(
              frame,
              [fps * 0.3 + i * 3, fps * 0.7 + i * 3],
              [0, 0.85],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            )}
          />
        ))}

        {[
          [380, 240],
          [420, 260],
          [320, 320],
          [480, 320],
          [520, 580],
          [420, 660],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={6}
            fill={BRAND.white}
            opacity={interpolate(
              frame,
              [fps * 0.5 + i * 3, fps * 0.9 + i * 3],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            )}
          />
        ))}
      </svg>

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: FONT_STACK,
          opacity: wordmarkOpacity,
          transform: `translateY(${wordmarkY}px)`,
          paddingTop: 40,
        }}
      >
        <div
          style={{
            fontSize: 78,
            fontWeight: 900,
            letterSpacing: 4,
            background: BRAND.goldGradientText,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1,
          }}
        >
          SMART ALARM
        </div>
        <div
          style={{
            fontSize: 44,
            fontWeight: 700,
            letterSpacing: 14,
            background: BRAND.goldGradientText,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginTop: 8,
          }}
        >
          SOLUTIONS
        </div>
      </div>
    </div>
  );
};
