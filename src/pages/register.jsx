import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen bg-[#0b0f15] text-white">
      <div className="mx-auto w-full max-w-md px-6 pt-10 pb-24">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold">INTRODUCE TUS DATOS</h1>
          <p className="mt-2 text-white/70 text-sm">Crea tu cuenta para continuar</p>
        </div>

        <div className="mt-10 space-y-4">
          <input
            className="w-full rounded-2xl bg-white/25 text-white placeholder-white/70 px-5 py-3 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
            placeholder="Usuario"
          />
          <input
            className="w-full rounded-2xl bg-white/25 text-white placeholder-white/70 px-5 py-3 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
            placeholder="Correo"
          />
          <input
            type="password"
            className="w-full rounded-2xl bg-white/25 text-white placeholder-white/70 px-5 py-3 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
            placeholder="Contraseña"
          />
        </div>

        <div className="mt-10 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-black/70 px-6 py-2.5 text-sm font-semibold ring-1 ring-white/10 hover:bg-black/80 transition"
          >
            Volver
          </Link>

          <Link
            to="/home"
            className="inline-flex items-center justify-center rounded-full bg-black/70 px-6 py-2.5 text-sm font-semibold ring-1 ring-white/10 hover:bg-black/80 transition"
          >
            Continuar
          </Link>
        </div>
      </div>
    </div>
  );
}
