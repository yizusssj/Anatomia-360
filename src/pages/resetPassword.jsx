import { Link } from "react-router-dom";

export default function ResetPassword() {
  return (
    <div className="min-h-screen bg-[#0b0f15] text-white">
      <div className="mx-auto w-full max-w-md px-6 pt-10 pb-24">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold">NUEVA CONTRASEÑA</h1>
          <p className="mt-2 text-white/70 text-sm">
            Crea tu nueva contraseña
          </p>
        </div>

        <div className="mt-10 space-y-4">
          <input
            type="password"
            className="w-full rounded-2xl bg-white/25 text-white placeholder-white/70 px-5 py-3 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
            placeholder="Nueva contraseña"
          />
          <input
            type="password"
            className="w-full rounded-2xl bg-white/25 text-white placeholder-white/70 px-5 py-3 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
            placeholder="Confirmar contraseña"
          />
        </div>

        <div className="mt-10 flex items-center justify-between gap-4">
          <Link
            to="/reset-success"
            className="inline-flex items-center justify-center rounded-full bg-black/70 px-6 py-2.5 text-sm font-semibold ring-1 ring-white/10 hover:bg-black/80 transition"
          >
            Volver
          </Link>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-black/70 px-6 py-2.5 text-sm font-semibold ring-1 ring-white/10 hover:bg-black/80 transition"
          >
            Guardar
          </Link>
        </div>
      </div>
    </div>
  );
}
