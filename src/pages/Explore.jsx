import { useMemo, useState } from "react";
import BottomNav from "../components/BottomNav";
import "@google/model-viewer";


// Capas simuladas (luego las conectamos al modelo 3D real)
const DEFAULT_LAYERS = [
  { id: "skeletal", name: "Sistema óseo", on: true },
  { id: "muscular", name: "Sistema muscular", on: false },
  { id: "nervous", name: "Sistema nervioso", on: false },
  { id: "circulatory", name: "Sistema circulatorio", on: false },
  { id: "organs", name: "Órganos", on: false },
];

export default function Explore() {
  const [layers, setLayers] = useState(DEFAULT_LAYERS);
  const [openPanel, setOpenPanel] = useState(true);
  const activeCount = useMemo(() => layers.filter((l) => l.on).length, [layers]);

  function toggleLayer(id) {
    setLayers((prev) =>
      prev.map((l) => (l.id === id ? { ...l, on: !l.on } : l))
    );
  }

  function setSolo(id) {
    setLayers((prev) => prev.map((l) => ({ ...l, on: l.id === id })));
  }

  function setAll(val) {
    setLayers((prev) => prev.map((l) => ({ ...l, on: val })));
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#0b0f15]text-white pb-24">
      {/* Header */}
      <div className="mx-auto w-full max-w-md px-6 pt-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold">Explorar</h1>
            <p className="text-xs text-white/60 mt-1">
              Capas activas: <span className="text-white">{activeCount}</span>
            </p>
          </div>

          <button
            onClick={() => setOpenPanel((s) => !s)}
            className="rounded-full bg-white/10 border border-white/10 px-4 py-2 text-xs font-semibold hover:bg-white/15 transition"
          >
            {openPanel ? "Ocultar capas" : "Mostrar capas"}
          </button>
        </div>

       {/* Modelo 3D */}
<div className="mt-6 rounded-[32px] bg-black/35 border border-white/10 overflow-hidden h-[440px]">
  <model-viewer
    src="/models/lkn.glb"
    alt="Modelo prueba"
    camera-controls
    auto-rotate
    environment-image="neutral"
    exposure="1.4"
    shadow-intensity="1.5"
    shadow-softness="0.8"
    tone-mapping="aces"
    style={{ width: "100%", height: "100%" }}
  />
</div>

{/* chips de estado */}
<div className="mt-6 flex flex-wrap justify-center gap-2">
  {layers
    .filter((l) => l.on)
    .map((l) => (
      <span
        key={l.id}
        className="text-[11px] rounded-full bg-white/10 border border-white/10 px-3 py-1"
      >
        {l.name}
      </span>
    ))}
</div>

        {/* Panel de capas */}
        {openPanel && (
          <div className="mt-6 rounded-[28px] bg-black/35 border border-white/10 p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-extrabold">Capas</h2>

              <div className="flex gap-2">
                <button
                  onClick={() => setAll(true)}
                  className="rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-[11px] font-semibold hover:bg-white/15 transition"
                >
                  Todo
                </button>
                <button
                  onClick={() => setAll(false)}
                  className="rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-[11px] font-semibold hover:bg-white/15 transition"
                >
                  Nada
                </button>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {layers.map((l) => (
                <div
                  key={l.id}
                  className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/10 px-4 py-3"
                >
                  <div className="min-w-0">
                    <div className="font-semibold truncate">{l.name}</div>
                    <button
                      onClick={() => setSolo(l.id)}
                      className="text-[11px] text-white/60 hover:text-white hover:underline mt-1"
                      type="button"
                    >
                      Solo esta capa
                    </button>
                  </div>

                  {/* switch */}
                  <button
                    type="button"
                    onClick={() => toggleLayer(l.id)}
                    className={[
                      "h-7 w-12 rounded-full border transition flex items-center px-1",
                      l.on
                        ? "bg-white/80 border-white/20 justify-end"
                        : "bg-white/10 border-white/10 justify-start",
                    ].join(" ")}
                    aria-label={`Toggle ${l.name}`}
                  >
                    <span
                      className={[
                        "h-5 w-5 rounded-full transition",
                        l.on ? "bg-black" : "bg-white",
                      ].join(" ")}
                    />
                  </button>
                </div>
              ))}
            </div>

            {/* Acciones abajo */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <button className="rounded-2xl bg-white text-black font-extrabold py-3 hover:opacity-90 transition">
                Ver info
              </button>
              <button className="rounded-2xl bg-white/10 border border-white/10 font-semibold py-3 hover:bg-white/15 transition">
                Guardar
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom nav (Explorar no abre menú aquí) */}
      <BottomNav onExplore={() => {}} />
    </div>
  );
}
