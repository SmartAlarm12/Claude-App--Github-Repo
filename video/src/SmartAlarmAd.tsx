import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from "remotion";
import { BRAND, FONT_STACK } from "./theme";
import { CircuitBackground } from "./components/CircuitBackground";
import { LogoShield } from "./components/LogoShield";
import { Equalizer } from "./components/Equalizer";
import { FeatureCard } from "./components/FeatureCard";
import { SpeakerIcon, TheaterIcon, HomeIcon } from "./components/Icons";
import { EndCard } from "./components/EndCard";

export const FPS = 30;
export const DURATION_SECONDS = 15;
export const TOTAL_FRAMES = FPS * DURATION_SECONDS;

const Vignette: React.FC = () => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.65) 100%)",
      pointerEvents: "none",
    }}
  />
);

const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoOpacity = interpolate(frame, [0, fps * 0.4], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const logoScale = interpolate(frame, [0, fps * 1.2], [0.7, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const flash = interpolate(frame, [fps * 1.6, fps * 2.0], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.black,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
        }}
      >
        <LogoShield />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: BRAND.goldHi,
          opacity: flash * 0.18,
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};

const TaglineScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const line1Y = interpolate(frame, [0, fps * 0.4], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const line1Op = interpolate(frame, [0, fps * 0.4], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const line2Y = interpolate(frame, [fps * 0.3, fps * 0.7], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const line2Op = interpolate(frame, [fps * 0.3, fps * 0.7], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.black,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: FONT_STACK,
        padding: 80,
      }}
    >
      <div
        style={{
          fontSize: 110,
          fontWeight: 900,
          color: BRAND.white,
          textAlign: "center",
          letterSpacing: 2,
          lineHeight: 1.05,
          opacity: line1Op,
          transform: `translateY(${line1Y}px)`,
        }}
      >
        Your home,
      </div>
      <div
        style={{
          fontSize: 140,
          fontWeight: 900,
          background: BRAND.goldGradientText,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          letterSpacing: 4,
          lineHeight: 1.05,
          marginTop: 20,
          opacity: line2Op,
          transform: `translateY(${line2Y}px)`,
        }}
      >
        SMARTER.
      </div>
      <div
        style={{
          marginTop: 80,
          opacity: line2Op,
          transform: `translateY(${line2Y}px)`,
        }}
      >
        <Equalizer width={900} height={200} bars={36} />
      </div>
    </AbsoluteFill>
  );
};

const FeaturesScene: React.FC = () => {
  const cardDur = 60;

  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.black }}>
      <FeatureCard
        startFrame={0}
        durationFrames={cardDur}
        icon={<SpeakerIcon />}
        label="ELAN Audio"
        sub="Multi-room sound, every room, one app."
      />
      <FeatureCard
        startFrame={cardDur}
        durationFrames={cardDur}
        icon={<TheaterIcon />}
        label="Home Theaters"
        sub="Cinema in your living room."
      />
      <FeatureCard
        startFrame={cardDur * 2}
        durationFrames={cardDur}
        icon={<HomeIcon />}
        label="Smart Automation"
        sub="Lights, climate & security in one tap."
      />
    </AbsoluteFill>
  );
};

export const SmartAlarmAd: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.black }}>
      <CircuitBackground />

      <Sequence durationInFrames={FPS * 2}>
        <HookScene />
      </Sequence>

      <Sequence from={FPS * 2} durationInFrames={FPS * 2}>
        <TaglineScene />
      </Sequence>

      <Sequence from={FPS * 4} durationInFrames={FPS * 6}>
        <FeaturesScene />
      </Sequence>

      <Sequence from={FPS * 10} durationInFrames={FPS * 5}>
        <EndCard startFrame={0} />
      </Sequence>

      <Vignette />
    </AbsoluteFill>
  );
};
