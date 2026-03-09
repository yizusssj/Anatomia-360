// src/pages/Progress.jsx
import { Link } from "react-router-dom";

const ITEMS = [
  { id: "oseo", title: "Sistema óseo", color: "orange", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: "nervioso", title: "Sistema nervioso", color: "pink", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: "muscular", title: "Sistema muscular", color: "yellow", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: "digestivo", title: "Sistema digestivo", color: "green", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

function Ring({ percent = 0, color = "orange" }) {
  // stroke “bonito” tipo figma
  const size = 56;
  const stroke = 6;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const p = Math.max(0, Math.min(100, percent));
  const dash = (p / 100) * c;

  const colors = {
    orange: { ring: "stroke-orange-400", bg: "stroke-orange-200/30", text: "text-orange-500" },
    pink: { ring: "stroke-pink-400", bg: "stroke-pink-200/30", text: "text-pink-500" },
    yellow: { ring: "stroke-yellow-400", bg: "stroke-yellow-200/30", text: "text-yellow-500" },
    green: { ring: "stroke-green-400", bg: "stroke-green-200/30", text: "text-green-500" },
  };

  const cls = colors[color] ?? colors.orange;

  return (
    <div className="relative w-[56px] h-[56px] shrink-0">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg]">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          className={`${cls.bg}`}
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          className={`${cls.ring}`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c - dash}`}
        />
      </svg>

      <div className="absolute inset-0 grid place-items-center">
        <div className="text-[10px] leading-tight text-center">
          <div className="text-[9px] text-black/50">Status</div>
          <div className={`font-semibold ${cls.text}`}>{p}%</div>
        </div>
      </div>
    </div>
  );
}

export default function Progress() {
  return (
    <div className="min-h-[calc(100vh-64px)] px-5 pt-6 pb-6">
      {/* Header */}
      <div className="relative flex items-center justify-center mb-6">
        <Link
          to="/home"
          className="absolute left-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/10 hover:bg-white/15"
          aria-label="Volver"
        >
          <span className="text-white text-lg leading-none">←</span>
        </Link>

        <h1 className="text-white text-lg font-semibold">Mi progreso</h1>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {ITEMS.map((it) => (
          <div
            key={it.id}
            className="bg-white rounded-2xl px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] flex items-center gap-4"
          >
            <Ring percent={0} color={it.color} />

            <div className="min-w-0">
              <div
                className={[
                  "text-sm font-semibold",
                  it.color === "orange" ? "text-orange-500" : "",
                  it.color === "pink" ? "text-pink-500" : "",
                  it.color === "yellow" ? "text-yellow-500" : "",
                  it.color === "green" ? "text-green-500" : "",
                ].join(" ")}
              >
                {it.title}
              </div>
              <div className="text-[11px] text-black/55 leading-snug line-clamp-2">
                {it.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
