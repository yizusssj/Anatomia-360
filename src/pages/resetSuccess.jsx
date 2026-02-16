import { Link } from "react-router-dom";

export default function ResetSuccess() {
  return (
    <div className="min-h-screen bg-[#0b0f15] text-white">
      <div className="mx-auto w-full max-w-md px-6 pt-10 pb-24">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold">¡LISTO!</h1>
          <p className="mt-2 text-white/70 text-sm">
            Contraseña restablecida correctamente
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/reset"
            className="inline-flex items-center justify-center rounded-full bg-black/70 px-8 py-3 text-sm font-semibold ring-1 ring-white/10 hover:bg-black/80 transition"
          >
            Crear nueva contraseña
          </Link>
        </div>

        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-white/70 hover:text-white hover:underline">
            Volver a iniciar sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
