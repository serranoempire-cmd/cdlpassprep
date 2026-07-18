import Image from "next/image";

type GuideCoverProps = {
  number: number;
  title: string;
  className?: string;
  priority?: boolean;
};

export default function GuideCover({ number, title, className = "", priority = false }: GuideCoverProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg shadow-card border border-amber/20 aspect-[2/3] ${className}`}
    >
      <Image
        src={`/covers/guide-${String(number).padStart(2, "0")}.jpg`}
        alt={`${title} — CDLPassPrep guide ${number} of 17 cover`}
        fill
        sizes="(max-width: 768px) 45vw, 220px"
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
