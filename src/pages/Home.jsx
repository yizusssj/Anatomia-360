import { useState } from "react";
import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import logo from "../assets/logochat.png";

export default function Home() {
  const [openExplore, setOpenExplore] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0f15] text-white pb-24 relative">
      <div className="mx-auto w-full px-6 pt-12">
        <div className="flex justify-center">
  <img
    src={logo}
    alt="Anatomia 360"
    className="w-[600px] mx-auto drop-shadow-[0_0_35px_rgba(255,255,255,0.25)]"
  />
</div>
      </div>

      {/* Overlay Explore Menu */}
      {openExplore && (
        <div className="fixed inset-0 z-50">
          {/* fondo oscuro */}
          <button
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpenExplore(false)}
            aria-label="Cerrar menú"
          />

          {/* panel flotante (como en tu imagen) */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-24 w-[88%] max-w-md">
            <div className="rounded-[28px] bg-black/35 border border-white/10 backdrop-blur-md p-5 shadow-2xl">
              <Link
                to="/explore"
                className="block w-full text-center rounded-full bg-black/70 py-4 font-semibold hover:bg-black/80 transition"
                onClick={() => setOpenExplore(false)}
              >
                Iniciar Estudio
              </Link>

              <div className="mt-4 space-y-3">
                <Link
                  to="/quiz"
                  className="flex items-center gap-3 rounded-full bg-white/80 text-black px-4 py-3 font-semibold hover:bg-white transition"
                  onClick={() => setOpenExplore(false)}
                >
                  <span className="text-sm">✦</span> Quiz
                </Link>

                <Link
                  to="/progress"
                  className="flex items-center gap-3 rounded-full bg-white/80 text-black px-4 py-3 font-semibold hover:bg-white transition"
                  onClick={() => setOpenExplore(false)}
                >
                  <span className="text-sm">✦</span> Progreso
                </Link>

                <button
                  type="button"
                  className="w-full flex items-center gap-3 rounded-full bg-white/80 text-black px-4 py-3 font-semibold hover:bg-white transition"
                  onClick={() => {
                    // luego hacemos /multimedia si quieres
                    alert("Multimedia (pendiente)");
                    setOpenExplore(false);
                  }}
                >
                  <span className="text-sm">✦</span> Multimedia
                </button>
              </div>

              {/* botón X */}
              <div className="mt-5 flex justify-center">
                <button
                  className="h-12 w-12 rounded-full bg-white text-black font-bold hover:opacity-90 transition"
                  onClick={() => setOpenExplore(false)}
                  aria-label="Cerrar"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom nav */}
      <BottomNav onExplore={() => setOpenExplore(true)} />
    </div>
  );
}
