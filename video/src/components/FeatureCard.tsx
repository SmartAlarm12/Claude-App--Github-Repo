import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { BRAND, FONT_STACK } from "../theme";

type Props = {
  icon: React.ReactNode;
  label: string;
  sub: string;
  startFrame: number;
  durationFrames: number;
};

export const FeatureCard: React.FC<Props> = ({
  icon,
  label,
  sub,
  startFrame,
  durationFrames,
}) => {
  const frame = useCurrentFrame() - startFrame;
  const { fps } = useVideoConfig();

  const inDur = fps * 0.4;
  const outStart = durationFrames - fps * 0.4;

  const opacity = interpolate(
    frame,
    [0, inDur, outStart, durationFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const y = interpolate(frame, [0, inDur], [60, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity,
        transform: `translateY(${y}px)`,
        fontFamily: FONT_STACK,
      }}
    >
      <div
        style={{
          width: 360,
          height: 360,
          borderRadius: 32,
          border: `4px solid ${BRAND.goldMid}`,
          background:
            "radial-gradient(circle at center, rgba(212,175,55,0.18) 0%, rgba(0,0,0,0.85) 70%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 0 60px rgba(212,175,55,0.35)`,
        }}
      >
        {icon}
      </div>
      <div
        style={{
          marginTop: 60,
          fontSize: 84,
          fontWeight: 900,
          letterSpacing: 2,
          background: BRAND.goldGradientText,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          textTransform: "uppercase",
          padding: "0 60px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          marginTop: 16,
          fontSize: 36,
          fontWeight: 500,
          color: BRAND.whiteSoft,
          letterSpacing: 2,
          textAlign: "center",
        }}
      >
        {sub}
      </div>
    </div>
  );
};
