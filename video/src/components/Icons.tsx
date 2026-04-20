import { BRAND } from "../theme";

const STROKE = BRAND.goldMid;
const FILL = BRAND.goldHi;

export const SpeakerIcon: React.FC = () => (
  <svg width={220} height={220} viewBox="0 0 100 100" fill="none">
    <rect
      x={20}
      y={10}
      width={60}
      height={80}
      rx={10}
      stroke={STROKE}
      strokeWidth={4}
    />
    <circle cx={50} cy={35} r={8} stroke={STROKE} strokeWidth={3} />
    <circle cx={50} cy={65} r={16} stroke={STROKE} strokeWidth={3} />
    <circle cx={50} cy={65} r={6} fill={FILL} />
    <circle cx={50} cy={35} r={3} fill={FILL} />
  </svg>
);

export const TheaterIcon: React.FC = () => (
  <svg width={220} height={220} viewBox="0 0 100 100" fill="none">
    <rect
      x={10}
      y={20}
      width={80}
      height={50}
      rx={4}
      stroke={STROKE}
      strokeWidth={4}
    />
    <rect x={16} y={26} width={68} height={38} fill={FILL} opacity={0.18} />
    <path
      d="M 25 50 L 45 38 L 45 62 Z"
      fill={FILL}
      stroke={STROKE}
      strokeWidth={2}
    />
    <rect x={50} y={40} width={28} height={4} fill={STROKE} />
    <rect x={50} y={50} width={20} height={4} fill={STROKE} />
    <rect x={50} y={60} width={24} height={4} fill={STROKE} />
    <rect x={20} y={78} width={12} height={10} rx={2} fill={STROKE} />
    <rect x={36} y={78} width={12} height={10} rx={2} fill={STROKE} />
    <rect x={52} y={78} width={12} height={10} rx={2} fill={STROKE} />
    <rect x={68} y={78} width={12} height={10} rx={2} fill={STROKE} />
  </svg>
);

export const HomeIcon: React.FC = () => (
  <svg width={220} height={220} viewBox="0 0 100 100" fill="none">
    <path
      d="M 50 10 L 90 45 L 90 90 L 60 90 L 60 60 L 40 60 L 40 90 L 10 90 L 10 45 Z"
      stroke={STROKE}
      strokeWidth={4}
      fill={BRAND.black}
    />
    <circle cx={50} cy={40} r={8} fill={FILL} />
    <path
      d="M 30 35 Q 50 20 70 35"
      stroke={FILL}
      strokeWidth={2}
      fill="none"
      opacity={0.7}
    />
    <path
      d="M 22 30 Q 50 8 78 30"
      stroke={FILL}
      strokeWidth={2}
      fill="none"
      opacity={0.45}
    />
  </svg>
);

export const PhoneIcon: React.FC<{ size?: number }> = ({ size = 60 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"
      stroke={BRAND.goldMid}
      strokeWidth={2}
      fill={BRAND.black}
    />
  </svg>
);

export const MailIcon: React.FC<{ size?: number }> = ({ size = 60 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect
      x={2}
      y={4}
      width={20}
      height={16}
      rx={2}
      stroke={BRAND.goldMid}
      strokeWidth={2}
    />
    <path
      d="M2 6 L12 14 L22 6"
      stroke={BRAND.goldMid}
      strokeWidth={2}
      fill="none"
    />
  </svg>
);

export const GlobeIcon: React.FC<{ size?: number }> = ({ size = 60 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx={12} cy={12} r={10} stroke={BRAND.goldMid} strokeWidth={2} />
    <path
      d="M2 12h20 M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10c-2.5-3-4-6.5-4-10s1.5-7 4-10z"
      stroke={BRAND.goldMid}
      strokeWidth={2}
      fill="none"
    />
  </svg>
);
