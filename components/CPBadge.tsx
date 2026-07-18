export default function CPBadge({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      role="img"
      aria-label="CDLPassPrep logo"
    >
      <circle cx="20" cy="20" r="18.5" stroke="#F59E0B" strokeWidth="2" fill="#16233A" />
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fontFamily="var(--font-montserrat), sans-serif"
        fontWeight="900"
        fontSize="15"
        fill="#F59E0B"
        letterSpacing="0.5"
      >
        CP
      </text>
    </svg>
  );
}
