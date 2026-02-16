import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#0b0f15] text-white">
      <div className="mx-auto w-full max-w-md px-6 pt-10 pb-24">
        {/* Placeholder del logo + nombre */}
        <div className="flex flex-col items-center">
          {/* círculo logo (placeholder) */}
          <div className="h-20 w-20 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
            <span className="text-white/60 text-xs">LOGO</span>
          </div>

          <div className="mt-4 text-center">
            <div className="text-2xl font-extrabold tracking-[0.18em] text-[#1e8bd6] drop-shadow">
              ANATOMÍA 360
            </div>
          </div>
        </div>

        {/* Título grande */}
        <div className="mt-10">
          <h1 className="text-4xl font-extrabold leading-[1.05]">
            HOLA
            <br />
            ¡BIENVENIDO!
          </h1>
        </div>

        {/* Inputs */}
        <div className="mt-8 space-y-4">
          <input
            className="w-full rounded-2xl bg-white/25 text-white placeholder-white/70 px-5 py-3 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
            placeholder="Usuario o correo"
          />
          <input
            type="password"
            className="w-full rounded-2xl bg-white/25 text-white placeholder-white/70 px-5 py-3 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
            placeholder="Contraseña"
          />

          {/* link bajo inputs */}
          <div className="text-sm text-white/85">
            <Link to="/forgot" className="hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </div>

        {/* Botones abajo */}
        <div className="mt-10 flex items-center justify-between gap-4">
          <Link
            to="/register"
            className="inline-flex items-center justify-center rounded-full bg-black/70 px-6 py-2.5 text-sm font-semibold ring-1 ring-white/10 hover:bg-black/80 transition"
          >
            Registrarse
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
