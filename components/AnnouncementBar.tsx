"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="relative bg-navy-deep text-white text-center text-sm py-2 px-10">
      <span>
        ⚡ <strong className="font-heading font-bold">Launch price: $99</strong> — every future guide update included free.
      </span>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-300 hover:text-white"
      >
        <X size={16} />
      </button>
    </div>
  );
}
