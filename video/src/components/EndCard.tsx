import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { BRAND, FONT_STACK } from "../theme";
import { LogoShield } from "./LogoShield";
import { PhoneIcon, MailIcon, GlobeIcon } from "./Icons";

type Props = {
  startFrame: number;
};

export const EndCard: React.FC<Props> = ({ startFrame }) => {
  const frame = useCurrentFrame() - startFrame;
  const { fps } = useVideoConfig();

  const fade = interpolate(frame, [0, fps * 0.5], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const logoScale = interpolate(frame, [0, fps * 0.6], [0.85, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const lineY = (i: number) =>
    interpolate(
      frame,
      [fps * (0.4 + i * 0.12), fps * (0.7 + i * 0.12)],
      [30, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

  const lineOpacity = (i: number) =>
    interpolate(
      frame,
      [fps * (0.4 + i * 0.12), fps * (0.7 + i * 0.12)],
      [0, 1],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

  const ctaPulse = interpolate(
    frame % (fps * 1.5),
    [0, fps * 0.75, fps * 1.5],
    [1, 1.04, 1],
    { easing: Easing.bezier(0.42, 0, 0.58, 1) }
  );

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 240,
        opacity: fade,
        fontFamily: FONT_STACK,
      }}
    >
      <div style={{ transform: `scale(${logoScale})` }}>
        <LogoShield startFrame={startFrame} />
      </div>

      <div
        style={{
          marginTop: -60,
          fontSize: 38,
          fontWeight: 600,
          letterSpacing: 6,
          color: BRAND.whiteSoft,
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        ELAN Authorized · Locally Owned
      </div>

      <div
        style={{
          marginTop: 80,
          display: "flex",
          flexDirection: "column",
          gap: 36,
          alignItems: "flex-start",
        }}
      >
        {[
          { icon: <PhoneIcon />, text: "(256) 275-0767" },
          { icon: <MailIcon />, text: "info@smartalarmllc.com" },
          { icon: <GlobeIcon />, text: "smartalarmllc.com" },
        ].map((row, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 28,
              opacity: lineOpacity(i),
              transform: `translateY(${lineY(i)}px)`,
            }}
          >
            {row.icon}
            <div
              style={{
                fontSize: 56,
                fontWeight: 700,
                color: BRAND.white,
                letterSpacing: 1,
              }}
            >
              {row.text}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 90,
          padding: "32px 64px",
          borderRadius: 100,
          background: BRAND.goldGradient,
          color: BRAND.black,
          fontSize: 56,
          fontWeight: 900,
          letterSpacing: 4,
          textTransform: "uppercase",
          boxShadow: `0 0 80px rgba(245,208,97,0.55)`,
          transform: `scale(${ctaPulse})`,
        }}
      >
        Book Free Consult
      </div>
    </div>
  );
};
