import "./index.css";
import { Composition } from "remotion";
import { SmartAlarmAd, FPS, TOTAL_FRAMES } from "./SmartAlarmAd";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="SmartAlarmAd-Reels"
        component={SmartAlarmAd}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={1080}
        height={1920}
      />
      <Composition
        id="SmartAlarmAd-Square"
        component={SmartAlarmAd}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={1080}
        height={1080}
      />
    </>
  );
};
