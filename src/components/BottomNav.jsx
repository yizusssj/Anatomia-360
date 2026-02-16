import { NavLink } from "react-router-dom";

export default function BottomNav({ onExplore }) {
  const base =
    "flex flex-col items-center justify-center gap-1 py-2 text-[11px] w-full";

  const tabClass = ({ isActive }) =>
    `${base} ${isActive ? "text-white" : "text-white/60"}`;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-black/40 backdrop-blur-md border-t border-white/10">
      <div className="mx-auto max-w-md px-6">
        <div className="grid grid-cols-3 py-2">
          <NavLink to="/home" className={tabClass}>
            <span className="text-lg">⌂</span>
            Inicio
          </NavLink>

          {/* Explorar abre menú */}
          <button
            type="button"
            onClick={onExplore}
            className={`${base} text-white/60 hover:text-white transition`}
          >
            <span className="text-lg">⌕</span>
            Explorar
          </button>

          <NavLink to="/settings" className={tabClass}>
            <span className="text-lg">⚙</span>
            Ajustes
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
