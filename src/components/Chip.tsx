import { memo } from "react";

export type ChipProps = {
  label: string;
  className?: string;
};

const BASE_CLASSES =
  "bg-white/90 border border-black/10 px-2 py-1 rounded-full text-xs text-black/75";

function ChipBase({ label, className }: ChipProps) {
  return (
    <span className={className ? `${BASE_CLASSES} ${className}` : BASE_CLASSES}>
      {label}
    </span>
  );
}

const Chip = memo(ChipBase);

export default Chip;
